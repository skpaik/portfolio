'use client'
import {toDateFormat} from "@/libs/Utils";
import {BlogContent} from "@/app/_models/BlogModels";

type Props = {
    blogContent: BlogContent,
    currentPage: string,
}

export default function BlogDetail({blogContent, currentPage}: Props) {
    return <div className="max-w">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center">
            <div       className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"            >
                <span                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {blogContent.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">By Sudipta K Paik</p>
                    </div>
                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    {blogContent.contents.map((para: string, index) => {
                        return <p key={index} className="max-w-[40ch] text-sm text-gray-500 py-2">
                            {para}
                        </p>
                    })}
                </div>
                <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">{toDateFormat(blogContent.dateTime)}</dd>
                    </div>

                    {/*<div className="flex flex-col-reverse">*/}
                    {/*    <dt className="text-sm font-medium text-gray-600">Reading time</dt>*/}
                    {/*    <dd className="text-xs text-gray-500">3 minute</dd>*/}
                    {/*</div>*/}
                </dl>
            </div>
        </div>
    </div>
}
