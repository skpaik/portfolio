import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";

interface AboutContents {
    intro: string
    para: [string]
}

export default async function About() {
    const pageContent: AboutContents = await loadJsonContents("about")

    return (
        <>
            <HeroBanner title="About" subtitle={pageContent.intro}>
            </HeroBanner>
            <PageContents classNames="">
                <ul className="space-y-8">
                    {pageContent.para.map((para, index) => {
                        return <li key={index}>
                            {para}
                        </li>
                    })}
                </ul>
            </PageContents>
        </>
    )
}