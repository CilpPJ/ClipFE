import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// accessToken을 localStorage에서 관리하는 store
type AccessTokenState = {
  accessToken: string | null;
};

type AccessTokenActions = {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AccessTokenState & AccessTokenActions>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,

        setAccessToken: (accessToken) =>
          set({ accessToken }, false, 'setAccessToken'),
        clearAccessToken: () =>
          set({ accessToken: null }, false, 'clearAccessToken'),
      }),
      {
        name: 'accessToken', // localStorage에 저장될 키 이름
      },
    ),
    {
      name: 'auth-store', // Redux DevTools에서 표시될 스토어 이름
    },
  ),
);
