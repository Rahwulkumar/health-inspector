import React, { useState } from 'react';
import ProductForm from '../../components/ProductForm/ProductForm'
import HarmScoreDisplay from '../../components/HarmScoreDisplay/HarmScoreDisplay'

const ProductPage = () => {
    const [productId, setProductId] = useState(null);

    const handleProductAdded = (addedProduct) => {
        setProductId(addedProduct.id);
    };

    return (
        <div>
            <ProductForm onProductAdded={handleProductAdded} />
            {productId && <HarmScoreDisplay productId={productId} />}
        </div>
    );
};

export default ProductPage;