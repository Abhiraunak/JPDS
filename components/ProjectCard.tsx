import Image from "next/image";

interface ProjectCardProps {
    imageUrl: string;
}

export default function ProjectCard({ imageUrl }: ProjectCardProps) {
    return (
        <div className="flex flex-col items-center mt-2">
            <div className="relative w-full max-w-2xl">
                <Image
                    src={imageUrl}
                    alt="JPDS projects"
                    width={800}
                    height={533} 
                    className="rounded-sm object-cover"
                />
            </div>
        </div>
    );
}
