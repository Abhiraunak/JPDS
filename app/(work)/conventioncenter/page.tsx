import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/conventionCenter/header.jpg"
                    headerText="Convention Centre, Sohna"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/conventionCenter/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Convention Centre
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                            The corner side plot was to be developed as a Convention Centre as a Competition Project and the form at play was according to site.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            The minimalistic approach has a distinct form to bring out more spaces for visual appeal by creation of 
                            interesting spaces into the small pockets thus formed in-between, in both exterior and interior instead 
                            of appearing as a monotonous rectangular block. Very less use of material like Glass and Tiles with metal 
                            and GRC Jalis helped us to achieve minimalism with modernist style
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Sohna
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/conventionCenter/convention1.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention2.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention3.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention4.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention5.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention6.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention7.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention8.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention9.jpg" />
                <ProjectCard imageUrl="/conventionCenter/convention10.jpg"/> 
                <ProjectCard imageUrl="/conventionCenter/convention11.jpg"/> 
                <ProjectCard imageUrl="/conventionCenter/convention12.jpg"/> 
                <ProjectCard imageUrl="/conventionCenter/convention13.jpg"/>
                <ProjectCard imageUrl="/conventionCenter/convention14.jpg"/>
                 
            </section>
        </>
    )
}