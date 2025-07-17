import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/naturopathy/header.jpg"
                    headerText="Naturopathy Centre, Ranchi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/naturopathy/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Naturopathy Centre
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                          Naturopathy Centre of Ranchi housed spaces for Yoga, Meditation and Spa.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           It was mainly a Set of Courtyard and thus the challenge was to make the occupants feel connected to surrounding exteriors.
                           By virtue of Façade Treatment and Fenestration development as well as Landscaping in the periphery 
                           we achieved the same. To Visually connect the people inside to outside, we used glazing and connected 
                           the central courtyard with the smaller subordinate ones.
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
                <ProjectCard imageUrl="/naturopathy/center1.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center2.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center3.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center4.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center5.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center6.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center7.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center8.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center9.jpg" title="" />
                <ProjectCard imageUrl="/naturopathy/center10.jpg" title="" />
            </section>
        </>
    )
}