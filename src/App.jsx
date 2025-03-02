// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";  
import Login from "./pages/Login/Login";
import FoodAnalysisPage from './pages/FoodAnalysisPage/FoodAnalysisPage'; // Import the FoodAnalysisPage component
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food-analysis" element={<FoodAnalysisPage />} />
      </Routes>
    </div>
  );
}

export default App;