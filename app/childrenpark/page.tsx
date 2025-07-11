import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectShowCase";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/park/header.jpg"
                    headerText="Children Park, Khunti"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/park/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Children Park
                        </h1>

                        <h2 className="font-italianno pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                           The park to be designed was having a hilly location with stones in the middle portion abutted by plain land on either side of it. 
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            we designed such that we could achieve two big lawns and then we divided the space into smaller segregations for each age-group.
                            We used Locally available materials such as stones so that it can merge into it’s natural landscape while we retained the existent stones.
                            Whole Park has OATs, Kiosks for sitting, Kid’s play area, outdoor gym, parking and toilet area etc. to enhance the functionality of the visually pleasing looks.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Khunti
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/park/amrutpark1.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark2.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark3.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark4.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark5.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark6.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark7.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark8.jpg" title="" />
                <ProjectCard imageUrl="/park/amrutpark9.jpg" title="" />
                 
            </section>
        </>
    )
}