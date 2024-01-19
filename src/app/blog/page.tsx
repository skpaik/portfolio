import {getBlogContentList, getBlogMenu} from "@/libs/BlogUtil";

import HeroBanner from "@/app/_components/HeaderBanner";
import {loadJsonContents} from "@/libs/JsonFileService";

import {BlogContent, BlogContents, BlogMenu} from '@/app/_models/BlogModels';
import PageContents from "@/app/_components/PageContents";

import BlogList from "@/app/_components/blog/BlogList";
import SideBar from "@/app/_components/blog/SideBar";


export default async function Blog() {
    const page = "aws"
    const pageContent: BlogContents = await loadJsonContents("blog/" + page + "/index")
    const blogMenuList: BlogMenu[] = await getBlogMenu(page);
    const blogContentList: BlogContent[] = await getBlogContentList(page);

    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>
            </HeroBanner>
            <PageContents classNames="text-center">
                <div className="grid gap-2 lg:grid-cols-4">
                    <div className="rounded-lg">
                        <SideBar sideBarList={blogMenuList}></SideBar>
                    </div>
                    <div className="rounded-lg lg:col-span-3">
                        <BlogList blogList={blogContentList} currentPage="page1"></BlogList>
                    </div>
                </div>
            </PageContents>
        </>
    )
}