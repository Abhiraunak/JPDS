import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full min-h-screen selection:none">
                <ImageTitle
                    imageUrl="/wyndhyam/image1.jpeg"
                    headerText="WYNDHYAM HOTEL"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/wyndhyam/image2.jpeg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                         WYNDHYAM HOTEL 
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            The landscape design for the Wyndham Hotel at Jim Corbett has been envisioned to create a seamless connection 
                            between luxury hospitality and the natural surroundings of the region. 
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          The design emphasizes a welcoming arrival experience with a grand drop-off plaza, lush planting beds, and structured hardscape elements 
                          that guide visitors toward the main entrance. Carefully selected native and tropical plant species, 
                          layered planting compositions, and palm-lined avenues enhance the sense of arrival while maintaining 
                          harmony with the surrounding forest landscape. The site integrates functional spaces such as parking 
                          areas, pedestrian walkways, lawn spaces, and outdoor recreational zones including a poolside deck and 
                          open green lawns. Natural stone elements, water features, and curated planting palettes create a balanced environment 
                          that blends contemporary hospitality aesthetics with the serene character of Jim Corbett’s natural setting. The overall landscape 
                          strategy focuses on visual richness, guest comfort, and ecological sensitivity, ensuring a memorable outdoor experience throughout the property.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              JIM CORBETT
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/wyndhyam/image1.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image2.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image3.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image4.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image5.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image6.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image7.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image8.jpeg" />
                <ProjectCard imageUrl="/wyndhyam/image9.jpeg" />
            </section>
        </>
    )
}