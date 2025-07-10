import ProjectShowCase from "@/components/ProjectShowCase";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="flex flex-row items-center pl-[20rem] gap-20">
                <Link href={"/advantagereality"}>
                    <ProjectShowCase imageUrl={"/advantageRelty/project.jpg"} title={"Advantage Realty"} />
                </Link>

            </div>
        </>
    );
}