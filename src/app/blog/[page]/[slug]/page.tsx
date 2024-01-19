// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {getAllUrlInAllFoldersInPath, getBlogMenu} from "@/libs/BlogUtil";
import {BlogContent, BlogMenu} from "@/app/_models/BlogModels";
import {loadJsonContents} from "@/libs/JsonFileService";
import PageContents from "@/app/_components/PageContents";
import SideBar from "@/app/_components/blog/SideBar";
import BlogDetail from "@/app/_components/blog/BlogDetail";

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
    const blogMenuList: BlogMenu[] = await getBlogMenu(page);
    const blogContent: BlogContent = await loadJsonContents("/blog/" + page + "/" + slug)
    console.log(blogContent)
    return (
        <>
            <HeroBanner title={blogContent.title} subtitle={blogContent.intro}>
            </HeroBanner>
            <PageContents classNames="text-center">
                <div className="grid gap-2 lg:grid-cols-4">
                    <div className="rounded-lg">
                        <SideBar sideBarList={blogMenuList}></SideBar>
                    </div>
                    <div className="rounded-lg lg:col-span-3">
                        <BlogDetail blogContent={blogContent} currentPage="page1"></BlogDetail>
                    </div>
                </div>
            </PageContents>
        </>
    )
}