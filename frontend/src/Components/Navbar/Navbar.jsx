import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropDown from "../Assets/dropDown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toogle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const isLoggedIn = useContext(ShopContext).isLoggedIn;
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>WEBKORPS</p>
      </div>
      <img
        src={dropDown}
        onClick={dropDown_toogle}
        className="nav-dropdown"
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to={"/mens"} style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to={"/womens"} style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to={"/kids"} style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        )}

        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
      <div>
        {isLoggedIn && (
          <a
            href="http://localhost:5173/"
            rel="noopener noreferrer"
            className="Adminbtn"
          >
            Admin
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
