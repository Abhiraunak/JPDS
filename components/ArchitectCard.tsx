import Image from 'next/image';
import Link from 'next/link';

interface ArchitectCardProps {
  imageSrc: string;
  name: string;
  roles: string[];
  company: string;
  link: string;
}

export default function ArchitectCard({
  imageSrc,
  name,
  roles,
  company,
  link,
}: ArchitectCardProps) {
  return (
    <div className="flex items-center justify-center p-4 md:p-10">
      <div className="relative flex flex-row items-center">
        <div className="relative w-40 h-52 md:h-80 md:w-64 shrink-0 overflow-hidden bg-gray-200 border">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>

        <div className="relative z-10 
          -ml-3 md:-ml-5 
          mb-16 md:mb-32 
          flex flex-col justify-between 
          w-60 h-48 md:w-80 md:h-64 
          border border-black bg-neutral-200 
          p-5 md:p-8 
          shadow-sm mix-blend-multiply"
        >

          {/* Header Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-black tracking-wide">
              {name}
            </h2>
            {/* Custom short underline */}
            <div className="mt-2 h-[1px] w-8 md:w-12 bg-black"></div>
          </div>

          {/* Details / Links Section */}
          <div className="flex flex-col space-y-0.5 md:space-y-1 text-xs md:text-sm font-medium text-black">
            {roles.map((role, index) => (
              <span key={index} className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-gray-700">
                {role}
              </span>
            ))}
            <Link href={link} className="underline decoration-1 underline-offset-4 hover:text-gray-700">
              {company}
            </Link>
          </div>

          {/* Arrow Icon aligned bottom right */}
          <div className="flex justify-end">
            <Link href={link} className="group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // Scaled icon size slightly for mobile
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}