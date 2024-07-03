import axios from 'axios';

// Set the base URL for your Flask backend
const BASE_URL = 'http://127.0.0.1:5000/api/v1';

// Function to get JWT token from localStorage (or any other method you use)
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Set up a default axios instance with common configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in requests
axiosInstance.interceptors.request.use(
  config => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Auth API
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Categories API
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Customers API
export const fetchCustomers = async () => {
  try {
    const response = await axiosInstance.get('/customers');
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// Inventory API
export const fetchInventory = async () => {
  try {
    const response = await axiosInstance.get('/inventory');
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory:', error);
    throw error;
  }
};

// Orders API
export const fetchOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Products API
export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add other API functions as needed, e.g., for creating, updating, and deleting resources

export default {
  login,
  fetchCategories,
  fetchCustomers,
  fetchInventory,
  fetchOrders,
  fetchProducts,
};
