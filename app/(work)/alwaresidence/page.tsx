import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/alwar/header.jpg"
                    headerText="Alwar Residence"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/alwar/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Alwar Residence
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            A very versatile project based in Rajasthan where the house of a business owner was to be renovated in
                            all three aspects of design viz. Architecture, Interior and Landscape.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            The Challenge was that The Client wanted a Fusion of Classical and Modernist elements, by taking inspirations
                            from ITC grand and adding contemporary touch to it. and The Main Structural area was to be kept mostly undemolished.
                            We approached the design by using Fluted Neo-classical rectangular columns, Projected roofs,
                            Double heighted Portico and Complimented it with the mix of modernist ceiling style and lightings.
                            The color scheme was kept subtle and contrast was created using materials. Choice of plantation was
                            to respond to climatic conditions of Rajasthan and use of stones in pavers to create patterned flooring
                            was another Aesthetic modulation
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Alwar, Rajasthan
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/alwar/house1.jpg"  />
                <ProjectCard imageUrl="/alwar/house2.jpg"  />
                <ProjectCard imageUrl="/alwar/house3.jpg" />
                <ProjectCard imageUrl="/alwar/house4.jpg"  />
                <ProjectCard imageUrl="/alwar/house5.jpg"  />
            </section>
        </>
    )
}