import {getFoldersInPath} from "@/libs/BlogUtil";

import HeroBanner from "@/app/_components/HeaderBanner";
import {loadJsonContents} from "@/libs/JsonFileService";

import {BlogContents} from '@/app/_models/BlogModels';
import PageContents from "@/app/_components/PageContents";
import Paginate from "@/app/_components/ui/Paginate";

import BlogList from "@/app/_components/blog/BlogList";

export async function generateStaticParams() {
    const targetPath = './src/json_data/blog';

    const foldersInPath = await getFoldersInPath(targetPath);

    return foldersInPath.map((page) => ({
        page: page,
        totalPage: foldersInPath.length,
    }));
}


export default async function BlogPage({params: {page, totalPage}}: { params: { page: string, totalPage: string } }) {
    const pageContent: BlogContents = await loadJsonContents("blog/" + page + "/index")
    console.log(pageContent)
    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>
            </HeroBanner>
            <PageContents classNames="">
                <BlogList blogList={pageContent.blogList} currentPage={page}></BlogList>
            </PageContents>
            <PageContents classNames="text-center">
                <Paginate previousPage={pageContent.previousPage} nextPage={pageContent.nextPage} currentPage={page}
                          totalPage={totalPage}></Paginate>
            </PageContents>
        </>
    )
}