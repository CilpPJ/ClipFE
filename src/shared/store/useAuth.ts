import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// accessToken을 메모리에서만 관리하는 store
type AccessTokenState = {
  accessToken: string | null;
};

type AccessTokenActions = {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AccessTokenState & AccessTokenActions>()(
  devtools(
    (set) => ({
      accessToken: null,

      setAccessToken: (accessToken) =>
        set({ accessToken }, false, 'setAccessToken'),
      clearAccessToken: () =>
        set({ accessToken: null }, false, 'clearAccessToken'),
    }),
    {
      name: 'auth-store', // Redux DevTools에서 표시될 스토어 이름
    },
  ),
);
