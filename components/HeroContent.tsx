import { motion } from "framer-motion";
import Link from "next/link";

 export default function HeroContent() {
    return (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 pointer-events-auto"
            >
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-medium">
                        Architectural Excellence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white italic">
                        Defining <span className="font-semibold not-italic">Spaces</span>
                    </h1>
                </div>

                <div className="pt-4">
                    <Link href="/projects">
                        <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-12 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
                            <span className="relative z-10">Explore our portfolio</span>
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}