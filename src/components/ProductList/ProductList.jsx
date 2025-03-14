import React, { useState } from 'react';
import { getProductByBarcode } from '../../services/apiService';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
    const [barcode, setBarcode] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        const fetchedProduct = await getProductByBarcode(barcode);

        if (fetchedProduct) {
            setProduct(fetchedProduct);
        } else {
            setError('Product not found.');
        }

        setLoading(false);
    };

    return (
        <>
            <Navbar />
            <div className="product-list-container">
                <h2>Search Product by Barcode</h2>
                <div className="search-container">
                    <input
                        type="text"
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                        placeholder="Enter product barcode..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}

                {product && <ProductCard product={product} />}
            </div>
            <Footer />
        </>
    );
};

export default ProductList;
