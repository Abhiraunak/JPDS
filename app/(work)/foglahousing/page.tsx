import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/fogla/header.jpg"
                    headerText="Fogla Housing, Ranchi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/fogla/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Fogla Housing
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Surrounded by Tall Apartment buildings, The space on the Raised floor over the basement of fogla housing was given to us to landscape and in such 
                            a way that it has adequate seating space for the residents.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          To do this we used waterproofed and well drained Planters on the RCC slab to create greenery, stepped 
                          circular seating for community spaces, seats here and there for everyone and Concentric patterns 
                          filled with altercations of Plants and paver blocks. We landscaped the whole area with trees and 
                          shrubs that require less sun and less soil to propagate.
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
                <ProjectCard imageUrl="/fogla/fogla1.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla2.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla3.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla4.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla5.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla6.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla7.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla8.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla9.jpg" title="" />
                <ProjectCard imageUrl="/fogla/fogla10.jpg" title="" />
            </section>
        </>
    )
}