import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import BlogListMd from "@/app/_components/blog/BlogListMD";
import SideBar from "@/app/_components/blog/SideBar";
import {loadBlogList} from "@/libs/BlogUtil";
import {BlogListModel} from "@/app/_models/BlogModels";

export default async function Blog() {
    const category = "aws";

    const blogList: BlogListModel = await loadBlogList(category)

    return (
        <>
            <HeroBanner
                title={blogList.blogStaticContent.pageTitle}
                subtitle={blogList.blogStaticContent.pageSubTitle}
            ></HeroBanner>
            <PageContents classNames="text-center">
                <div className="grid gap-2 lg:grid-cols-4">
                    <div className="rounded-lg">
                        <SideBar sideBarList={blogList.blogMenuList}></SideBar>
                    </div>
                    <div className="rounded-lg lg:col-span-3">
                        <BlogListMd
                            blogList={blogList.blogContentList}
                            category={category}
                        ></BlogListMd>
                    </div>
                </div>
            </PageContents>
        </>
    );
}
