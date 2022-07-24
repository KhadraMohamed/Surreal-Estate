import React from "react";
import "../styles/navbar.css";
import image from "../image/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={image} alt="navbarlogo" />
      <ul className="navbar-links">
        <li className="navbar-links-item"> View Properties </li>
        <li className="navbar-links-item"> Add a Property </li>
      </ul>
    </div>
  );
};

export default NavBar;
