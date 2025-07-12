import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/ecoResortPanimur/header.jpg"
                    headerText="Eco-Tourism Kiriburu"
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
                            Eco-Tourism Kiriburu
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Kiriburu, Jharkhand, presented a unique challenge due to its city location and contoured landscape.
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            We focused on a site layout that maintained a sense of openness. Cottages were placed on high points, 
                            while low points became open-air theatres, minimizing earthwork.
                            Our design included a multipurpose hall and ample open spaces, ensuring functionality without compromising aesthetics. 
                            By strategically positioning elements, we created a harmonious and inviting eco-tourism site.The challenge 
                            was integrating modern facilities while preserving the natural landscape. Our approach achieved a balance, 
                            offering guests a tranquil retreat in harmony with nature.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Kiriburu, Jharkhand
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi1.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi2.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi3.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi4.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi5.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi6.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi7.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi8.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi9.jpg" title="" />
                <ProjectCard imageUrl="/ecoTourismKiriburu/kiriburi10.jpg" title="" /> 
            </section>
        </>
    )
}