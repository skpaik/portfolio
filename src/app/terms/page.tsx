import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";
import { TermsContents} from "@/app/_models/ContentsModel";
export default async function Terms() {
    const pageContent: TermsContents = await loadJsonContents("terms")

    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.intro}>
            </HeroBanner>
            <PageContents classNames="">
                <ul className="space-y-8">
                    {pageContent.contents.map((para, index) => {
                        return <li key={index}>
                            {para}
                        </li>
                    })}
                </ul>
            </PageContents>
        </>
    )
}