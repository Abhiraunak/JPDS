import Image from "next/image";
import { FaAddressCard } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Page() {
    return (
        <>
            <section className="relative bg-[#F7F4ED] min-h-screen mt-[5rem] flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Contact Info Section */}
                        <div className="w-full lg:w-1/2 text-black">
                            <div className="relative">
                                <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl tracking-widest text-right select-none text-black/10 lg:text-black/5">
                                    CONTACT US
                                </h2>
                                <h3 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide select-none absolute top-0 right-0">
                                    CONTACT US
                                </h3>
                            </div>

                            <div className="mt-10 flex flex-col gap-6">
                                <div className="px-6 py-4 bg-[#ccd5ae] text-black rounded-full font-serif shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl font-semibold">New Delhi | NCR</h2>
                                    <div className="flex flex-row items-center mt-1">
                                        <FaAddressCard className="text-lg" />
                                        <p className="pl-2">M11/09/SF, BPTP Park Elite Floor, Sector-83, Faridabad 121002</p>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-[#ccd5ae] text-black rounded-full font-serif shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl font-semibold">PATNA</h2>
                                    <div className="flex flex-row items-center mt-1">
                                        <FaAddressCard className="text-lg" />
                                        <p className="pl-2">Chankya Nagar, Kumhrar, Patna 800026</p>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-[#ccd5ae] text-black rounded-full font-serif shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex flex-row items-center mt-1">
                                        <MdContactPhone  className="text-lg" />
                                            <p className="pl-2">9717654551 </p>
                                    </div>
                                    <div className="flex flex-row items-center mt-1">
                                        <MdEmail  className="text-lg" />
                                            <p className="pl-2">jay.mnit@gmail.com </p>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-[#ccd5ae] text-black rounded-full font-serif shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl font-semibold text-center mb-3">Follow us on</h2>
                                    <div className="flex flex-row justify-center gap-8">
                                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                            <FaXTwitter className="text-2xl hover:text-blue-500 transition-colors" />
                                        </a>
                                        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <FaFacebook className="text-2xl hover:text-blue-700 transition-colors" />
                                        </a>
                                        <a href="https://pinterest.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                            <FaPinterest className="text-2xl hover:text-red-600 transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section with Circular Frame */}
                        <div className="relative w-full max-w-md lg:max-w-none lg:w-1/2">
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src="/contact_photo.png"
                                    alt="Our philosophy"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
