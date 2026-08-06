import { create } from "zustand";

interface ProjectState {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
    selectedCategory: "All",
    setSelectedCategory: (category) => set({ selectedCategory: category }),
}));