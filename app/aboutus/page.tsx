import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#F7F4ED] mt-[5rem]">
            {/* First Section - Unchanged */}
            <section className="relative bg-[#F7F4ED] pt-12 pb-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-0 px-4 md:px-8">
                    <div className="text-black lg:pl-5 px-4 md:px-0 flex flex-col justify-center max-w-3xl mx-auto lg:max-w-none">
                        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center select-none leading-tight">
                            ABOUT US
                        </h1>

                        <h2 className="font-serif pt-6 lg:pt-10 text-3xl text-center select-none">
                            JPDS is a boutique design studio that specializes in high-end Residence, landscape architecture, urban design,
                            public art and environmental planning in pan India with head office in Faridabad.
                        </h2>
                    </div>

                    <div className="flex justify-center lg:justify-end lg:items-center lg:pl-5 h-[50vh] lg:h-full">
                        <div className="relative w-full max-w-xl lg:w-[700px] h-full">
                            <Image
                                src="/nagpur/house2.jpg"
                                alt="project image"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Second Section */}
            <section className="relative bg-[#F7F4ED] py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Image with circular frame */}
                        <div className="relative w-full max-w-md lg:max-w-none lg:w-1/2">
                            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <Image
                                    src="/nagpur/house3.jpg"
                                    alt="Our philosophy"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-200/30 z-[-1]"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-200/20 z-[-1]"></div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 text-black">
                            <div className="relative">
                                <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl tracking-widest text-right select-none text-black/10 lg:text-black/5">
                                    OUR PHILOSOPHY
                                </h2>
                                <h3 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide select-none absolute top-0 right-0">
                                    Our Philosophy
                                </h3>
                            </div>

                            <div className="mt-12 md:mt-16 space-y-6">
                                <p className="font-serif text-lg md:text-xl leading-relaxed">
                                    We believe that nature is integrated in our everyday lives with multiple dimensions of interpretations and guidance that engage and intrigue us to draw new forms of authentic design character previously unseen by the user.
                                </p>
                                <p className="font-serif text-lg md:text-xl leading-relaxed">
                                    Although we look for design inspiration from nature for abstract perspectives, we do not believe in designing nature to be retained as low maintenance. Doing so will produce a fruitless state of unintelligent green design.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <div className="px-6 py-3 bg-[#ccd5ae] text-black rounded-full font-serif">
                                    Nature-Inspired Design
                                </div>
                                <div className="px-6 py-3 bg-[#ccd5ae] text-black rounded-full font-serif">
                                    Sustainable Solutions
                                </div>
                                <div className="px-6 py-3 bg-[#ccd5ae] text-black rounded-full font-serif">
                                    Intelligent Green Spaces
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            {/* <section className="bg-amber-800 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-center text-white mb-16">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description: "Pushing boundaries to create unique design solutions that stand the test of time."
                            },
                            {
                                title: "Sustainability",
                                description: "Creating designs that respect and enhance the natural environment."
                            },
                            {
                                title: "Craftsmanship",
                                description: "Attention to detail and commitment to excellence in every project."
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                                    <span className="text-amber-800 font-bold text-2xl">{index + 1}</span>
                                </div>
                                <h3 className="font-sans font-bold text-2xl text-amber-800 mb-4">
                                    {value.title}
                                </h3>
                                <p className="font-serif text-gray-700">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}