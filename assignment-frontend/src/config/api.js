// src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    SIGNUP: `${API_BASE_URL}/auth/signup`,
  },
  USER: {
    CREATE: `${API_BASE_URL}/users/create`,
    ADD_CREDITS: `${API_BASE_URL}/users/credits`,
    CHANGE_PASSWORD: `${API_BASE_URL}/users/password`,
    PROFILE: `${API_BASE_URL}/users/profile`,
  },
};

export const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('userToken')}`,
});