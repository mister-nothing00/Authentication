import React from "react";
import "./App.scss";
import { UserData } from "../src/hooks/context/User.jsx";
import { Spinner } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ErrorPage from "./pages/Error.jsx";

function App() {
  const {loading, user, isAuth } = UserData();

  return (
    <>
      {loading ? (
        <Spinner
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"20px"}
          mx={"auto"}
          height={"20px"}
        />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isAuth ? <Home user={user} /> : <Login />} />

            <Route path="/login" element={isAuth ? <Home user={user} /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home user={user}/> : <Register />}
            />
             <Route
              path="/error"
              element={<ErrorPage/>}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
