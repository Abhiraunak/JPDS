"use client";
import { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { project } from "./data/Projects";

export default function ProjectLayout() {
  // Define the categories for the filter
  const categories = ["All", "Architecture", "Interior", "Landscape"];

  // State to keep track of the selected category, "All" is the default
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? project
      : project.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Container className="max-w-6xl mt-10 overflow-hidden">
        {/* Filter Radio Buttons Section */}
        <div
          role="radiogroup"
          aria-label="Project Category Filter"
          className="flex justify-center items-center space-x-2 md:space-x-4 mb-8 md:mb-5 md:mt-20 mt-10"
        >
          {categories.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={`filter-${category}`}
                name="project-filter"
                value={category}
                className="sr-only" // Hides the default radio button
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label
                htmlFor={`filter-${category}`}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-colors duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-neutral-800 text-white shadow-md" // Style for selected
                    : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300" // Style for not selected
                }`}
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 p-5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              // By setting a new key, we tell React to re-mount the component when the filter changes,
              // which re-triggers the animation.
              key={`${selectedCategory}-${project.caption}`}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="group"
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
              <h2 className="z-20 font-bold tracking-tight text-neutral-800 select-none mt-5">
                {project.caption}
              </h2>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
}