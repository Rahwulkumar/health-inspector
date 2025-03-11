import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/icons/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px 5.5vw",
      }}
    >
      <div className="container-fluid d-flex justify-content-between">
        {/* Logo aligned to the left */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Health Inspector" width="220" />
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <a className="nav-link fw-bold text-black" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#about">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#team">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Authentication Links aligned to the right */}
        <div className="d-flex align-items-center">
          <a href="/signup" className="btn text-dark me-3 fw-semibold">
            Sign up
          </a>
          <a
            href="/login"
            className="btn btn-dark px-4 rounded-pill border-0 login-button"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
