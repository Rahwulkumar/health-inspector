// src/components/ProductList/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/apiService';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const fetchedProducts = await getAllProducts();
            console.log('Fetched Products:', fetchedProducts); // Log the response
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        } catch (error) {
            setError('Failed to fetch products. Please try again later.');
            console.error('Error fetching products:', error);
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
        <>
            <Navbar />
            <div className="product-list-container">
                <h2>Product List</h2>
                <div className="search-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a product..."
                    />
                </div>

                {loading && <p>Loading products...</p>}
                {error && <p>{error}</p>}

                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductList;