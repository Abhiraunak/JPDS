"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ProjectCardProps {
    imageUrl: string;
}

export default function ProjectCard({ imageUrl }: ProjectCardProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isFullScreen]);

    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

    return (
        <div className="flex flex-col items-center mt-2 w-full px-4">
            {/* Standard Thumbnail View */}
            <div
                className="relative w-full max-w-4xl cursor-pointer transition-all duration-300 hover:brightness-90 active:scale-[0.98]"
                onClick={toggleFullScreen}
            >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-300 shadow-sm">
                    <Image
                        src={imageUrl}
                        alt="Project thumbnail"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Full-Screen Overlay */}
            {isFullScreen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-8 cursor-zoom-out"
                    onClick={toggleFullScreen}
                >
                    <button
                        className="absolute top-4 right-4 z-[110] text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:top-8 md:right-8"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFullScreen();
                        }}
                        aria-label="Close full screen view"
                    >
                        <X size={28} />
                    </button>

                    {/* High-Res Image Container */}
                    <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
                        <div className="relative w-full h-[70vh] sm:h-[85vh] rounded-md">
                            <Image
                                src={imageUrl}
                                alt="Project full screen"
                                fill
                                className="object-contain"
                                priority
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}