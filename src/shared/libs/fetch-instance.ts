import { processHttpError } from '../config';

import { initInstance } from './axios-instance';

export const BASE_URL = 'http://localhost:8080';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response?.status !== 500) {
      return Promise.reject(error);
    }

    processHttpError(error);
    return Promise.reject(error);
  },
);

fetchInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    processHttpError(error);

    return Promise.reject(error);
  },
);
