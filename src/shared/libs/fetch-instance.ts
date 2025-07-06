import { initInstance } from './axios-instance';

export const BASE_URL = 'http://15.165.23.67';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',

    withCredentials: true,
  },
});
