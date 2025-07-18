import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/ecoresort/header.jpg"
                    headerText="Ecoresort, Ranchi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/ecoresort/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                         Ecoresort
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            The eco resort is in Ranchi, Capital city of Jharkhand and in that, landscape was our scope of work with the main challenge 
                            as the level difference near swimming pool area.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          To counter this we created a Sloped water fountain that drained water down Like a fabric from the Pool area.
                          It also housed splash pools for kids and seating area for adults with a Bar area directly opening 
                          into pool for those who wanted to have some drinks while swimming.
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
                <ProjectCard imageUrl="/ecoresort/resort1.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort2.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort3.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort4.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort5.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort6.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort7.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort8.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort9.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort10.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort11.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort12.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort13.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort18.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort14.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort15.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort16.jpg" title="" />
                <ProjectCard imageUrl="/ecoresort/resort17.jpg" title="" />
            </section>
        </>
    )
}