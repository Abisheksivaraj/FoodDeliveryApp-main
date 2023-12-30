import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "Firebase/firestore";
import { useNavigate } from "react-router-dom";
import { IoMdMail, IoIosEye, IoIosEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
// import { auth, db } from "../Firebase";

const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <div className="password-field">
      <label htmlFor="password">
        <RiLockPasswordFill />
      </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        className="inp-style"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="eye" onClick={togglePasswordVisibility}>
        {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
      </div>
    </div>
  );
};

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        username,
        email,
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="contents">
        <form onSubmit={handleSubmit} className="form-details">
          {/* ... other form fields ... */}
          <div className="name-field">
            <label htmlFor="username">
              <CgProfile />
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="inp-style"
            />
          </div>

          <div className="mail-field">
            <label htmlFor="email">
              <IoMdMail />
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Mail-id"
              className="inp-style"
            />
          </div>

          <PasswordInput
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          {/* ... other form fields ... */}

          <div className="button">
            <button type="submit" className="bn49">
              Signup
            </button>
          </div>
          <br />

          {loading && <span className="loader"> </span>}
          <br />
          {err && <span className="wrong">Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;
