import { BackgroundVideo } from '@/components/BackgroundVideo';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>JPDS - Boutique Design Studio</title>
        <meta name="description" content="High-end residences, landscape architecture, urban design, public art, and environmental planning across India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section - Fixed centering */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <BackgroundVideo />
        </div>

        {/* Content Container - Removed top margin */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-wide lg:text-8xl mb-4">
            JPDS
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl leading-relaxed">
              Crafting Timeless Spaces: High-End Residences, Landscape Architecture, 
              Urban Design, Public Art, and Environmental Planning Across India.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gray-400"></div>
            </div>
            <p className="mt-4 text-gray-300 italic">
              Architecture Studio Based in Faridabad, Serving Pan-India Visions.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <Link href="/projects" passHref>
            <button
              className="rounded-full bg-neutral-500 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              aria-label="View our portfolio"
            >
              Explore Our Portfolio
            </button>
          </Link>

          {/* Subtle Tagline */}
          <p className="mt-10 text-sm uppercase tracking-widest opacity-75">
            Our studio offers expert services in architecture, interior design, and Vastu consulting to create spaces that are both harmonious and functional.
          </p>
        </div>
      </section>
    </div>
  );
}