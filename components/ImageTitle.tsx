import Image from "next/image";

interface ImageTitleProp {
    imageUrl: string;
    headerText: string;
    altText?: string; // Optional prop for even better SEO
}

export default function ImageTitle({ imageUrl, headerText, altText }: ImageTitleProp) {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            {/* Background image with priority loading */}
            <Image
                src={imageUrl}
                alt={altText || `${headerText} landscape project`}
                fill
                sizes="100vw" 
                quality={85} 
                className="object-cover object-center"
                priority
            />
            
            {/* Semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Responsive heading with proper contrast */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           text-neutral-200 text-2xl md:text-4xl lg:text-5xl font-bold 
                           font-sans tracking-wider text-center px-4 w-full max-w-4xl italic
                           drop-shadow-lg">
                {headerText}
            </h1>
        </div>
    );
}