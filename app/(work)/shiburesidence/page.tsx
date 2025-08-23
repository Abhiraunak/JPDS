import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/shorenhouse/header.jpg"
                    headerText="Shibu Soren Residence, Ranchi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/shorenhouse/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                         Shibu Soren Residence
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            Design of residence of Jharkhand’s Famous Minister of their era had our main scope in landscaping around the pre-existing building 
                            where the main challenge was creating something that he could enjoy.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           Mostly in the evening despite the age factors. Thus, accessible design with ambulatory measures was a key while also, 
                           there needed to be ample of state f the art elements to suit the taste of client. We created very small level 
                           differences everywhere with straight paths ending to some focal point elements like water feature, fountains, 
                           lily ponds and gazebo. This helped in accessible ambulation. So all in all to appeal the visual weight, 
                           we used multiple functional elements to create focal points For kids, we designed a Play area and complemented 
                           the whole landscape with different variety of plant shrub and hedges.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Ranchi
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/shorenhouse/house1.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house2.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house3.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house4.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house5.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house6.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house7.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house8.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house9.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house10.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house11.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house12.jpg" />
                <ProjectCard imageUrl="/shorenhouse/house13.jpg" />
                
            </section>
        </>
    )
}