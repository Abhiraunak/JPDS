"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSliderStore } from "@/store/useSliderStore";
import HeroContent from "./HeroContent";

const images = [
    "/ecoresort/resort2.jpeg",
    "/statehouse/house3.jpg",
    "/vanki/munger1.jpg",
    "/statehouse/house4.jpg",
];

function BackgroundImages() {
    const index = useSliderStore((state) => state.index);
    const nextSlide = useSliderStore((state) => state.nextSlide);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide(images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [index, nextSlide]);

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
                style={{ willChange: "transform, opacity" }}
            >
                <Image
                    src={images[index]}
                    alt={`Project view ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    quality={85}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
            </motion.div>
        </AnimatePresence>
    );
}

// INDICATOR DOTS COMPONENT
function SliderIndicators() {
    const index = useSliderStore((state) => state.index);
    const setIndex = useSliderStore((state) => state.setIndex);

    return (
        <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {images.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group relative flex h-6 w-8 items-center justify-center"
                >
                    {index === i ? (
                        <div className="relative h-[2px] w-8 overflow-hidden rounded-md bg-white/30">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="absolute inset-y-0 left-0 bg-white"
                            />
                        </div>
                    ) : (
                        <div className="h-[2px] w-4 rounded-md bg-white/30 transition-all duration-500 group-hover:bg-white/60" />
                    )}
                </button>
            ))}
        </div>
    );
}


export default function Slider() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-neutral-950">
            <BackgroundImages />
            <HeroContent />
            <SliderIndicators />
        </div>
    );
}