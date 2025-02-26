// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";  // ✅ Import Home Component
import Login from "./pages/Login/Login";
// import ProductForm from "./components/ProductForm/ProductForm";  // Import the ProductForm component
import ProductList from "./components/ProductList/ProductList";  // Import the ProductList component
import "./styles/App.css";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} /> {/* Add new route for ProductList */}
      </Routes>
    
  );
}

export default App;