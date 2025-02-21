import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import "./styles/App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default App;
