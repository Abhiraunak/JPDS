"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e: WheelEvent | KeyboardEvent) => {
      if (!container) return;

      // Handle wheel events (touchpad/mouse wheel)
      if (e instanceof WheelEvent) {
        // Only intercept vertical scrolls
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
        return;
      }

      // Handle keyboard navigation
      if (e instanceof KeyboardEvent) {
        const scrollAmount = container.clientWidth;
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            break;
          case "ArrowRight":
            e.preventDefault();
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            break;
          case "ArrowUp":
            e.preventDefault();
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            break;
          case "ArrowLeft":
            e.preventDefault();
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            break;
          default:
            break;
        }
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleScroll);
    };
  }, []);

  return (
    <div className="w-full py-2">
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
                <Link href={slide.href}>
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
    </div>
  );
}