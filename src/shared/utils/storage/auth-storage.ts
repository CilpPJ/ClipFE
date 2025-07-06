/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cookies } from 'react-cookie';

type StorageKey = {
  access?: string;
  refresh?: string;
};

const cookies = new Cookies();

const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, option);
};

const getCookie = (name: string) => {
  return cookies.get(name);
};

const removeCookie = (name: string) => {
  return cookies.remove(name);
};

const initCookieStorage = <T extends keyof StorageKey>(key: T) => {
  const storageKey = `${key}`;

  const get = (): StorageKey[T] => {
    const value = getCookie(storageKey);
    return value as StorageKey[T];
  };

  const set = (value: StorageKey[T]) => {
    if (value === undefined || value === null) {
      return removeCookie(storageKey);
    }
    setCookie(storageKey, String(value));
  };

  return { get, set };
};

export const authStorage = {
  accessToken: initCookieStorage('access'),
  refreshToken: initCookieStorage('refresh'),
};
