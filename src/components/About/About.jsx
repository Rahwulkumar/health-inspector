import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/about-image.png"; // Replace with actual image path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Project</h2>
        <p>
          HealthInspector is a revolutionary AI-driven tool for evaluating food
          and cosmetic products, offering insights into their ingredients and potential
          health effects. Our mission is to empower consumers with data-driven
          decisions to lead a healthier lifestyle.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Project" />
      </div>
    </section>
  );
};

export default About;