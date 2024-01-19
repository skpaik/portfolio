// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {getAllUrlInAllFoldersInPath} from "@/libs/BlogUtil";
import {BlogContent} from "@/app/_models/BlogModels";
import {loadJsonContents} from "@/libs/JsonFileService";

export async function generateStaticParams() {
    const blogContents = await getAllUrlInAllFoldersInPath();

    const urls: Props[] = blogContents.map((blogContent: BlogContent) => ({
        url: blogContent.url,
        page: blogContent.page,
        slug: blogContent.slug
    }));

    return urls;
}

type Props = {
    page: string,
    slug: string
}

export default async function BlogSlug({params}: { params: Props }) {
    const {page, slug} = params
    const blogContent: BlogContent = await loadJsonContents("/blog/" + page + "/" + slug)
    console.log(blogContent)

    return (
        <>
            <HeroBanner title={page} subtitle={page}>
                Blogs Page Slug {page}
            </HeroBanner>
        </>
    )
}