import Head from 'next/head';
import Slider from '@/components/Slider';

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
        <Slider />
      </main>
    </div>
  );
}