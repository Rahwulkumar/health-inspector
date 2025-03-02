// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img 
                src={product.image || 'https://via.placeholder.com/150'} 
                alt={product.name} 
                className="product-image"
            />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>Harm Score: {product.final_score.toFixed(2)}</p>
                <button className="read-more-btn">Read more</button>
            </div>
        </div>
    );
};

export default ProductCard;