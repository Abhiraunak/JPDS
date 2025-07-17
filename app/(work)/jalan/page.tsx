import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/jalan/header.jpg"
                    headerText="Jalan Bungalow, Lucknow"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/jalan/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                           Jalan Bungalow
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Lucknow, Land of Nawabs and Very cliché speech style had us design a Bungalow at its heart.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           The scope of work being the landscaping, mostly in the Backyard, it was a beautiful rendition of elements 
                           of the planet achieved by use of water, wood, stone, glass and so on. The client wanted the space behind 
                           the bungalow to be used, and an overall modern look. We used gates, boundary wall, and flooring 
                           pattern in accordance with modern design scheme.
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
                <ProjectCard imageUrl="/jalan/jalan1.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan2.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan3.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan4.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan5.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan6.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan8.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan9.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan10.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan11.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan12.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan13.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan14.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan15.jpg" title="" />
                <ProjectCard imageUrl="/jalan/jalan16.jpg" title="" />
                
            </section>
        </>
    )
}