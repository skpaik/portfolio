"use client";
import {GlobalContent} from "@/app/_models/ContentsModel";
import {toDateFormat} from "@/libs/Utils";
import {BlogContentMd} from "@/app/_models/BlogModels";

type Props = {
    blogContent: BlogContentMd;
    globalContent: GlobalContent;
    currentPage: string;
};

export default function BlogDetailInfo({blogContent, globalContent, currentPage}: Props) {
    return (
        <>
            <div className="sm:flex sm:items-center sm:gap-2 mb-6">
                {blogContent.dateTime && (
                    <p className="text-gray-600">Published on {toDateFormat(blogContent.dateTime)}</p>
                )}

                {globalContent && (
                   <>
                       <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                       <p className="text-xs">by</p>
                       <p className="text-xs font-medium">{globalContent.devFullName}</p>
                   </>
                )}

                {blogContent.readingTime && (
                    <div className="flex items-center gap-1 text-gray-500">
                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                        <p className="text-xs font-medium">{blogContent.readingTime?.words} words</p>
                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <p className="text-xs font-medium">{blogContent.readingTime?.text}</p>
                    </div>
                )}
            </div>
        </>
    );
}
