"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
    imageUrl: string;
    altText?: string; 
}

export default function ProjectCard({ imageUrl, altText = "Project image" }: ProjectCardProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const closeFullScreen = useCallback(() => setIsFullScreen(false), []);
    const openFullScreen = () => setIsFullScreen(true);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeFullScreen();
        };

        if (isFullScreen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isFullScreen, closeFullScreen]);

    return (
        <div className="flex flex-col items-center mt-2 w-full px-4">
            
            {/* Standard Thumbnail View */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full max-w-4xl cursor-zoom-in transition-all duration-300 hover:brightness-95"
                onClick={openFullScreen}
            >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
                    <Image
                        src={imageUrl}
                        alt={altText}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* Full-Screen Overlay with Smooth Animations */}
            <AnimatePresence>
                {isFullScreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-8 cursor-zoom-out"
                        onClick={closeFullScreen}
                    >
                        <button
                            className="absolute top-4 right-4 z-[110] text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:top-8 md:right-8"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeFullScreen();
                            }}
                            aria-label="Close full screen view"
                        >
                            <X size={28} />
                        </button>

                        {/* High-Res Image Container */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            className="relative w-full h-full max-w-7xl flex items-center justify-center"
                        >
                            <div className="relative w-full h-[70vh] sm:h-[85vh] rounded-md">
                                <Image
                                    src={imageUrl}
                                    alt={`Full screen ${altText}`}
                                    fill
                                    className="object-contain"
                                    priority // Ensures the large image loads instantly when clicked
                                    sizes="100vw"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}