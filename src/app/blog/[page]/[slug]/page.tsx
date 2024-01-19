// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {getAllUrlInAllFoldersInPath} from "@/libs/BlogUtil";
import {BlogContent} from "@/app/_models/BlogModels";

export async function generateStaticParams() {
    const blogContents = await getAllUrlInAllFoldersInPath();

    const urls: Props[] = blogContents.map((blogContent: BlogContent) => ({
        slug: blogContent.url,
        totalPage: blogContents.length,
    }));

    console.log("generateStaticParams urls:")
    console.log(urls)
    return urls;
}

type Props = {
    slug: string,
    totalPage: number,
}
export default function BlogSlug({params: {slug, totalPage}}: { params: Props }) {
    console.log("totalPage:" + totalPage)
    console.log("slug:" + slug)
    return (
        <>
            <HeroBanner title={slug} subtitle={slug}>
                Blogs Page Slug {slug}
            </HeroBanner>
        </>
    )
}