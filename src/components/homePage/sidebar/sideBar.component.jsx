import React from "react";
import "./sideBar.styles.css";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  let naviagte = useNavigate()
  const handleLogout = () => {
    localStorage.setItem('token', '');
    naviagte('/')
  }
  return (
    <>
      <section className="homePageSection">
        <nav className="open">
          <div className="logo">
            <i className="bx bx-menu menu-icon"></i>
          </div>
          <div className="sidebar">
            <div className="logo">
              <i className="bx bx-menu menu-icon"></i>
            </div>

            <div className="sidebar-content">
              <ul className="lists">
                <li className="list">
                  <Link to="/admission" className="nav-link">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="link">Admission</span>
                  </Link>
                </li>
                <li className="list">
                  <Link to="/attendance" className="nav-link">
                    <i className="bx bx-bell icon"></i>
                    <span className="link">Attendance</span>
                  </Link>
                </li>
                <li className="list">
                  <Link to="/results" className="nav-link">
                    <i className="bx bx-message-rounded icon"></i>
                    <span className="link">Results</span>
                  </Link>
                </li>
                <li className="list">
                  <Link to="/eBooks" className="nav-link">
                    <i className="bx bx-pie-chart-alt-2 icon"></i>
                    <span className="link">eBooks</span>
                  </Link>
                </li>
                <li className="list">
                  <Link to="/community" className="nav-link">
                    <i className="bx bx-pie-chart-alt-2 icon"></i>
                    <span className="link">Community</span>
                  </Link>
                </li>
                <li>
                  <button className="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="overlay"></section>
      </section>
    </>
  );
};

export default SideBar;
