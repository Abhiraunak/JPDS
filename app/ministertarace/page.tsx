import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/ministerQuarterTerrace/Header.jpg"
                    headerText="Minister Quarter Terrace"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/ministerQuarterTerrace/Header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Minister Quarter Terrace
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            Revamping the Minister Quarter Terrace required creating a multifunctional space 
                            suitable for both private family time and large gatherings. 
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            Our design converted the roof into a lush haven with lawns, pergolas, and seating areas, strategically 
                            concealing MEP equipment and services.
                            Privacy was a key concern, addressed by crafting green boundaries with hedges, vines, and plants to shield the terrace from neighbouring views. This 
                            transformation turned the terrace into a versatile and inviting space, perfect for any 
                            occasion. The challenges of balancing functionality with aesthetics were met by using green 
                            elements to create privacy while maintaining an open, airy feel. The result is a 
                            terrace that offers a tranquil escape within an urban setting.
                        </p>

                        {/* <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Ramgarh
                            </h1>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace1.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace2.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace3.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace4.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace5.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace6.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace7.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace8.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace9.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace10.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace11.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace12.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace13.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace14.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace15.jpg" title="" />
                <ProjectCard imageUrl="/ministerQuarterTerrace/terrace16.jpg" title="" />
            </section>
        </>
    )
}