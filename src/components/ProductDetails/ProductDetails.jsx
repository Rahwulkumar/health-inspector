import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="details-container">
        <p><strong>Barcode:</strong> {product.barcode}</p>
        <p><strong>Brand:</strong> {product.brands || "N/A"}</p>
        <p><strong>Categories:</strong> {product.categories || "N/A"}</p>
        <p><strong>Ingredients:</strong> {product.ingredients || "N/A"}</p>

        <h3>Nutritional Facts:</h3>
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
                const baseName = key.replace(/_(100g|serving)$/, ""); // Normalize names
                if (key.endsWith("_100g")) {
                  return (
                    <tr key={baseName}>
                      <td>{baseName.replace(/_/g, " ").toUpperCase()}</td>
                      <td>{value || "?"}</td>
                      <td>{product.nutritional_facts[`${baseName}_serving`] || "?"}</td>
                    </tr>
                  );
                }
                return null; // Skip "_serving" entries (already handled)
              })}
            </tbody>
          </table>
        ) : (
          <p>No nutritional data available.</p>
        )}

        <p><strong>Additives:</strong> {product.additives_tags?.join(", ") || "None"}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
