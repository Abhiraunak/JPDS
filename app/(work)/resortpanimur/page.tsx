import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/ecoResortPanimur/header.jpg"
                    headerText="Eco-Resort Panimur"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/ecoResortPanimur/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Eco-Resort Panimur
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Nestled in the heart of Panimur, Assam, this eco-resort capitalises on the 
                            area&apos;s breathtaking waterfalls and lush natural beauty.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            The Assamese people&apos;s deep connection to nature made it essential to centre our design around organic elements. 
                            Integrating existing trees and buildings into the design posed a challenge, but we embraced the contoured site using steps, 
                            ramps, and mounds to enhance the natural terrain. The project scope included creating functional yet stunning landscapes. We 
                            used local materials and indigenous plants to blend seamlessly with the surroundings, minimising maintenance needs. Elegantly curved pathways 
                            were designed to navigate the slopes, ensuring an effortless stroll for guests. 
                            Challenges included maintaining harmony with the natural contours while 
                            providing modern amenities. Our solution involved using organic design elements that required minimal intervention. 
                            The result is a resort that offers both beauty and functionality, inviting guests to immerse themselves in 
                            nature. Eco Resort Panimur
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Panimur, Assam
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/ecoResortPanimur/panimur1.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur2.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur3.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur4.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur5.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur6.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur7.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur8.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur9.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur10.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur11.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur12.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur13.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur14.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur15.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur16.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur17.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur18.jpg" title="" />
                <ProjectCard imageUrl="/ecoResortPanimur/panimur19.jpg" title="" />
               
            </section>
        </>
    )
}