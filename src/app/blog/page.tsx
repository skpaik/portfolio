import {getBlogMenu, getFoldersInPath} from "@/libs/BlogUtil";

import HeroBanner from "@/app/_components/HeaderBanner";
import {loadJsonContents} from "@/libs/JsonFileService";

import {BlogContents, BlogMenu} from '@/app/_models/BlogModels';
import PageContents from "@/app/_components/PageContents";
import Paginate from "@/app/_components/ui/Paginate";

import BlogList from "@/app/_components/blog/BlogList";
import SideBar from "@/app/_components/blog/SideBar";

export async function generateStaticParams() {
       const foldersInPath = await getFoldersInPath();

    return foldersInPath.map((page) => ({
        page: page,
        totalPage: foldersInPath.length
    }));
}


export default async function Blog({params: {page, totalPage}}: { params: { page: string, totalPage: string } }) {
    const pageContent: BlogContents = await loadJsonContents("blog/page1/index")
    const blogMenuList:BlogMenu[] = await getBlogMenu("aws");
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
                        <BlogList blogList={pageContent.blogList} currentPage="page1"></BlogList>
                    </div>
                </div>
            </PageContents>
        </>
    )
}