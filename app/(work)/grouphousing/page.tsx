import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/grouphousing/header.jpg"
                    headerText="Group Housing, Bikaner"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/grouphousing/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Group Housing
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                         Bikaner is in Rajasthan and known for its rich heritage architecture as well as hot climate.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          The Scope of our work was to landscape the Space available for public access in a way that it serves all the age-groups.
                          Challenge was the fact that this available space was triangular and thus, we needed to reduce the visual weight of it in the site.
                          To manage it and distribute the visual weight thus, we divided the area into smaller rectangular areas and assigned 
                          functional characters to them, by converting some to lawns and seating areas and turned the remaining pockets in to pergolas, 
                          play areas and added water features into some. Then the corner areas were filled with trees and sports practice nets. 
                          Most Plantations are local and rest are palms to create vegetative contrast.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Bikaner
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/grouphousing/housing1.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing2.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing3.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing4.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing5.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing6.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing7.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing8.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing9.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing10.jpg" />
                <ProjectCard imageUrl="/grouphousing/housing11.jpg" />
            </section>
        </>
    )
}