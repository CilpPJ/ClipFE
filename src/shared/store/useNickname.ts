import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '../types';

// User type에서 nickname만 가져와서 사용
type NicknameState = Partial<Pick<User, 'nickname'>>;

type NicknameActions = {
  setNickname: (nickname: string) => void;
  clearNickname: () => void;
};

// nickname을 localStorage에 저장하는 store
export const useNicknameStore = create(
  persist<NicknameState & NicknameActions>(
    (set) => ({
      nickname: undefined,

      setNickname: (nickname) => set({ nickname }),
      clearNickname: () => set({ nickname: undefined }),
    }),
    {
      name: 'nickname',
    },
  ),
);
