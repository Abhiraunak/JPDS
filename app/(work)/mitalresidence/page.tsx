import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/mittal/header.jpg"
                    headerText="Mittal Residence, Faridabad"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/mittal/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                          Mittal Residence
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            Mittal residence was an already constructed building with a Party Hall waiting to be created and connected to the main structure.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           The scope of work was the Lawn as big as the building footprint and the space reserved for party hall.
                           Thus by designing Parking space, renovating the lawn, creating the walkways and air conditioned Gazebo, 
                           we revamped the Open space and used mounds and palm trees, hedges and shrubs etc . 
                           to create eye-catching level differences and contrasting nature.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Faridabad
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/mittal/house1.jpg" />
                <ProjectCard imageUrl="/mittal/house2.jpg" />
                <ProjectCard imageUrl="/mittal/house3.jpg" />
                <ProjectCard imageUrl="/mittal/house4.jpg" />
                <ProjectCard imageUrl="/mittal/house5.jpg" />
                <ProjectCard imageUrl="/mittal/house6.jpg" />
                <ProjectCard imageUrl="/mittal/house7.jpg" />
                <ProjectCard imageUrl="/mittal/house8.jpg" />
                <ProjectCard imageUrl="/mittal/house9.jpg" />
                <ProjectCard imageUrl="/mittal/house10.jpg" />
                <ProjectCard imageUrl="/mittal/house11.jpg" />
                <ProjectCard imageUrl="/mittal/house12.jpg" />
                <ProjectCard imageUrl="/mittal/house13.jpg" />
                <ProjectCard imageUrl="/mittal/house14.jpg" />
                <ProjectCard imageUrl="/mittal/house15.jpg" />
                <ProjectCard imageUrl="/mittal/house16.jpg" />
                <ProjectCard imageUrl="/mittal/house17.jpg" />
                <ProjectCard imageUrl="/mittal/house18.jpg" />
                <ProjectCard imageUrl="/mittal/house19.jpg" />
                <ProjectCard imageUrl="/mittal/house20.jpg" />
            </section>
        </>
    )
}