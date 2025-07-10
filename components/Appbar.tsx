"use client"
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function Appbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    
    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);  // Close mobile menu after navigation
    };

    return (
        <div className='max-w-screen-xl mx-auto  z-1000 py-4 px-6 flex items-center justify-between border-b border-zinc-500 bg-[#F7F4EDff] opacity-80 rounded-3xl'>
            {/* Logo */}
            <div className="cursor-pointer" onClick={() => handleNavigation("/")}>
                <Image
                    src="/JPDS.png"
                    alt="JPDS Logo"
                    width={100}
                    height={50}
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-6 text-black font-sans font-semibold tracking-wider">
                    <li>
                        <button 
                            onClick={() => handleNavigation("/projects")}
                            className="hover:border-b cursor-pointer hover:border-zinc-500"
                        >
                            projects
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation("/")}
                            className="hover:border-b cursor-pointer hover:border-zinc-500"
                        >
                            about
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation("/")}
                            className="hover:border-b cursor-pointer hover:border-zinc-500"
                        >
                            contact
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation("/")}
                            className="hover:border-b cursor-pointer hover:border-zinc-500"
                        >
                            socials
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-black">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white z-50 py-4 border-b border-zinc-500">
                    <ul className="flex flex-col space-y-4 text-black font-semibold tracking-wider px-6">
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
                                onClick={() => handleNavigation("/")}
                                className="w-full text-left cursor-pointer hover:border-b hover:border-zinc-500 py-2"
                            >
                                about
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation("/")}
                                className="w-full text-left cursor-pointer  hover:border-b hover:border-zinc-500 py-2"
                            >
                                contact
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation("/")}
                                className="w-full text-left cursor-pointer hover:border-b hover:border-zinc-500 py-2"
                            >
                                socials
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}