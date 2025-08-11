import { create } from 'zustand';

// accessToken을 메모리에서만 관리하는 store
type AccessTokenState = {
  accessToken: string | null;
};

type AccessTokenActions = {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AccessTokenState & AccessTokenActions>(
  (set) => ({
    accessToken: null,

    setAccessToken: (accessToken) => set({ accessToken }),
    clearAccessToken: () => set({ accessToken: null }),
  }),
);
