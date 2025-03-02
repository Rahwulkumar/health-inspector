// src/pages/FoodAnalysisPage/FoodAnalysisPage.jsx
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/apiService';
import ProductCard from '../../components/ProductCard/ProductCard';
import './FoodAnalysisPage.css';

const FoodAnalysisPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getAllProducts();
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            } catch (error) {
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handle search in real-time
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return (
        <div className="food-analysis-container">
            <h2>Food Analysis</h2>
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a product..."
                />
            </div>

            {loading && <p className="loading">Loading products...</p>}
            {error && <p className="error">{error}</p>}

            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="no-results">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default FoodAnalysisPage;