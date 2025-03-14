// // src/pages/FoodDetailsPage/FoodDetailsPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
// import { getProductById } from '../../services/apiService';
// import './FoodDetailsPage.css';

// const FoodDetailsPage = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeTab, setActiveTab] = useState('ingredients');

//     useEffect(() => {
//         const fetchProductDetails = async () => {
//             try {
//                 setLoading(true);
//                 const data = await getProductById(id);
//                 setProduct(data);
//             } catch (err) {
//                 setError('Failed to fetch product details. Please try again later.');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductDetails();
//     }, [id]);

//     const renderHealthScore = (score) => {
//         let colorClass = '';
        
//         if (score >= 8) colorClass = 'excellent';
//         else if (score >= 6) colorClass = 'good';
//         else if (score >= 4) colorClass = 'moderate';
//         else colorClass = 'poor';
        
//         return (
//             <div className="health-score">
//                 <div className={`score-circle ${colorClass}`}>
//                     <span>{score ? score.toFixed(1) : 'N/A'}</span>
//                 </div>
//                 <p className="score-label">Health Score</p>
//                 <p className="score-description">
//                     {score >= 8 ? 'Excellent choice for your health' :
//                      score >= 6 ? 'Good health benefits' :
//                      score >= 4 ? 'Moderate health impact' :
//                      'May have health concerns'}
//                 </p>
//             </div>
//         );
//     };

//     const renderNutritionFacts = () => {
//         if (!product || !product.nutritional_facts) {
//             return <p className="no-data">No nutritional information available for this product.</p>;
//         }
        
//         return (
//             <div className="nutrition-facts">
//                 <h3>Nutrition Facts</h3>
//                 <div className="nutrition-table">
//                     <div className="nutrition-header">
//                         <p>Serving Size: {product.nutritional_facts.serving_size || 'Not specified'}</p>
//                     </div>
                    
//                     <div className="nutrition-row header">
//                         <span>Nutrient</span>
//                         <span>Amount</span>
//                         <span>% Daily Value</span>
//                     </div>
                    
//                     {Object.entries(product.nutritional_facts)
//                         .filter(([key]) => key !== 'serving_size')
//                         .map(([nutrient, value], index) => (
//                             <div className="nutrition-row" key={index}>
//                                 <span>{nutrient.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
//                                 <span>{typeof value === 'object' ? value.amount : value}</span>
//                                 <span>{typeof value === 'object' && value.daily_value ? value.daily_value + '%' : ''}</span>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         );
//     };

//     const getComponentTypeClass = (type) => {
//         switch(type?.toLowerCase()) {
//             case 'harmful':
//                 return 'component-harmful';
//             case 'healthy':
//                 return 'component-healthy';
//             default:
//                 return 'component-neutral';
//         }
//     };

//     const renderIngredients = () => {
//         if (!product || !product.ingredients || product.ingredients.length === 0) {
//             return <p className="no-data">No ingredient information available for this product.</p>;
//         }
        
//         return (
//             <div className="ingredients-container">
//                 <h3>Ingredients</h3>
//                 <div className="ingredients-list">
//                     {product.ingredients.map((ingredient, index) => (
//                         <div key={index} className="ingredient-item">
//                             <div className="ingredient-header">
//                                 <h4>{ingredient.name}</h4>
//                                 <div className={`ingredient-type ${getComponentTypeClass(ingredient.component_type)}`}>
//                                     {ingredient.component_type || 'Neutral'}
//                                 </div>
//                             </div>
                            
//                             <div className="ingredient-details">
//                                 {ingredient.amount && (
//                                     <p><strong>Amount:</strong> {ingredient.amount}</p>
//                                 )}
                                
//                                 {ingredient.component_type === 'Harmful' && ingredient.safe_limit && (
//                                     <p className="warning">
//                                         <strong>Safe Limit:</strong> {ingredient.safe_limit}
//                                         {ingredient.amount > ingredient.safe_limit && 
//                                             <span className="exceeds-limit"> (Exceeds safe limit!)</span>}
//                                     </p>
//                                 )}
                                
//                                 {ingredient.component_type === 'Healthy' && ingredient.beneficial_threshold && (
//                                     <p className="benefit">
//                                         <strong>Beneficial Threshold:</strong> {ingredient.beneficial_threshold}
//                                         {ingredient.amount >= ingredient.beneficial_threshold && 
//                                             <span className="meets-threshold"> (Meets beneficial threshold!)</span>}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="food-details-page">
//             <Navbar />
            
//             <div className="details-container">
//                 {loading ? (
//                     <div className="loading-spinner">Loading product details...</div>
//                 ) : error ? (
//                     <div className="error-message">{error}</div>
//                 ) : product ? (
//                     <>
//                         <div className="product-header">
//                             <div className="back-button">
//                                 <Link to="/product-list">← Back to Products</Link>
//                             </div>
//                             <h2>{product.name}</h2>
//                             <p className="product-category">{product.category}</p>
//                         </div>

//                         <div className="product-content">
//                             <div className="product-info">
//                                 {product.final_score && renderHealthScore(product.final_score)}
                                
//                                 <div className="tabs">
//                                     <button 
//                                         className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
//                                         onClick={() => setActiveTab('ingredients')}
//                                     >
//                                         Ingredients
//                                     </button>
//                                     <button 
//                                         className={`tab-button ${activeTab === 'nutrition' ? 'active' : ''}`}
//                                         onClick={() => setActiveTab('nutrition')}
//                                     >
//                                         Nutrition Facts
//                                     </button>
//                                 </div>

//                                 <div className="tab-content">
//                                     {activeTab === 'ingredients' ? renderIngredients() : renderNutritionFacts()}
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <div className="not-found">Product not found</div>
//                 )}
//             </div>
            
//             <Footer />
//         </div>
//     );
// };

// export default FoodDetailsPage;