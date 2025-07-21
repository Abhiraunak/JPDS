import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl="/farmhouse/header.jpg"
                    headerText="Farmhouse Chattarpur, Delhi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={"/farmhouse/header.jpg"}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Farmhouse Chattarpur
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-2xl md:text-3xl lg:text-4xl text-center select-none">
                          Chhatarpur farm house is a 5-acre Landscaping project done in a way as to make the occupants feel relaxed and connected to nature. 
                        </h2>

                        <p className="font-serif tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                           The challenge was to keep the landmass free from artificial hardscape as much as possible and keep the natural form and slopes 
                           as much in shape as we could. Envisioned to celebrate nature, the landscape incorporates naturally existing trees, mounds 
                           and stones seamlessly. The unique seating area features captivating circular patterns with a rich mix of materials, textures, 
                           and colors, surrounded by vibrant flowering and deciduous trees that provide perfect seasonal sun and shade. The 
                           design showcases a blend of organic and grid patterns, with elegant linear elements aligned to the main 
                           structure. Highlights include serene lily ponds, shimmering pools, charming gazebos, inviting open-air seating, 
                           lush lawns, and flowering trees like Gulmohar, Amaltas, and Jarul, ensuring a breathtaking display of color in every season.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                                Chattarpur, Delhi
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                <ProjectCard imageUrl="/farmhouse/farm1.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm2.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm3.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm4.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm5.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm6.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm8.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm9.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm10.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm11.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm12.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm13.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm14.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm15.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm16.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm17.jpg" title="" />
                <ProjectCard imageUrl="/farmhouse/farm18.jpg" title="" />
            </section>
        </>
    )
}