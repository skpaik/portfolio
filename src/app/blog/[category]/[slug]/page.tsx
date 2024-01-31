// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {getAllUrlInAllFoldersInPathMd, loadBlogDetails} from "@/libs/BlogUtil";
import {BlogContentMd, BlogDetailModel} from "@/app/_models/BlogModels";
import PageContents from "@/app/_components/PageContents";
import SideBar from "@/app/_components/blog/SideBar";
import BlogDetail from "@/app/_components/blog/BlogDetail";

export async function generateStaticParams() {
    const blogContentsMd = await getAllUrlInAllFoldersInPathMd();

    const urlsMd: Props[] = blogContentsMd.map((blogContent: BlogContentMd) => ({
        category: blogContent.category,
        slug: blogContent.slug,
    }));

    return urlsMd;
}

type Props = {
    category: string;
    slug: string;
};

export default async function BlogSlug({params}: { params: Props }) {
    const {category, slug} = params;

    const blogDetail: BlogDetailModel = await loadBlogDetails(category, slug);

    return (
        <>
            <HeroBanner
                title={blogDetail.blogContent.title}
                subtitle={blogDetail.blogContent.intro}
            ></HeroBanner>
            <PageContents classNames="">
                <div className="grid gap-2 lg:grid-cols-4">
                    <div className="rounded-lg">
                        <SideBar sideBarList={blogDetail.blogMenuList}></SideBar>
                    </div>
                    <div className="rounded-lg lg:col-span-3">
                        <BlogDetail
                            blogContent={blogDetail.blogContent}
                            globalContent={blogDetail.globalContent}
                            currentPage={category}
                        ></BlogDetail>
                    </div>
                </div>
            </PageContents>
        </>
    );
}
