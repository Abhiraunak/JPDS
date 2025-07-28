import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/bitSindhriExtension/header.jpg"
                    headerText="BIT Sindri Extension"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/bitSindhriExtension/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            BIT Sindri Extension
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            BIT Sindri was an extension project in which Some new departments and building 
                            were added to the previously existing ones where our scope of work was primarily the landscaping.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            The goal was to Harmonize the design language with the previous so that the overall appearance looks 
                            contemporary to the existing spaces. Earlier lack of adequate parking spaces was covered in this region 
                            by designing dedicated area for that and mindfully choosing plantation that are evergreen and less 
                            leaf-shedding so as to cause least botheration to parked vehicles. Pedestrian pathways, a necessity 
                            of institutional buildings, were designed with Sun-shading using trees in mind, complemented 
                            by evergreen shrub and hedges.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                BIT Sindri
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/bitSindhriExtension/header.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri1.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri2.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri3.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri4.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri5.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri6.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri7.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri8.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri9.jpg" />
                <ProjectCard imageUrl="/bitSindhriExtension/sindri10.jpg"/>
                <ProjectCard imageUrl="/bitSindhriExtension/sindri11.jpg"/>
                <ProjectCard imageUrl="/bitSindhriExtension/sindri12.jpg"/>
               
            </section>
        </>
    )
}