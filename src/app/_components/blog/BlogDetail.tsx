"use client";
import { BlogContentMd } from "@/app/_models/BlogModels";
import { GlobalContent } from "@/app/_models/ContentsModel";
import BlogDetailInfo from "@/app/_components/blog/BlogDetailInfo";

type Props = {
  blogContent: BlogContentMd;
  globalContent: GlobalContent;
  currentPage: string;
};

export default function BlogDetail({
  blogContent,
  globalContent,
  currentPage,
}: Props) {
  return (
    <article className="rounded-xl bg-white ring ring-indigo-50 sm:p-6 lg:p-8">
      <div className=" sm:gap-8">
        <BlogDetailInfo
          blogContent={blogContent}
          globalContent={globalContent}
          currentPage={currentPage}
        ></BlogDetailInfo>
        <div className="prose mt-4">
          {blogContent.contentHtml && (
            <div
              dangerouslySetInnerHTML={{ __html: blogContent.contentHtml }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
