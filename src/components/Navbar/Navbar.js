import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="car__navbar">
      <div className="car__navbar-links">
        <div className="car__navbar-links_logo">
          <p>Logo</p>
        </div>
        <div className="car__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/shop">Shop</a>
          </p>
          <p>
            <a href="/about">About Us</a>
          </p>
        </div>
      </div>
      <div className="car__navbar-sign">
        <p>Sign in</p>
        <a href="/login">
          <button type="button">Login</button>
        </a>
      </div>
      <div className="car__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="car__navbar-menu_container scale-up-center">
            <div className="car__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#shop">Shop</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
            </div>
            <div className="car__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <a href="/login">
                <button type="button">Login</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
