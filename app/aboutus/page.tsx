"use client";
import ArchitectCard from "@/components/ArchitectCard";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function AboutUsPage() {
  return (
    <div className={`min-h-screen bg-white ${montserrat.className} overflow-x-hidden`}>
      {/* ABOUT SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] md:tracking-[0.25em] text-slate-700 uppercase mb-10 md:mb-14"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6 md:space-y-8 flex flex-col items-center"
        >
          <p className="text-base md:text-xl text-neutral-600 font-light leading-relaxed md:leading-loose tracking-wide text-left md:text-center">
            <span className="font-medium text-neutral-900 tracking-normal">JPDS</span> is a landscape architecture practice based in Faridabad, led by landscape architect <span className="font-medium text-neutral-900 tracking-normal">Jay Prakash</span>.
            The studio works across a diverse range of projects including residential developments, hospitality destinations,
            and institutional campuses. With a design approach that responds to site context, climate,
            and user experience, the practice focuses on creating thoughtful outdoor environments that are
            both functional and aesthetically refined.
          </p>
          <p className="text-base md:text-xl text-neutral-600 font-light leading-relaxed md:leading-loose tracking-wide text-left md:text-center">
            From luxury resorts and hotels to residential communities and public landscapes,
            JPDS integrates natural elements, spatial planning, and sustainable design principles to shape memorable
            outdoor spaces. Each project is approached with attention to detail, balancing architecture,
            landscape, and ecology to deliver environments that enhance both the built form and the people
            who experience them.
          </p>

          <div className="w-16 md:w-24 h-[1px] bg-neutral-400 mt-8 md:mt-16"></div>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-0">
          
          {/* Principal - Left */}
          <div className="flex justify-center md:justify-start w-full">
            <ArchitectCard
              imageSrc="/Person1.jpeg"
              name="Jay Prakash"
              roles={["Principal Architect", "Founder", "JPDS"]}
              link="/Jayprakash"
              company={""}
            />
          </div>

          {/* Environmental Planner - Right */}
          <div className="flex justify-center md:justify-end w-full md:-mt-32 lg:-mt-40">
            <ArchitectCard
              imageSrc="/employee/bijayprakash.png"
              name="Bijay Prakash"
              roles={["Environmental Planner", "Site Planning Strategies"]}
              link="/bijay"
              company={""}
            />
          </div>

          {/* Architect - Left */}
          <div className="flex justify-center md:justify-start w-full md:-mt-16 lg:-mt-20">
            <ArchitectCard
              imageSrc="/employee/harshit.png"
              name="Harshit"
              roles={["Architect", "Design Team"]}
              link="/harshit"
              company={""}
            />
          </div>

          {/* Project Architect - Right */}
          <div className="flex justify-center md:justify-end w-full md:-mt-32 lg:-mt-40">
            <ArchitectCard
              imageSrc="/employee/prit.png"
              name="Prit Pranay"
              roles={["Project Architect"]}
              link="/prit"
              company={""}
            />
          </div>

          {/* Operations - Left */}
          <div className="flex justify-center md:justify-start w-full md:-mt-16 lg:-mt-20">
            <ArchitectCard
              imageSrc="/employee/beauty.png"
              name="Beauty Kumari"
              roles={["Systems & Operations Manager"]}
              link="/beauty"
              company={""}
            />
          </div>

          {/* Developer - Right */}
          <div className="flex justify-center md:justify-end w-full md:-mt-32 lg:-mt-40">
            <ArchitectCard
              imageSrc="/employee/abhishek.png"
              name="Abhishek Kumar"
              roles={["Full-stack Developer", "Digital Tools & Systems"]}
              link="/abhishek"
              company={""}
            />
          </div>

        </div>
      </section>
    </div>
  );
}