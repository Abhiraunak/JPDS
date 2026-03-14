"use client";
import ArchitectCard from "@/components/ArchitectCard";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

// Initialize the font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function AboutUsPage() {
  return (
    <div className={`min-h-screen bg-[#F7F4ED] ${montserrat.className}`}>
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">

        {/* The 'COMPANY' Header */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-light tracking-[0.25em] text-slate-700 uppercase mb-14"
        >
          About Us
        </motion.h1>

        {/* The Text Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-8 text-neutral-800 font-light text-lg leading-loose text-justify md:text-center"
        >
          <p>
            JPDS is a landscape architecture practice based in Faridabad, led by landscape architect Jay Prakash. 
            The studio works across a diverse range of projects including residential developments, hospitality destinations, 
            and institutional campuses. With a design approach that responds to site context, climate, 
            and user experience, the practice focuses on creating thoughtful outdoor environments that are 
            both functional and aesthetically refined.
          </p>
          <p>
            From luxury resorts and hotels to residential communities and public landscapes, 
            JPDS integrates natural elements, spatial planning, and sustainable design principles to shape memorable 
            outdoor spaces. Each project is approached with attention to detail, balancing architecture, 
            landscape, and ecology to deliver environments that enhance both the built form and the people 
            who experience them.
          </p>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[#F7F4ED]">
        <div className="max-w-4xl mx-auto px-4 p-5">
          <div className="relative flex justify-center">
            <ArchitectCard
              imageSrc="/Person1.jpeg"
              name="Jay Prakash"
              roles={["Principal Architect", "Founder"]}
              company="JPDS"
              link="/contactus"
            />
          </div>
        </div>
      </section>
    </div>
  );
}