import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 2000,
    ...config,
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      withCredentials: true,
      ...config.headers,
    },
  });

  return instance;
};
