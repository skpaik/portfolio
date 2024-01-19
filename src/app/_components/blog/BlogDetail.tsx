'use client'
import {BlogContent} from "@/app/_models/BlogModels";

type Props = {
    blogContent: BlogContent,
    currentPage: string,
}

export default function BlogDetail({blogContent, currentPage}: Props) {
    return <article className="rounded-xl bg-white ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
            <div>
                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>

                        <p className="text-xs font-medium">48:32 minutes</p>
                    </div>
                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                        Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                        <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                        <a href="#" className="underline hover:text-gray-700">August</a>
                    </p>
                </div>
                <div className="mt-4">
                    {blogContent.contents.map((para: string, index) => {
                        return <p key={index} className="text-sm text-gray-500 py-2">
                            {para}
                        </p>
                    })}
                </div>
            </div>
        </div>
    </article>
}
