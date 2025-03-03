// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            {product.image && (
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                />
            )}
            <h3>{product.name}</h3>
            <p>Harm Score: {product.final_score?.toFixed(2) || 'N/A'}</p>
            <button className="read-more-btn">Read more</button>
        </div>
    );
};

export default ProductCard;