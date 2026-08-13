import { create } from "zustand";

interface SliderState {
    index: number;
    setIndex: (newIndex: number) => void;
    nextSlide: (totalSlides: number) => void;
}

export const useSliderStore = create<SliderState>((set) => ({
    index: 0,
    setIndex: (newIndex) => set({ index: newIndex }),

    nextSlide: (totalSlides) =>
        set((state) => ({
            index: (state.index + 1) % totalSlides,
        })),
}));