import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/nagpur/header.jpg"
                    headerText="Residence, Nagpur"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/nagpur/house2.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                           Residence, Nagpur
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                    This particular project was quite interesting in terms of its looks as it housed a Garden in front followed by the main Residential Building.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            Our scope was Architecture interior and Landscape and We did Make the look worth it by Changing Materials to create planar 
                            façade and some fenestration design with Jali and Louvers along with planter boxes really added to it. The front garden 
                            housed a swing, a lawn and some flowering plants on the edged to create a sense of separated entity while being a part of 
                            the system. Multiple planes created a play of light and shadow and in turn created a sense of depth of field.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Nagpur
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/nagpur/house1.jpg" title="" />
                <ProjectCard imageUrl="/nagpur/house2.jpg" title="" />
                <ProjectCard imageUrl="/nagpur/house3.jpg" title="" />
                <ProjectCard imageUrl="/nagpur/house4.jpg" title="" />
                <ProjectCard imageUrl="/nagpur/house5.jpg" title="" />
            </section>
        </>
    )
}