import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/rhvflcf6/image/upload";

const PROJECT_IMAGES = [
    `${CLOUDINARY_BASE_URL}/v1786591880/munger1_o9fxj6.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591884/munger2_crmsrg.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591879/munger3_ie9zk7.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591867/munger4_ghrrcc.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591887/munger5_ipso0c.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591877/munger6_x26i07.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591878/munger7_g77pgl.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591887/munger8_arehxd.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591917/munger9_nytcom.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591999/munger10_oeqbyh.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591946/munger11_kb44z9.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786592048/munger12_mou1sm.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786592049/munger14_t1fs8x.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786591929/munger15_n7yzoy.jpg`,
];

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen selection:none">
                <ImageTitle
                    imageUrl={`${CLOUDINARY_BASE_URL}/v1786591880/munger1_o9fxj6.jpg`}
                    headerText="Vaniki, Munger"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20 ">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={`${CLOUDINARY_BASE_URL}/v1786591880//munger5_ipso0c.jpg`}
                                alt="project image"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Vaniki
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            In Munger, Bihar which is a Part of history of Bihar and has been city of interest for various Mughal and Muslim emperors, 
                            Vaniki is a Building of Forest department.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                          With a courtyard that received very less hours of sunlight across the daytime, our scope of work of landscaping was quite a bit calculative.
                          We first devised a connectivity diagram and flow diagram to understand the movement of public and occupants and then divided the courtyard into parts, symmetrically.
                          We used Plantations that require less maintenance and sunlight to satisfy the environment inside it. Use of Stone Pavers helped us to radiate the nature-sensitive qualities of Forest department
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 pl-4 text-lg md:text-xl">
                              Munger
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

              <section className="flex flex-col items-center gap-5 bg-[#F7F4EDff] px-4 pb-20">
                {PROJECT_IMAGES.map((imageUrl, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={imageUrl}
                        allImages={PROJECT_IMAGES} // Enables next/prev gallery navigation
                        index={index}              // Tells the modal which image was clicked
                    />
                ))}
            </section>
        </>
    )
}