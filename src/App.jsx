import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./pages/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails"; // Import ProductDetails
import "./styles/App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product/:barcode" element={<ProductDetails />} /> {/* Product details page */}
      </Routes>
  );
}

export default App;
