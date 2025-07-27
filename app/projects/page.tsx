import ProjectLayout from "@/components/Projectlayout";
import Head from "next/head";


export default function Page() {
    return (
        <>
            <Head>
                <title>JPDS</title>
                <meta name="description" content="Explore all our featured projects including designs, architecture, and renovation solutions by JPDS." />
                <meta name="keywords" content="architecture projects, interior design, home renovation" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Projects | JPDS" />
                <meta property="og:description" content="Explore all our featured projects including designs, architecture, and renovation solutions by our expert team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jpds.in/projects" />
                <meta property="og:image" content="https://www.jpds.in/" />
            </Head>
            <ProjectLayout />
        </>
    )
}