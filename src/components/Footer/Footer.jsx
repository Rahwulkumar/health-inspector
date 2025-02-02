import "./Footer.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import mastercardLogo from "../../assets/images/amex.png";
import discoverLogo from "../../assets/images/visa.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-company">
          <h2>Health <span>Inspector</span></h2>
          <p>📍 Address: 1762 School House Road</p>
          <p>📞 Call Us: 1233-777</p>
          <p>✉️ Email: healthinspector@contact.com</p>
          <p>⏰ Work Hours: 8:00 - 20:00, Sunday - Thursday</p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          <div>
            <h3>Account</h3>
            <p>Profile</p>
            <p>History</p>
            <p>Payments</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div>
            <h3>Help Center</h3>
            <p>Payments</p>
            <p>Refund</p>
            <p>Checkout</p>
            <p>Q&A</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Right Section - Payment & Social */}
        <div className="footer-payment">
          <p>© 2024, All rights reserved</p>
          <div className="payment-logos">
            {/* <img src={visaLogo} alt="Visa" /> */}
            <img src={mastercardLogo} alt="Mastercard" />
            <img src={discoverLogo} alt="Discover" />
          </div>
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
