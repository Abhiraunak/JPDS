import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/waysideAmenties/header.jpg"
                    headerText="Wayside Amenities"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/waysideAmenties/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Wayside Amenities
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                          Designed in collaboration with Jharkhand Tourism Department, 
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            Wayside amenities is a unique approach of temporary stay for the travelers of the state that need a 
                            space to sit and relax in between their long routes. It houses a modular space housing parking areas, 
                            a Cafeteria with Sanitary requirements, Play areas, outdoor seating areas as well as Some landscaped 
                            regions for mental rejuvenation.
                            Wayside amenities is designed to be repeated across the state with same coherent design to embark 
                            it’s identity and serve the people in regions where the Long-route travelers are frequent.
                        </p>

                        {/* <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Khunti
                            </h1>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/waysideAmenties/way1.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way2.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way3.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way4.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way5.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way6.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way7.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way8.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way9.jpg" title="" />
                <ProjectCard imageUrl="/waysideAmenties/way10.jpg" title="" />
                 
            </section>
        </>
    )
}