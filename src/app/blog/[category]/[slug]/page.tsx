// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {
  getAllUrlInAllFoldersInPathMd,
  getBlogMenu,
  loadBlogContent,
} from "@/libs/BlogUtil";
import { BlogContent, BlogContentMd, BlogMenu } from "@/app/_models/BlogModels";
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

export default async function BlogSlug({ params }: { params: Props }) {
  const { category, slug } = params;

  const blogMenuList: BlogMenu[] = await getBlogMenu(category);
  // const blogContent: BlogContent = await loadJsonContents("/blog/" + page + "/" + slug)
  const blogContent: BlogContentMd = await loadBlogContent(category, slug);

  return (
    <>
      <HeroBanner
        title={blogContent.title}
        subtitle={blogContent.intro}
      ></HeroBanner>
      <PageContents classNames="">
        <div className="grid gap-2 lg:grid-cols-4">
          <div className="rounded-lg">
            <SideBar sideBarList={blogMenuList}></SideBar>
          </div>
          <div className="rounded-lg lg:col-span-3">
            <BlogDetail
              blogContent={blogContent}
              currentPage="page1"
            ></BlogDetail>
          </div>
        </div>
      </PageContents>
    </>
  );
}
