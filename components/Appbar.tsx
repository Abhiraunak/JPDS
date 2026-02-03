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
            title: 'projects',
            href: "/projects"
        },
        {
            title: 'about',
            href: "aboutus"
        },
        {
            title: 'contact',
            href: "contactus"
        }
    ]

    const [hovered, setHovered] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scroll, setScrolled] = useState<boolean>(false);

    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);  // Close mobile menu after navigation
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
                    className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white px-4 py-2 p-2 mt-2"
                >

                    <Link href={"/"}>
                        <Image src={"/JPDS.png"} height={100} width={100} alt="logo" />
                    </Link>

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
                                <span className="relative z-10"> {item.title}</span>
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            </Container>

            {/* Mobile Logo */}
            <div className="md:hidden fixed inset-x-0 top-0 z-50 mx-auto flex max-w-xl items-center justify-between rounded-xl bg-neutral-200 px-4 py-2 p-2 mt-2 ml-1 mr-1">
                <div>
                    <Link href="/">
                        <Image src="/JPDS.png" height={60} width={60} alt="logo" />
                    </Link>
                </div>
                <div className="text-black">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full min-h-screen font-sans bg-neutral-100 z-50 py-4 border-b border-zinc-500">
                    <ul className="flex flex-col space-y-4 text-black font-semibold text-3xl tracking-wider px-6">
                        <li>
                            <button
                                onClick={() => handleNavigation("/projects")}
                                className="w-full text-left cursor-pointer hover:border-b hover:border-zinc-500 py-2"
                            >
                                projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("/aboutus")}
                                className="w-full text-left cursor-pointer hover:border-b hover:border-zinc-500 py-2"
                            >
                                about
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("/contactus")}
                                className="w-full text-left cursor-pointer  hover:border-b hover:border-zinc-500 py-2"
                            >
                                contact
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("/contactus")}
                                className="w-full text-left cursor-pointer hover:border-b hover:border-zinc-500 py-2"
                            >
                                socials
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}