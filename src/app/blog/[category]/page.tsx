import {
  getBlogContentList,
  getBlogMenu,
  getFoldersInPath,
} from "@/libs/BlogUtil";

import HeroBanner from "@/app/_components/HeaderBanner";
import { loadJsonContents } from "@/libs/JsonFileService";

import { BlogContent, BlogContents, BlogMenu } from "@/app/_models/BlogModels";
import PageContents from "@/app/_components/PageContents";

import BlogList from "@/app/_components/blog/BlogList";
import SideBar from "@/app/_components/blog/SideBar";
import { getBlogContentListMD } from "@/libs/MarkDownFileService";
import BlogListMd from "@/app/_components/blog/BlogListMD";

export async function generateStaticParams() {
  const foldersInPath = await getFoldersInPath();

  const pages: Props[] = foldersInPath.map((page) => ({
    category: page,
    totalPage: foldersInPath.length,
  }));

  return pages;
}

type Props = {
  category: string;
};

export default async function BlogPage({
  params: { category },
}: {
  params: Props;
}) {
  const pageContent: BlogContents = await loadJsonContents(
    "blog/" + category + "/index",
  );
  const blogMenuList: BlogMenu[] = await getBlogMenu(category);
  // const blogContentList: BlogContent[] = await getBlogContentList(category);
  const blogContentListMarkDown2 = await getBlogContentListMD(category);

  return (
    <>
      <HeroBanner
        title={pageContent.pageTitle}
        subtitle={pageContent.pageSubTitle}
      ></HeroBanner>
      <PageContents classNames="text-center">
        <div className="grid gap-2 lg:grid-cols-4">
          <div className="rounded-lg">
            <SideBar sideBarList={blogMenuList}></SideBar>
          </div>
          <div className="rounded-lg lg:col-span-3">
            {/*<BlogList blogList={blogContentList} currentPage="page1"></BlogList>*/}
            <BlogListMd
              blogList={blogContentListMarkDown2}
              category={category}
            ></BlogListMd>
          </div>
        </div>
      </PageContents>
    </>
  );
}
