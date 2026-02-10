import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>JPDS - Architecture Design Studio</title>
        <meta name="description" content="High-end residences, landscape architecture, urban design, public art, and environmental planning across India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section - Fixed centering */}
      <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* background image */}
        <Image
          src="/ecoresort/resort2.jpeg"
          alt="Eco Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10 z-0" />
        <div className="relative z-10">
          <Link href="/projects">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-netural-200 px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Explore our portfolio
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}