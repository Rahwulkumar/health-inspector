import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="product-card" onClick={() => setShowDetails(!showDetails)}>
            <h3>{product.name}</h3>
            <p><strong>Brand:</strong> {product.brands}</p>
            <p><strong>Categories:</strong> {product.categories}</p>

            {showDetails && (
                <div className="product-details">
                    <h4>Ingredients</h4>
                    <p>{product.ingredients}</p>

                    <h4>Nutritional Facts</h4>
                    <ul>
                        <li><strong>Energy:</strong> {product.nutritional_facts.energy_kcal} kcal</li>
                        <li><strong>Fat:</strong> {product.nutritional_facts.fat} g</li>
                        <li><strong>Sugars:</strong> {product.nutritional_facts.sugars} g</li>
                        <li><strong>Protein:</strong> {product.nutritional_facts.protein} g</li>
                        <li><strong>Salt:</strong> {product.nutritional_facts.salt} g</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
