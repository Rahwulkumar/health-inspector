import React, { useState } from 'react';
import { addProduct } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        nutritional_facts: {},
        ingredients: []
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleIngredientChange = (index, field, value) => {
        const updatedIngredients = [...product.ingredients];
        updatedIngredients[index][field] = value;
        setProduct((prevProduct) => ({
            ...prevProduct,
            ingredients: updatedIngredients
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addedProduct = await addProduct(product);
            console.log('Product added:', addedProduct);
            navigate('/product-list'); // Redirect to product list after adding a product
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={product.category} onChange={handleChange} />
            </div>
            {/* Add more fields for nutritional facts and ingredients */}
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;