import { create } from 'zustand';

interface CounterState {
  globalCount: number;
  incrementGlobal: () => void;
  decrementGlobal: () => void;
  resetGlobal: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  globalCount: 0,
  incrementGlobal: () => set((state) => ({ globalCount: state.globalCount + 1 })),
  decrementGlobal: () => set((state) => ({ globalCount: state.globalCount - 1 })),
  resetGlobal: () => set({ globalCount: 0 }),
})); 