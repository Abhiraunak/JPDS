import Image from "next/image";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
}

export default function ProjectCard({ imageUrl, title }: ProjectCardProps) {
    return (
        <div className="flex flex-col items-center py-8 gap-4">
            <div className="relative w-full max-w-2xl">
                <Image
                    src={imageUrl}
                    alt="JPDS projects"
                    width={800}
                    height={533} 
                    className="rounded-md object-cover"
                />
            </div>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-widest text-black uppercase">
                {title}
            </h2>
        </div>
    );
}
