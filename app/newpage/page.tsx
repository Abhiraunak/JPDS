import ArchitectCard from '@/components/ArchitectCard';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <ArchitectCard 
        imageSrc="/person1.jpeg" // Place your image in the public folder
        name="Jay Prakash"
        roles={["Principle Architect", "Founder"]}
        company="JPDS"
        link="/portfolio"
      />
    </main>
  );
}