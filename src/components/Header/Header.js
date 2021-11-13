import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import { Button } from '@mui/material';
import { CloseButton } from "react-bootstrap";

const Header = () => {
  // getting user data from context api
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navBg ">
        <div className="container-fluid container">

        <NavLink to="/home" className="navbar-brand justify-content-center ">
            <img
              className="w-75 logo "
              src="http://wordpress.zcube.in/wesecure/wp-content/themes/wesecure/inc/assets/images/logo.png"
              alt=""
            />
          </NavLink>
          <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link me-3"
                  activeClassName="active-nav"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link me-3"
                  activeClassName="active-nav"
                >
                  About
                </NavLink>
              </li>
              {user.email && (
                <><NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" ,fontWeight:"800"}}
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
               
                </>
              )}
            </ul>
          </div>
         
          <div
            className="collapse navbar-collapse justify-content-between ms-2"
            id="navbarNav"
          >
            {user.email ? (
              <div className="d-flex user pb-3">
                <li className="nav-item">
                  <p className="user-name text-dark">{user.displayName}</p>
                </li>
                <li className="nav-item pb">
                  <button
                    onClick={logout}
                    className="btn btn-outline-danger logout-btn"
                  >
                    Log Out
                  </button>
                </li>
              </div>
            ) : (
              <div className="user d-flex">
                <li className="nav-item">
                  <NavLink to="/login">
                    <button className="btn btn-outline-danger logout-btn">
                      Log In
                    </button>
                  </NavLink>
                </li>
              </div>
            )}
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Header;
