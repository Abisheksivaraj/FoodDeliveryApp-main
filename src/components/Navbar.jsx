import React from "react";
import Logo from "../assets/food-image/Headlogo.png";
import profile from "../assets/food-image/avatar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdBasket } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo-img">
        <Link to={"/"}>
          <img src={Logo} alt="" className="logo" />
        </Link>
        <span className="name">GoFood</span>
      </div>
      <div className="contents">
        <ul className="menus">
          <li>
            <a href="#">Home</a>{" "}
          </li>
          <li>
            <a href="#">Menu</a>{" "}
          </li>
          <li>
            <a href="#">AboutUs</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <div className="cart">
          <div className="carts">
            <IoMdBasket />
          </div>
          <span className="count">2</span>
        </div>
        <div className="profile">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={profile}
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
