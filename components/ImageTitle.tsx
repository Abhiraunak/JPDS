import Image from "next/image";

interface ImageTitleProp {
    imageUrl: string;
    headerText: string;
}

export default function ImageTitle({ imageUrl, headerText }: ImageTitleProp) {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            {/* Background image with priority loading */}
            <Image
                src={imageUrl}
                alt="project"
                fill
                className="object-cover"
                priority
            />
            
            {/* Semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Responsive heading with proper contrast */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           text-[#ccd5ae] text-2xl md:text-4xl lg:text-5xl font-bold 
                           font-sans tracking-wider text-center px-4 w-full max-w-4xl">
                {headerText}
            </h1>
        </div>
    );
}