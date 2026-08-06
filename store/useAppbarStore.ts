import { create } from "zustand";

interface AppbarState {
    isOpen: boolean;
    isScrolled: boolean;
    setIsOpen: (val: boolean) => void;
    setIsScrolled: (val: boolean) => void;
}

export const useAppbarStore = create<AppbarState>((set) => ({
    isOpen: false,
    isScrolled: false,
    setIsOpen: (isOpen) => set({ isOpen }),
    setIsScrolled: (isScrolled) => set({ isScrolled }),
}));