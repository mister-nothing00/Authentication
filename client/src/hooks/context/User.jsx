import { createContext, useContext, useEffect, useState } from "react";
import useShowToast from "../useShowToast";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    fetchUser();
  }, []);

  async function registerUser(name, email, password, navigate) {
    try {
      const { data } = await axios.post("/user/register", {
        name,
        email,
        password,
      });
      showToast("Success", data.message, "success");
      setUser(data.user);
      setIsAuth(true);
      setLoading(false);
      navigate("/");
    } catch (error) {
      showToast("Error", error.message, "error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  // Funzione per il login
  async function loginUser(email, password, navigate) {
    setLoading(true);
    try {
      const { data } = await axios.post("/user/login", { email, password });
      showToast("Success", data.message, "success");
      setUser(data.user);
      setIsAuth(true);

      navigate("/");
    } catch (error) {
      showToast("Error", "Wrong Credentials", "error");
    } finally {
      setLoading(false);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get("/user/profile");
      setUser(data);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    try {
      await axios.get("/user/logout");
      navigate("/login");
    } catch (error) {
      showToast("Error", error.response.data.message, "error");
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logoutUser,
        user,
        isAuth,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
