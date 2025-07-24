import { initInstance } from './axios-instance';

export const BASE_URL = 'https://www.clipin.store';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,

  withCredentials: true,

  headers: {
    'Content-Type': 'application/json',
  },
});
