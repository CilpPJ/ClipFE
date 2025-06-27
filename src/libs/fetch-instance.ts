import { initInstance } from './axios-instance';

export const BASE_URL = 'http://localhost:8080';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
