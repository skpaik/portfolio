import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import SideBar from "@/app/_components/blog/SideBar";
import BlogListMd from "@/app/_components/blog/BlogListMD";

import { BlogListModel } from "@/app/_models/BlogModels";
import { getFoldersInPath, loadBlogList } from "@/libs/BlogUtil";

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
  const blogList: BlogListModel = await loadBlogList(category);

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
