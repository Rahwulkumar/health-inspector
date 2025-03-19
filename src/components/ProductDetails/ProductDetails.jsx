import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/product/${barcode}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [barcode]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const getHealthScoreColor = (score) => {
    if (score >= 80) return "#4CAF50"; // Green
    if (score >= 50) return "#FFC107"; // Yellow
    return "#F44336"; // Red
  };

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <div className="product-card">
          <img src={product.image_url} alt={product.name} className="product-image" />
          <h1>{product.name}</h1>
          <p><strong>Brand:</strong> {product.brands || "N/A"}</p>
          <p><strong>Categories:</strong> {product.categories || "N/A"}</p>
          <p><strong>Ingredients:</strong> {product.ingredients || "N/A"}</p>

          {/* ✅ Health Score Section */}
          <div className="health-score-section">
            <h3>Health Score: {product.health_score !== undefined ? product.health_score : "N/A"}</h3>
            {product.health_score !== undefined && (
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${product.health_score}%`,
                    backgroundColor: getHealthScoreColor(product.health_score),
                  }}
                />
              </div>
            )}
          </div>

          {/* ✅ Score Details Section */}
          {product.score_details && (
            <div className="score-details">
              <p><strong>Negative Score:</strong> {product.score_details.negative_score}</p>
              <p><strong>Positive Score:</strong> {product.score_details.positive_score}</p>
            </div>
          )}
        </div>

        {/* ✅ Nutritional Facts Section */}
        <div className="nutrition-section">
          <h2>Nutritional Facts (Per 100g & Per Serving)</h2>
          {product.nutritional_facts ? (
            <table className="nutrition-table">
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Per 100g</th>
                  <th>Per Serving</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.nutritional_facts).map(([key, value]) => {
                  const baseName = key.replace(/_(100g|serving)$/, "");
                  if (key.endsWith("_100g")) {
                    return (
                      <tr key={baseName}>
                        <td>{baseName.replace(/_/g, " ").toUpperCase()}</td>
                        <td>{value || "?"}</td>
                        <td>{product.nutritional_facts[`${baseName}_serving`] || "?"}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          ) : (
            <p>No nutritional data available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
