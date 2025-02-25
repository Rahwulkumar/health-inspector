import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Health Inspector" />
        {/* <span>Health Inspector</span> */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <Link to="/signup" className="signup">
          Sign up
        </Link>
        <Link to="/login" className="login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
