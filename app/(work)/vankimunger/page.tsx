import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/vanki/header.jpg"
                    headerText="Vaniki, Munger"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/vanki/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Vaniki
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            In Munger, Bihar which is a Part of history of Bihar and has been city of interest for various Mughal and Muslim emperors, 
                            Vaniki is a Building of Forest department.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          With a courtyard that received very less hours of sunlight across the daytime, our scope of work of landscaping was quite a bit calculative.
                          We first devised a connectivity diagram and flow diagram to understand the movement of public and occupants and then divided the courtyard into parts, symmetrically.
                          We used Plantations that require less maintenance and sunlight to satisfy the environment inside it. Use of Stone Pavers helped us to radiate the nature-sensitive qualities of Forest department
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Munger
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/vanki/vanki1.jpg" title="" />
                <ProjectCard imageUrl="/vanki/vanki2.jpg" title="" />
                <ProjectCard imageUrl="/vanki/vanki3.jpg" title="" />
                <ProjectCard imageUrl="/vanki/vanki4.jpg" title="" />
                <ProjectCard imageUrl="/vanki/vanki5.jpg" title="" />
            </section>
        </>
    )
}