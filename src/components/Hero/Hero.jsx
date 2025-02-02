import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/CosmeticsHomePage.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower. Evaluate. Evolve.</h1>
        <p>
          Welcome to HealthInspector, the ultimate platform made to provide comprehensive
          reviews and in-depth insights into food and cosmetic products...
        </p>
        <div className="cta-buttons">
          <Link to="/food-analysis" className="cta food"> 
            <span>🍎</span> Food Analysis
          </Link>
          <Link to="/cosmetics-analysis" className="cta cosmetic">
            <span>💄</span> Cosmetic Analysis
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Cosmetic Products" />
      </div>
    </section>
  );
};

export default Hero;