import React from "react";
import "./Navbar.css";
import nav_logo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={nav_logo} className="nav-logo" alt="" />
        <a
          href="http://localhost:3000/"
          rel="noopener noreferrer"
          className="Adminbtn"
        >
          Website
        </a>

        <img src={navProfile} className="nav-profile" alt="" />
      </div>
    </>
  );
};

export default Navbar;
