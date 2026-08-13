import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

const PROJECT_IMAGES = [
    `${CLOUDINARY_BASE_URL}/v1786091895/resort1_pte3ul.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091896/resort2_snxdpn.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091919/resort4_gp4sao.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091914/resort10_g7tmul.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091912/resort8_ftmz9r.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091909/resort18_vtumbi.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091905/resort17_aavkmr.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091905/resort16_tsgdfr.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091904/resort15_rhhi2p.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091901/resort14_y6hnl4.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091901/resort13_a7hnj8.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091901/resort13_a7hnj8.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091900/resort11_grpcwj.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091900/resort12_c4roke.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091896/resort6_zoblv2.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091896/resort2_snxdpn.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786091894/header_aprpma.jpg`,
];

export default function Page() {
    return (
        <>
            <main className="relative w-full min-h-screen select-none">
                <ImageTitle
                    imageUrl={`${CLOUDINARY_BASE_URL}/v1786091896/resort2_snxdpn.jpg`}
                    headerText="Ecoresort, Ranchi"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">
                    
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src={`${CLOUDINARY_BASE_URL}/v1786091896/resort2_snxdpn.jpg`}
                                alt="Ecoresort landscape project with swimming pool"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw" // Required when using fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Ecoresort
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            The eco resort is in Ranchi, Capital city of Jharkhand and in that, landscape was our scope of work with the main challenge 
                            as the level difference near swimming pool area.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            To counter this we created a sloped water fountain that drained water down like a fabric from the pool area.
                            It also housed splash pools for kids and a seating area for adults with a bar area directly opening 
                            into the pool for those who wanted to have some drinks while swimming.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 border-black pl-4 text-lg md:text-xl">
                                Ranchi
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
    );
}