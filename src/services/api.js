import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.148.216:3333',
});

export default api;
