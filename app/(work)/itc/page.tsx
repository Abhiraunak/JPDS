import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

const PROJECT_IMAGES = [
    `${CLOUDINARY_BASE_URL}/v1786593338/image1_vv6mrk.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786593345/image2_wwteor.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786593351/image3_aivyxt.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786593372/image4_sui5bq.jpg`,
];

export default function Page() {
    return (
        <>
            <main className="relative w-full min-h-screen selection:none">
                <ImageTitle
                    imageUrl= {`${CLOUDINARY_BASE_URL}/v1786593351/image3_aivyxt.jpg`}
                    headerText="ITC, Ayodhya"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={`${CLOUDINARY_BASE_URL}/v1786593345/image2_wwteor.jpg`}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                         ITC
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            The landscape design for the ITC Hotel in Ayodhya has been conceived to create 
                            a harmonious blend of luxury hospitality and serene natural elements. 
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          The design integrates elegant arrival courts, lush peripheral plantations, and carefully curated garden spaces to enhance the 
                          architectural character of the hotel. A highlight of the project is the elevated infinity-style swimming pool deck, surrounded 
                          by tropical palms, cabanas, and wooden decking that creates a relaxing resort-like ambiance. 
                          Layered planting with flowering trees, hedges, and ornamental species adds depth and visual 
                          richness throughout the site while maintaining clear circulation for guests and vehicles. 
                          The overall landscape strategy focuses on creating a sophisticated yet tranquil environment that complements the 
                          grandeur of the hotel while offering memorable outdoor experiences for visitors.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Ayodhya
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                {PROJECT_IMAGES.map((imageUrl, index) => (
                    <ProjectCard 
                        key={index} 
                        imageUrl={imageUrl} 
                        allImages={PROJECT_IMAGES} // Enables next/prev gallery navigation
                        index={index}              // Tells the modal which image was clicked
                    />
                ))}
            </section>
        </>
    )
}