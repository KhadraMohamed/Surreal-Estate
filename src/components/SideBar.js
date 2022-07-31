import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={`/?query={"city": "Manchester"}`} />
      Manchester
      <Link to={`/?query={"city": "Sheffield"}`} />
      Sheffield
      <Link to={`/?query={"city": "Leeds"}`} />
      Leeds
      <Link to={`/?query={"city": "Liverpool"}`} />
      Liverpool
    </div>
  );
};

export default SideBar;
