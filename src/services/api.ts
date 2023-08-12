import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'auth-flow-token': token } = parseCookies();

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
