import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

interface User {
  [key: string]: unknown; // Allow any properties with type `unknown`
}

type UserAuthStore = {
  user: {};
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useCounterStore = create<CounterStore>(
  (set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      set((state) => ({ count: state.count - 1 }));
    },
  }),
);

export const useUserAuthStore = create<UserAuthStore>()(
  persist(
    (set) => ({
      user: {},
      setUser: (user: User) => {
        set(() => ({ user: user })); // or set({ user })
      },
      removeUser: () => {
        set(() => ({ user: {} })); // or set({ user: {} })
      },
    }),
    { name: 'user_store' },
  ),
);
