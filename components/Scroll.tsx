"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface GallerySlide {
  src: string;
  caption: string;
  href: string;
}

interface HorizontalGalleryProps {
  slides: GallerySlide[];
}

export default function HorizontalGallery({ slides }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full min-h-screen py-2">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex items-center pr-[10vw]"
        style={{ scrollbarWidth: 'none' }} // Hide scrollbar for cleaner look
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[80vw] h-[80vh] mx-[10vw] relative"
          >
            <div className="w-full h-full relative flex flex-col items-center">
              {/* Image container */}
              <div className="relative w-full overflow-hidden flex flex-col items-center">
                <Link href={slide.href} >
                  <Image
                    src={slide.src}
                    alt={slide.caption}
                    width={800}
                    height={500}
                    className="rounded-sm object-cover"
                    priority={i === 0}
                  />
                </Link>
              </div>
              <div>
                <h2 className="mt-2 text-xl md:text-2xl font-sans font-semibold tracking-widest text-black uppercase">
                  {slide.caption}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}