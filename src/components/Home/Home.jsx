import React from "react";
import Navbar from "../Navbar/Navbar"; 
import Hero from "../Hero/Hero";
import About from "../About/About";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
