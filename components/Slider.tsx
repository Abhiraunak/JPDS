"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
    "/ecoresort/resort2.jpeg",
    "/statehouse/house3.jpg",
    "/vanki/munger1.jpg",
    "/statehouse/house4.jpg",
];

export default function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-neutral-950">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`Project view ${index + 1}`}
                        fill
                        priority
                        className="object-cover brightness-[0.7]" 
                    />
                    {/* Elegant Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Hero Content Layer */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-medium">
                            Architectural Excellence
                        </span>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white italic">
                            Defining <span className="font-semibold not-italic">Spaces</span>
                        </h1>
                    </div>

                    <div className="pt-4">
                        <Link href="/projects">
                            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-12 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
                                <span className="relative z-10">Explore our portfolio</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Modern Pill Indicators */}
            <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className="group relative h-6 w-6 rounded-md flex items-center justify-center"
                    >
                        <div
                            className={`h-[2px]  transition-all duration-500 ease-out ${index === i
                                    ? "w-8 rounded-md bg-white"
                                    : "w-4 bg-white/30 group-hover:bg-white/60"
                                }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}