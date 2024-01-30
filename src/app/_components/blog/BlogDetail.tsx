'use client'
import {BlogContentMd} from "@/app/_models/BlogModels";
import BlogDetailInfo from "@/app/_components/blog/BlogDetailInfo";

type Props = {
    blogContent: BlogContentMd,
    currentPage: string,
}

export default function BlogDetail({blogContent, currentPage}: Props) {
    return <article className="rounded-xl bg-white ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="items-start sm:gap-8">
            <div>
                <BlogDetailInfo blogContent={blogContent} currentPage={currentPage}></BlogDetailInfo>
                <div className="mt-4">
                    {blogContent.contents &&
                        <div dangerouslySetInnerHTML={{ __html: blogContent.contents }} />
                    }
                </div>
            </div>
        </div>
    </article>
}
