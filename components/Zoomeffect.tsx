"use client"
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

interface imageZoomEffectProp {
    src: string;
    alt: string;
    className: string;
    containerClass: string;
}

const ImageZoomEffect = ({ src, alt, className = '', containerClass = '' }: imageZoomEffectProp) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.05, // Lower threshold for earlier trigger
                rootMargin: '0px 0px -50px 0px' // Trigger 50px before viewport
            }
        );

        const currentRef = containerRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${containerClass}`}
        >
            <Image
                src={src}
                alt={alt}
                className={`
                             w-full h-auto
                             transition-all duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]
                             transform-gpu will-change-transform
                             ${isVisible
                                ? 'scale-100 opacity-100 blur-0'
                                : 'scale-[1.4] opacity-80 blur-[2px]'
                               }
                              ${className}
                        `}
              />
        </div>
    );
};

export default ImageZoomEffect;