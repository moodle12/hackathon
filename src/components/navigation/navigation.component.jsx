import React from "react";
import "./navigation.styles.css";
// import {logo} from "../../hack.png"
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/payment">Fee Payment</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          <Link className="desktop" to="/">
            <h1 className="logo">The Gap </h1>
          </Link>
          <h1 className="logo mobile">LS</h1>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
