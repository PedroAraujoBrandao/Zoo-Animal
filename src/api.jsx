import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zoo-animal-api.herokuapp.com',
});

export default api;