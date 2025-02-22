import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; // Import custom CSS
import Reactlogo from "./image.png";
import Switch from "./toggle.jsx";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background color-nav ">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand" href="/">
          <img
            src={Reactlogo} //   image path
            alt="Auctiom Logo"
            className="logo"
          />
          <b>Auction Website</b>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">SignIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">DashBoard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Auction Bid</a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex search-bar">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-light" type="submit" >🔍</button>
          </form>

          {/* Theme Toggle Icon */}
          <Switch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
