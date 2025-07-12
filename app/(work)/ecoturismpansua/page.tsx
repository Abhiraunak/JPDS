import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/ecoTourismPansua/header.jpg"
                    headerText="Eco-Tourism, Pansua"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/ecoTourismKiriburu/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Eco-Tourism, Pansua
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            In Pansua, Jharkhand, the Department of Tourism sought to develop the dam area for eco-tourism.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           The project faced challenges like varying water levels and steep slopes. Our design split the site into two sections: one for 
                           daily visitors and another semi-public area for overnight stays.The daily visitor area features parking, seating, a 
                           kids&apos; play zone, and boating facilities. The overnight area includes clusters of cottages with waterfront views, 
                           connected by a bridge to ensure minimal concrete use in this forested region. We used local plant species to maintain ecological 
                           balance and designed ramps and steps to complement the natural slope. Our design philosophy embraced the site&apos;s 
                           natural beauty while providing practical amenities. This balance ensures an enjoyable and sustainable 
                           eco-tourism experience.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                               Pansua , Jharkhand
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/ecoTourismPansua/pansua1.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua2.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua3.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua4.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua5.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua6.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua7.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua8.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua9.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua10.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua11.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua12.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua13.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua14.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua15.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua16.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua17.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua18.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismPansua/pansua19.jpg" title="" />
            </section>
        </>
    )
}