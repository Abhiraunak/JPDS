"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
    imageUrl: string;
    altText?: string;
    allImages?: string[]; // Array of all images in the gallery
    index?: number;       // The index of this specific card
}

export default function ProjectCard({
    imageUrl,
    altText = "Project image",
    allImages,
    index = 0
}: ProjectCardProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(index);

    const closeFullScreen = useCallback(() => setIsFullScreen(false), []);

    const openFullScreen = () => {
        setActiveIndex(index); // Ensure it opens on the clicked image
        setIsFullScreen(true);
    };

    // Navigate to previous image
    const handlePrev = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (allImages && allImages.length > 1) {
            setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
        }
    }, [allImages]);

    // Navigate to next image
    const handleNext = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (allImages && allImages.length > 1) {
            setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
        }
    }, [allImages]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeFullScreen();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
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
    }, [isFullScreen, closeFullScreen, handlePrev, handleNext]);

    // Determine which image to show in the modal
    const currentModalImage = allImages ? allImages[activeIndex] : imageUrl;
    const hasMultipleImages = allImages && allImages.length > 1;

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
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
                        onClick={closeFullScreen}
                    >
                        {/* Close Button */}
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

                        {/* Navigation Buttons (Only visible if multiple images exist) */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    className="absolute left-4 z-[110] text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:left-8"
                                    onClick={handlePrev}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    className="absolute right-4 z-[110] text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:right-8 top-1/2 -translate-y-1/2"
                                    style={{ top: "50%", transform: "translateY(-50%)" }} // Override close button positioning
                                    onClick={handleNext}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}

                        {/* JPDS Logo Watermark at Bottom Right */}
                        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-[110] pointer-events-none select-none bg-white rounded-md">
                            <Image
                                src="/JPDS.png" 
                                alt="JPDS Logo"
                                width={80}
                                height={80}
                                className="w-12 md:w-16 h-auto opacity-70 drop-shadow-md"
                            />
                        </div>

                        {/* High-Res Image Container with Slide/Fade Transition */}
                        <div className="relative w-full h-full max-w-7xl flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex} // Changing the key triggers the animation when index changes
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative w-full h-[70vh] sm:h-[85vh] rounded-md"
                                >
                                    <Image
                                        src={currentModalImage}
                                        alt={`Full screen ${altText} - Image ${activeIndex + 1}`}
                                        fill
                                        className="object-contain select-none"
                                        priority
                                        sizes="100vw"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}