"use client"
import Container from "./Container";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { project } from "./data/Projects";

export default function ProjectLayout() {
    
    return (
        <>
            <Container className="max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 p-5 md:mt-20">
                    {project.map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.1,
                                ease: "easeOut"
                            }}
                            className="group"
                            key={project.caption}
                        >
                            <Link href={project.href}>
                                <Image
                                    src={project.src}
                                    alt={project.caption}
                                    height={300}
                                    width={300}
                                    className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
                                />
                            </Link>
                            <h2 className="z-20 font-bold tracking-tight text-neutral-800 select-none mt-5">{project.caption}</h2>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </>
    )
}