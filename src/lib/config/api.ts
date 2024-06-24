import axios from 'axios';

const { VITE_REACT_SERVER_URL, VITE_PORT, VITE_NODE_ENV } =
  import.meta.env;

export const API_PUBLIC = axios.create({
  baseURL: import.meta.env.BASE_URL.VITE_REACT_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API_CLIENT = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json', // Example header
    Authorization: 'Bearer YOUR_TOKEN_HERE', // Example authorization token
  },
});
