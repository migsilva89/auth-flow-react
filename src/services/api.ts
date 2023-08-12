import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'auth-flow-token': token } = parseCookies();

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
