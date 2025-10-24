import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001/api', // Cambiar según tu backend
  headers: { 'Content-Type': 'application/json' }
});

export default api;
