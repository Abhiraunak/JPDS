import ProjectLayout from "@/components/Projectlayout";
import Head from "next/head";

export default function Page() {
    // This structured data helps Google understand your site's hierarchy
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JPDS",
        "url": "https://www.jpds.in/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.jpds.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <Head>
                <title>Projects | JPDS</title>
                <meta name="description" content="Explore all our featured projects including designs, architecture, and renovation solutions by JPDS." />
                <meta name="keywords" content="architecture projects, interior design, home renovation" />
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Projects | JPDS" />
                <meta property="og:description" content="Explore all our featured projects including designs, architecture, and renovation solutions by our expert team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jpds.in/projects" />
                <meta property="og:image" content="https://www.jpds.in/JPDS.png" /> 

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <ProjectLayout />
        </>
    );
}