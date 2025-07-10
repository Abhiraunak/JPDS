import ProjectShowCase from "@/components/ProjectShowCase";

export default function Page() {
    return (
        <>
            <div className="flex flex-row gap-20">
                <ProjectShowCase imageUrl={"/landing_image.jpg"} title={"Project title"} />
                
            </div>
        </>
    );
}