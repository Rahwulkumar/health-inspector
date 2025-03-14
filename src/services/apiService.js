import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000"; // FastAPI URL

export const getProductByBarcode = async (barcode) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/${barcode}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};
