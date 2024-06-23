import axios from 'axios';

export const API_CLIENT = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json', // Example header
    Authorization: 'Bearer YOUR_TOKEN_HERE', // Example authorization token
  },
});
