// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./pages/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
