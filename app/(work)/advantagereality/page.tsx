import ImageTitle from "@/components/ImageTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

// 1. Define your Cloudinary URLs here at the top
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/rhvflcf6/image/upload";

const PROJECT_IMAGES = [
    `${CLOUDINARY_BASE_URL}/v1786083076/advantage1_fpa9x9.jpg`,
    // Removed the broken v123456789 fake URL that was here
    `${CLOUDINARY_BASE_URL}/v1786083076/advantage2_b87euu.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786083076/advantage3_qfnf2h.jpg`,
    `${CLOUDINARY_BASE_URL}/v1786083078/advantage5_fxaqhl.jpg`,
];

export default function Page() {
    return (
        <>
            <main className="relative w-full h-screen select-none">
                {/* 2. Pass the Cloudinary URL to your ImageTitle component */}
                <ImageTitle
                    imageUrl={`${CLOUDINARY_BASE_URL}/v1786083076/advantage1_fpa9x9.jpg`}
                    headerText="Advantage Realty"
                />
            </main>

            <section className="relative bg-[#F7F4EDff] min-h-screen pt-12 pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-4 md:px-8">

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                // 3. FIXED: Replaced the fake v123456789 URL with your actual uploaded image URL
                                src={`${CLOUDINARY_BASE_URL}/v1786083076/advantage1_fpa9x9.jpg`}
                                alt="Advantage Realty landscape design"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw" // Required when using fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none">
                            Advantage Realty
                        </h1>

                        <h2 className="font-Roboto pt-6 lg:pt-10 text-3xl text-center tracking-tighter select-none">
                            In the bustling city of Silchar, the second-largest in Assam, we embarked on a landscape project for Advantage Realty&apos;s upscale housing development.
                        </h2>

                        <p className="font-Inter tracking-normal pt-6 lg:pt-10 text-base md:text-lg text-left select-none">
                            Our task was to design the landscape, gateway, and driveways, catering to the sophisticated tastes of the residents.
                            A minimalist approach with horizontal and vertical planes and a dark, muted color palette was chosen to complement the flat terrain.
                            We combined sleek, modern lines with lush greenery, resulting in a harmonious blend of nature and architecture.
                            This approach not only met but exceeded the residents&apos; expectations, providing a serene yet stylish environment.
                            The specific need of the client for planting herbaceous and medicinal plants and shrubs around the individual quarters
                            was also fulfilled mindfully.
                        </p>

                        <div className="pt-5">
                            <h1 className="font-sans font-medium border-l-2 border-black pl-4 text-lg md:text-xl">
                                Silchar
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
                        allImages={PROJECT_IMAGES} // Pass the full array here
                        index={index}              // Pass the current index here
                    />
                ))}
            </section>
        </>
    );
}