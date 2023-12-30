import React from "react";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import Logo from "../assets/food-image/logoo.png";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="contents">
      <form onSubmit={handleSubmit} className="form-details">
        <div className="food-logo">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="signup">
          <a href="#">
            <Link to="/Register">SignUp</Link>
          </a>
        </div>
        <div className="input-field">
          <label htmlFor="mail">
            <IoMdMail />
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="inp-style"
          />
        </div>

        <br />
        <br />

        <div className="input-fieldd">
          <label htmlFor="password">
            <RiLockPasswordFill />
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="inp-style"
          />
          <div className="eye">
            
              <IoIosEye />
            
          </div>
        </div>
        {err && <span className="wrong">Something went wrong...!</span>}
      </form>

      <div>
        <a className="bn49" href="/">
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
