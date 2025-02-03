import { memo, useState } from "react";
import "../App.scss";
import video from "../asset/hero.mp4";
import Logo from "../asset/logo.png";
import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { UserData } from "../hooks/context/User";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, loading } = UserData();


  const showToast = useShowToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Error", "Please fill all fields", "error");
      return;
    }

    loginUser(email, password, navigate);
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop />

          <div className="textDiv">
            <h2 className="title">
              Scopri di più sulla natura che ci circonda !
            </h2>
            <p>Adotta la pace della natura !</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Non hai un account ?</span>
            <Link to={"/register"}>
              <button className="btn">Registrati</button>
            </Link>
          </div>
        </div>
        {/*Div video**/}

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt="logo image" className="" />
            <h3>Bentornato !</h3>
          </div>

          <form action="" className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="username">Email</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Accedi </span>
              <AiOutlineSwapRight className="icon" />
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Login);