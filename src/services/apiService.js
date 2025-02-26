import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Update with your backend URL

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};