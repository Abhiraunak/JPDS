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
          className="space-y-8 text-slate-600 font-light text-lg leading-loose text-justify md:text-center"
        >
          <p>
            JPDS Architects, based in Faridabad and serving clients nationwide, is a
            consultancy firm providing comprehensive design services in architecture,
            landscape planning, and high-end interior design. Established in 2010,
            we view every project as a unique opportunity to craft timeless spaces that
            resonate with their inhabitants.
          </p>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex justify-center">
            <ArchitectCard
              imageSrc="/person1.jpeg"
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