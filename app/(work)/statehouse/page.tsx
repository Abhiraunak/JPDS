import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/statehouse/house3.jpg"
                    headerText="State house, Bodhgaya"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-10 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/statehouse/house1.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            State guest House Bodhgaya
                        </h1>

                       <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                          The project scope centers on a comprehensive reimagining of the exterior environment to harmonize aesthetic appeal with functional luxury. This includes a complete redesign of the front entrance to create a sophisticated first impression through architectural lighting and premium hardscaping. The landscaping phase focuses on a layered planting strategy that provides privacy and seasonal interest while utilizing sustainable irrigation.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                        The building’s symmetrical wings frame a tranquil central courtyard, where a pristine swimming pool serves as the focal point, complete with inviting lounge areas and tan umbrellas.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                BodhGaya
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/statehouse/house1.jpg" />
                <ProjectCard imageUrl="/statehouse/house2.jpg" />
                <ProjectCard imageUrl="/statehouse/house3.jpg" />
                <ProjectCard imageUrl="/statehouse/house4.jpg" />
                <ProjectCard imageUrl="/statehouse/house5.jpg" />
                <ProjectCard imageUrl="/statehouse/house6.jpg" />
                
            </section>
        </>
    )
}