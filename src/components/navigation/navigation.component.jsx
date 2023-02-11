import React, { useEffect } from "react";
import "./navigation.styles.css";
// import {logo} from "../../hack.png"
import { Link } from "react-router-dom";

const NavigationBar = () => {
  var loc = window.location.pathname;
  let loginId  = localStorage.getItem('login_id'); 
  console.log(loginId);
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
              <Link to="/loginUser">Home</Link>
            </li>
            <li>
              <a href="https://keen-jalebi-e541d2.netlify.app/" target="_blank" rel="noreferrer">Raise Donations</a>
            </li>
            {/* <li>
              <Link to="/payment">Fee Payment</Link>
            </li> */}
            {/* <li>
              <Link to="/logout">LogOut</Link>
            </li> */}
            <li>
              <Link to={`/profile/${loginId}`}>Student Profile</Link>
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
