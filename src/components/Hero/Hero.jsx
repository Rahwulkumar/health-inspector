import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foodImage from "../../assets/images/FoodAnalysisHomePage.png"; // Default Image
import cosmeticImage from "../../assets/images/CosmeticsHomePage.png"; // Hover Image
import cloudGreen from "../../assets/images/foodWave.svg"; // Default SVG
import cloudPink from "../../assets/images/cosmeticWave.svg"; // Hover SVG
import circleGreen from "../../assets/images/rightCircleHeroFood.svg"; // Default Circle SVG
import circlePink from "../../assets/images/rightCircleHeroCos.svg"; // Hover Circle SVG

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="container-fluid d-flex align-items-center position-relative hero-section"
      style={{
        padding: "5vw",
        backgroundColor: "#F8F9FA",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: "0",
      }}
    >
      {/* SVG Cloud (Top Left) */}
      <img
        src={isHovered ? cloudPink : cloudGreen}
        alt="Cloud"
        className="position-absolute cloud-svg"
        style={{
          top: "20px",
          left: "-60px",
          width: "824px",
          height: "765px",
          zIndex: "-1",
          transition: "0.3s ease-in-out",
        }}
      />

      <div className="row w-100">
        {/* Left Side (Text & Buttons) */}
        <div
          className="col-lg-6 d-flex flex-column justify-content-center text-content"
          style={{ position: "relative", zIndex: "1" }}
        >
          <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
            Empower. Evaluate. Evolve.
          </h1>
          <p className="text-muted fs-5">
            Welcome to HealthInspector, the ultimate platform made to provide
            comprehensive reviews and in-depth insights into food and cosmetic
            products, along with a detailed analysis of their potential risks
            and harmful effects.
          </p>
          <div className="d-flex gap-3">
            <a
              href="/food-analysis"
              className="btn btn-dark d-flex align-items-center px-4"
            >
              <i className="bi bi-box-seam me-2"></i> Food Analysis
            </a>
            <a
              href="/cosmetic-analysis"
              className="btn btn-outline-success d-flex align-items-center px-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <i className="bi bi-eyedropper me-2"></i> Cosmetic Analysis
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex justify-content-center position-relative">
          {/* Fixed Background Circle */}
          <img
            src={isHovered ? circlePink : circleGreen}
            alt="Background Shape"
            className="position-absolute"
            style={{
              width: "250%", // Adjust the size as needed
              height: "200%",
              // borderRadius: "10%",
              top: "110%",
              right: "-90%", // Push it to the right
              transform: "translateY(-50%)",
              zIndex: "-1",
              transition: "0.3s ease-in-out",
            }}
          />

          {/* Image (Independent Transition) */}
          <img
            src={isHovered ? cosmeticImage : foodImage}
            alt="Product Analysis"
            className="img-fluid rounded-circle position-relative"
            style={{
              width: "95%",
              height: "95%",
              top: "20%",

              transition: "0.3s ease-in-out",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
