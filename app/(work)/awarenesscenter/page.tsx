import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen select-none">
                <ImageTitle
                    imageUrl="/ramgarh/header_image.jpg"
                    headerText="Awareness Centre"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/ramgarh/header_image.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Awareness Centre
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Ramgarh, a city in Jharkhand, near its capital Ranchi, is a mining, industrial and
                            cultural hub. It is also a Historic landmark and during British rule, it housed several
                            Wood treatment plants for sleepers.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            After the introduction of modern railroad systems that had
                            concrete-based sleepers, they were abandoned, with heavy machinery and boilers
                            left intact.
                            Thus, the DFO of Ramgarh came to us with a unique idea to reconstruct these
                            plants as awareness centres for the environment, history and local culture.
                            To make this Idea a reality, we merged the interior and exterior spaces with the
                            sense of connectedness as one entity and landscaped the level differences with
                            open-air theatres, seating and mounds; while the interior spaces were converted to
                            cafeterias where the structure was semi-demolished and museums, where it
                            housed machinery. This helped cut the costs of moving the machinery, for example,
                            as well as fewer cut-fills. The pond that stored water for the boiler was converted
                            into a lily pond.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Ramgarh
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/ramgarh/ramgarh1.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh2.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh3.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh4.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh5.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh6.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh7.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh8.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh9.jpg"  />
                <ProjectCard imageUrl="/ramgarh/ramgarh10.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh11.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh12.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh13.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh14.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh15.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh16.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh17.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh18.jpg" />
                <ProjectCard imageUrl="/ramgarh/ramgarh19.jpg" />  
            </section>
        </>
    )
}