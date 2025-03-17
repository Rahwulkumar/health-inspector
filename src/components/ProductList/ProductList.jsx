// src/components/ProductList.jsx
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [barcode, setBarcode] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProductByBarcode = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://127.0.0.1:8000/product/${barcode}`);
      if (!response.ok) {
        throw new Error("Product not found.");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-list">
      <h1>Search Product by Barcode</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter barcode..."
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <button onClick={fetchProductByBarcode}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {product && <ProductCard product={product} />}
    </div>
  );
};

export default ProductList;
