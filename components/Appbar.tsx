"use client"
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Appbar() {

    const navItems = [
        {
            title: 'Projects',
            href: "/projects"
        },
        {
            title: 'About Us',
            href: "aboutus"
        },
        {
            title: 'Contact',
            href: "contactus"
        }
    ]

    const [hovered, setHovered] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scroll, setScrolled] = useState<boolean>(false);

    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);  
    };

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <>
            <Container className="hidden relative  md:block">
                <motion.nav
                    animate={scroll ? {
                        boxShadow: "var(--shadow-input)",
                        width: "80%",
                        y: 10
                    } : {
                        boxShadow: "none",
                        width: "100%",
                        y: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear"
                    }}
                    className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/95 px-4 py-2 p-2 mt-2"
                >

                    <div style={{ height: 'auto', padding: '1rem 0' }}>
                        <Link href={"/"}>
                            <Image
                                src="/JPDS.png"
                                height={150} 
                                width={150}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                className="relative px-2 py-1 gap-2 text-neutral-800 text-md">

                                {hovered === idx && (
                                    <motion.span
                                        layoutId="hoverBackground"
                                        initial={false}
                                        className="h-full w-full absolute inset-0 rounded-md bg-neutral-300" />
                                )}
                                <span className="relative z-10 text-lg font-semibold tracking-wide leading-0.5"> {item.title}</span>
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            </Container>

            {/* Mobile Logo */}
            {/* Mobile Logo / Header */}
            <div className="md:hidden fixed inset-x-0 top-0 z-50 mx-auto flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md px-4 py-3 mt-2 ml-2 mr-2 shadow-sm">
                <Link href="/">
                    <Image src="/JPDS.png" height={50} width={50} alt="logo" className="h-10 w-auto" />
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 w-full h-screen bg-white z-[49] pt-24 px-6">
                    <ul className="flex flex-col space-y-6 text-black font-semibold text-3xl tracking-wider">
                        {navItems.map((item) => (
                            <li key={item.title}>
                                <button
                                    onClick={() => handleNavigation(item.href)}
                                    className="w-full text-left py-2 border-b border-neutral-100"
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}