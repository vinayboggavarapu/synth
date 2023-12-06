import { create } from "zustand";

interface StampLoaderInterface {
  isLoading: boolean;
  setIsLoading: () => void;
  setStopLoading: () => void;
}
export const useStampLoader = create<StampLoaderInterface>((set) => ({
  isLoading: false,
  setIsLoading: () => {
    set({ isLoading: true });
  },
  setStopLoading: () => {
    set({ isLoading: false });
  },
}));
