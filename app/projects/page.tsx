// import ProjectShowCase from "@/components/ProjectCard";
// import Link from "next/link";

import HorizontalGallery from "@/components/Scroll";
const gallerySlides = [
    {
        src: "/advantageRelty/project.jpg",
        caption: "Advantage Realty",
        href: "/advantagereality"
    },
    {
        src: "/agarwal/header.jpg",
        caption: "Aggrawal Residence, Patna",
        href: "/agarwalresidence"
    },
    {
        src: "/alwar/header.jpg",
        caption: "Alwar Residence",
        href: "/alwaresidence"
    },
    {
        src: "/ramgarh/header_image.jpg",
        caption: " Awareness Centre, Ramgarh",
        href: "/awarenesscenter"
    },
    {
        src: "/bitSindhriExtension/header.jpg",
        caption: "BIT Sindri Extension",
        href: "/bitextension"
    },
    {
        src: "/park/header.jpg",
        caption: "Children Park, Khunti",
        href: "/childrenpark"
    },
    {
        src: "/conventionCenter/header.jpg",
        caption: "Convention Centre, Sohna",
        href: "/conventioncenter"
    },
    {
        src: "/ecoresort/header.jpg",
        caption: "Ecoresort, Ranchi",
        href: "/ecoresort"
    },
    {
        src: "/ecoResortPanimur/header.jpg",
        caption: "Eco-Tourism Kiriburu",
        href: "/ecoturismkiriburu"
    },
    {
        src: "/ecoTourismPansua/header.jpg",
        caption: "Eco-Tourism, Pansua",
        href: "/ecoturismpansua"
    },
    {
        src: "/farmhouse/header.jpg",
        caption: "Farmhouse Chattarpur, Delhi",
        href: "/farmhousechatarpur"
    },
    {
        src: "/fogla/header.jpg",
        caption: "Fogla Housing, Ranchi",
        href: "/foglahousing"
    },
    {
        src: "/grouphousing/header.jpg",
        caption: "Group Housing, Bikaner",
        href: "/grouphousing"
    },
    {
        src: "/gurugram/header.jpg",
        caption: "Residence, Gurugram",
        href: "/gurugramresidence"
    },
    {
        src: "/jalan/header.jpg",
        caption: "Jalan Bungalow, Lucknow",
        href: "/jalan"
    },
    {
        src: "/mgmgate/header.jpg",
        caption: "MGM Gate, Jamshedpur",
        href: "/mgmgate"
    },
    {
        src: "/ministerQuarterTerrace/Header.jpg",
        caption: "Minister Quarter Terrace",
        href: "/ministertarace"
    },
    {
        src: "/mittal/header.jpg",
        caption: "Mittal Residence, Faridabad",
        href: "/mitalresidence"
    },
    {
        src: "/naturopathy/header.jpg",
        caption: "Naturopathy Centre, Ranchi",
        href: "/naturopathy"
    },
    {
        src: "/nagpur/header.jpg",
        caption: "Residence, Nagpur",
        href: "/residencenagpur"
    },
    {
        src: "/ecoResortPanimur/header.jpg",
        caption: "Eco-Resort Panimur",
        href: "/resortpanimur"
    },
    {
        src: "/shorenhouse/header.jpg",
        caption: "Shibu Soren Residence, Ranchi",
        href: "/shiburesidence"
    },
    {
        src: "/springrand/header.jpg",
        caption: "Spring Grand, Lucknow",
        href: "/springgrand"
    },
    {
        src: "/vanki/header.jpg",
        caption: "Vaniki, Munger",
        href: "/vankimunger"
    },
    {
        src: "/vidhansabha/header.jpg",
        caption: "Vidhan Sabha Gate, Ranchi",
        href: "/vidhansbhagate"
    },
    {
        src: "/villa/header.jpg",
        caption: "Villa, Rudrapur",
        href: "/villarudrapur"
    },
    {
        src: "/waysideAmenties/header.jpg",
        caption: "Wayside Amenities",
        href: "/waysideamenties"
    }

];


export default function Page() {
    return (
        <>
            <div className="w-full  text-black">
                <div className="relative lg:hidden mt-5">
                    <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl tracking-widest text-right select-none text-black/10 lg:text-black/5">
                        PROJECT
                    </h2>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide select-none absolute top-0 right-0">
                        PROJECT
                    </h3>
                </div>

                <div className="flex items-center justify-center mt-[12rem] md:mt-20 lg:mt-0">
                    <HorizontalGallery slides={gallerySlides} />
                </div>
            </div>
        </>
    );
}
