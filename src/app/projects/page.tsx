import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";
import {ProjectsContents} from "@/app/_models/ContentsModel";
import ProjectCard from "@/app/_components/project/ProjectCard";

export default async function Projects() {
    const pageContent: ProjectsContents = await loadJsonContents("projects")
    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>

            </HeroBanner>
            <PageContents classNames="">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:gap-x-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {pageContent.projectList.map((project, index) => {
                                return <ProjectCard key={index} projectInfo={project}
                                                    pageContent={pageContent}></ProjectCard>
                            })
                            }
                        </div>
                    </div>
                </div>
            </PageContents>
        </>
    )
}
