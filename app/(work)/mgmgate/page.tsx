import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/mgmgate/header.jpg"
                    headerText="MGM Gate, Jamshedpur"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-10 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/mgmgate/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            MGM Gate
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                          Renovated MGM hospital of Jamshedpur was in requirement of an entrance gateway that mimicked the modernist looks of the new appearance of their main buildings. 
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                        We Used a Mushroom column and some Minimalistic design with lots of angular projections to achieve the 
                        same while also using 
                        A Picture of Mahatma Gandhi as their logo embossed onto the wall.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Jamshedpur
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/mgmgate/gate1.jpg" title="" />
                <ProjectCard imageUrl="/mgmgate/gate2.jpg" title="" />
                <ProjectCard imageUrl="/mgmgate/gate3.jpg" title="" />
                
            </section>
        </>
    )
}