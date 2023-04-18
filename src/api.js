import axios from 'axios';
import keycloak from './keycloak';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use(config => {
  if (keycloak.authenticated) {
    config.headers.Authorization = `Bearer ${keycloak.token}`;
  }
  return config;
});

export default api;
