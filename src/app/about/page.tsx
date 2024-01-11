import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";

interface AboutContents{
    contents: string
}

export default async function About() {
    const pageContent: AboutContents = await loadJsonContents("about")

    return (
        <>
            <HeroBanner title="About UI"
                        subtitle="Free Open Source Tailwind CSS Components">
                HyperUI is a collection of free Tailwind CSS components that can be used in your next
                project. With a range of components, you can build your next marketing website, admin
                dashboard, eCommerce store and much more.
            </HeroBanner>
            <PageContents classNames="">
                <ul className="space-y-8">
                    {pageContent.contents}
                </ul>
            </PageContents>
        </>
    )
}