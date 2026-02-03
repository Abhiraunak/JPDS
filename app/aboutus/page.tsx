"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      {/* Hero Section - Refined */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-0 w-48 h-48 rounded-full bg-[#E9E5D6] mix-blend-multiply blur-2xl opacity-40"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-[#D4C9B8] mix-blend-multiply blur-xl opacity-30"></div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
            <div className="text-black flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-sans font-bold text-5xl md:text-6xl tracking-widest leading-tight mb-8">
                  <span className="block text-amber-800">ABOUT US</span>
                  <span className="block mt-2 text-gray-800 text-4xl">Crafting Timeless Spaces</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="h-0.5 bg-amber-800 mb-8"
                ></motion.div>
                
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700">
                  JPDS is a architecture design studio specializing in high-end residences, 
                  landscape architecture, urban design, public art, and environmental 
                  planning across India.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-3">
                  {["Faridabad HQ", "Pan-India Projects", "Est. 2010", "Architecture Studio"].map((tag, i) => (
                    <motion.div
                      key={i}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative h-[50vh] lg:h-[70vh]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/nagpur/house2.jpg"
                  alt="JPDS design project"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-4 left-8 bg-white px-6 py-3 rounded-full shadow-lg z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="font-serif text-amber-800">Award Winning Project</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Content */}
            <div className="w-full lg:w-1/2 text-black">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-16"
              >
                <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-widest text-right select-none text-gray-100">
                  OUR PHILOSOPHY
                </h2>
                <h3 className="font-sans font-bold text-3xl md:text-4xl tracking-wide absolute top-2 right-0">
                  Design Philosophy
                </h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-700">
                  We believe nature is intrinsically woven into our lives, offering multidimensional interpretations that inspire authentic design expressions previously unseen.
                </p>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-700">
                  While we draw inspiration from nature&apos;s abstract beauty, we reject the notion of designing &quot;low-maintenance&quot; nature. Such approaches yield uninspired green spaces devoid of intelligence and vitality.
                </p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Biophilic Integration",
                    "Contextual Sensitivity",
                    "Sustainable Innovation",
                    "Cultural Resonance",
                    "Material Honesty",
                    "Timeless Craftsmanship"
                  ].map((principle, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-800 flex-shrink-0 mr-3"></div>
                      <span className="font-serif text-gray-800">{principle}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Image with unique framing */}
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/nagpur/house3.jpg"
                    alt="Design philosophy"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Decorative cutout */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#F7F4ED] rounded-full z-10 mix-blend-multiply opacity-90"></div>
                
                {/* Signature element */}
                <div className="absolute -bottom-4 right-8 rotate-12">
                  <div className="font-serif italic text-amber-800 bg-white px-4 py-2 rounded-lg shadow-md">
                    &quot;Nature as co-designer&quot;
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive */}
      <section className="py-24 px-4 md:px-8 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-black">Core Values</h2>
            <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                description: "We push boundaries to create unique design solutions that stand the test of time.",
                icon: "💡"
              },
              {
                title: "Sustainability",
                description: "Our designs respect and enhance the natural environment through regenerative practices.",
                icon: "🌿"
              },
              {
                title: "Craftsmanship",
                description: "Attention to detail and commitment to excellence defines every project we undertake.",
                icon: "👩🏻‍🔧"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-gray-800">{value.title}</h3>
                </div>
                <p className="font-serif text-gray-600">{value.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-amber-800 transition-colors"
                      ></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-slate-500 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-sans font-bold text-4xl md:text-5xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Begin Your Design Journey
          </motion.h2>
          
          <motion.p 
            className="font-serif text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s collaborate to transform your vision into an extraordinary space that resonates with purpose and beauty.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={"/contactus"}>
            <button className="bg-white text-amber-800 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gray-100 hover:font-bold transition-colors shadow-lg">
              Schedule a Consultation
            </button>
            </Link>
            
            <p className="mt-6 font-serif italic">
              Faridabad HQ • Serving Nationwide
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}