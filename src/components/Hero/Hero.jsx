// src/components/Hero/Hero.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import foodImage from "../../assets/images/FoodAnalsisHomePage.png";
import cosmeticImage from "../../assets/images/CosmeticsHomePage.png";


const Hero = () => {
  const [isCosmetic, setIsCosmetic] = useState(false);

  return (
    <section id="home" className={`hero ${isCosmetic ? "cosmetic-mode" : "food-mode"}`}>
      {/* This is the animated wavy background */}
      <div className="hero-wave"></div>
      <div className="hero-content">
        <h1>Empower. Evaluate. Evolve.</h1>
        <p>
          Welcome to HealthInspector, the ultimate platform made to provide
          comprehensive reviews and in-depth insights into food and cosmetic
          products...
        </p>
        <div className="cta-buttons">
          <Link to="/food-analysis" className="cta food"> {/* Ensure this path matches the one defined in App.jsx */}
            <span>🍎</span> Food Analysis
          </Link>
          <Link to="/cosmetics-analysis" className="cta cosmetic">
            <span>💄</span> Cosmetic Analysis
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={isCosmetic ? cosmeticImage : foodImage} alt="Product" />
      </div>
    </section>
  );
};

export default Hero;