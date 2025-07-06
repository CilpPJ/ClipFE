import { Cookies } from 'react-cookie';

type StorageKey = {
  access?: string;
  refresh?: string;
};

const cookies = new Cookies();

const setCookie = (
  name: string,
  value: string,
  option?: {
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean | 'lax' | 'strict' | 'none';
  },
) => {
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
    setCookie(storageKey, String(value), { path: '/' });
  };

  return { get, set };
};

export const authStorage = {
  access: initCookieStorage('access'),
  refresh: initCookieStorage('refresh'),
};
