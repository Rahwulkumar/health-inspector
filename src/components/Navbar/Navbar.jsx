import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 700;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Health Inspector" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>
            About us
          </a>
        </li>
        <li>
          <a href="#team" onClick={(e) => { e.preventDefault(); handleScroll("team"); }}>
            Team
          </a>
        </li>
      </ul>
      <div className="navbar-auth">
        <a href="/signup" className="signup">
          Sign up
        </a>
        <a href="/login" className="login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;