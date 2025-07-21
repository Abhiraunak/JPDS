import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/springrand/header.jpg"
                    headerText="Spring Grand, Lucknow"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/springrand/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-Roboto font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                         Spring Grand
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Spring Grand was quite the challenging Project dealt beautifully with landscaping as the main scope 
                            around the group housing society
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          Challenge was the small strip of land available with a narrow width for the landscaping. Most of the spaces 
                          apart from that were for vehicular movement. We Completely changed the roads to a Pattern-Based Paver block 
                          system to make it a part of the landscape in visual terms. To reduce the weight of slender and lengthy road, 
                          we broke the Path  using dark-toned horizontal strips at every few meters, also functionally available as 
                          pathways. We then used the core strip and divided it into smaller fragments converting them into various 
                          spaces for all age groups like seating, gym, kids play area water features etc. and Using the leftover 
                          areas for plantation and softscape.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Lucknow
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/springrand/grand1.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand2.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand3.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand4.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand5.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand7.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand8.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand9.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand10.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand11.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand12.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand13.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand14.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand15.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand16.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand17.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand18.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand19.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand20.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand21.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand22.jpg" title="" />
                <ProjectCard imageUrl="/springrand/grand24.jpg" title="" />
            </section>
        </>
    )
}