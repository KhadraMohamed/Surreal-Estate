import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image from "../image/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={image} alt="navbarlogo" />
      <ul className="navbar-links">
        <Link className="navbar-link-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-link-item" to="/add-property">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
