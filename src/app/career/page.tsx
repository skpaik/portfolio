import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";
import LinkBlock from "@/app/_components/ui/LinkBlock";

interface ProjectsContents {
    pageTitle: string
    pageSubTitle: string
    betweenText: string
    skillsText: string
    linkText: string
    workList: [{
        company: string,
        company_url: string
        company_logo_url?: string
        designation: string
        description?: string
        start_date: string
        end_date: string
        location: string
        skills: [string]
    }]
}

export default async function Home() {
    const pageContent: ProjectsContents = await loadJsonContents("career")
    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>

            </HeroBanner>
            <PageContents classNames="">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:gap-x-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {
                                pageContent.workList.map((item, index) => {
                                    return <LinkBlock key={index} linkBlock={item}
                                                      pageContent={pageContent}></LinkBlock>
                                })
                            }
                        </div>
                    </div>
                </div>
            </PageContents>
        </>
    )
}
