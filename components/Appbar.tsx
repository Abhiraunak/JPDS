"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "./Container";
import { useAppbarStore } from "@/store/useAppbarStore";


const navItems = [
    { title: 'Projects', href: "/projects" },
    { title: 'About Us', href: "/aboutus" },
    { title: 'Contact', href: "/contactus" }
];

// --- DESKTOP NAVIGATION ---
const DesktopNav = () => {
    const isScrolled = useAppbarStore((state) => state.isScrolled);
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <Container className="hidden relative md:block">
            <motion.nav
                animate={isScrolled ? {
                    boxShadow: "var(--shadow-input)",
                    width: "80%",
                    y: 10
                } : {
                    boxShadow: "none",
                    width: "100%",
                    y: 0
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl 2xl:max-w-7xl items-center justify-between rounded-4xl bg-white/95 px-4 py-2 mt-2"
            >
                <div className="flex flex-col full">
                    <Link href="/" className="block">
                        <Image
                            src="/JPDS.png"
                            height={100}
                            width={100}
                            alt="logo"
                            className="w-full h-auto"
                        />
                    </Link>

                    <div className="flex w-[85%] mx-auto justify-between items-center mt-1 font-normal uppercase text-black">
                        <span className="text-[10px] leading-none tracking-tighter whitespace-nowrap">Landscape Architecture</span>
                        <span className="text-[10px] leading-none px-1">|</span>
                        <span className="text-[10px] leading-none tracking-tighter whitespace-nowrap">Planning</span>
                    </div>
                </div>

                <div className="flex items-center">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative px-2 py-1 gap-2 text-neutral-800 text-md"
                        >
                            {hovered === idx && (
                                <motion.span
                                    layoutId="hoverBackground"
                                    initial={false}
                                    className="h-full w-full absolute inset-0 rounded-md bg-neutral-300"
                                />
                            )}
                            <span className="relative z-10 text-lg font-semibold tracking-wide leading-0.5">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </Container>
    );
};

// --- MOBILE NAVIGATION ---
const MobileNav = () => {
    const isOpen = useAppbarStore((state) => state.isOpen);
    const setIsOpen = useAppbarStore((state) => state.setIsOpen);
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    return (
        <>
            {/* Reduced padding (py-2) and logo size to make the header height smaller */}
            <div className="md:hidden fixed inset-x-2 top-2 z-50 flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md px-4 py-2 shadow-sm">
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                        src="/JPDS.png"
                        height={40}
                        width={40}
                        alt="logo"
                        priority
                        className="h-8 w-auto"
                    />
                </Link>
                <motion.button
                    whileTap={{ scale: 0.85 }} // Touch feedback for mobile
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black p-1"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Semi-transparent backdrop to close menu when clicking outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="md:hidden fixed inset-0 bg-black/10 z-[48] backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="md:hidden fixed top-16 left-2 right-2 bg-white z-[49] rounded-xl shadow-lg p-4 overflow-hidden"
                        >
                            <ul className="flex flex-col space-y-1 text-black font-semibold text-xl tracking-wide">
                                {navItems.map((item) => (
                                    <li key={item.title}>
                                        <motion.button
                                            whileTap={{ scale: 0.98, backgroundColor: "#f5f5f5" }}
                                            onClick={() => handleNavigation(item.href)}
                                            className="w-full text-left px-4 py-3 rounded-lg transition-colors"
                                        >
                                            {item.title}
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
// --- MAIN WRAPPER ---
export function Appbar() {
    const setIsScrolled = useAppbarStore((state) => state.setIsScrolled);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const shouldBeScrolled = latest > 20;
        if (shouldBeScrolled !== useAppbarStore.getState().isScrolled) {
            setIsScrolled(shouldBeScrolled);
        }
    });

    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}