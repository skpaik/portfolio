import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";
import Link from "next/link";
import Image from "next/image";

interface ProjectsContents {
    pageTitle: string
    pageSubTitle: string
    projectList: [
        {
            label: string,
            url: string
            target?: string
            description: string
            workType: string
        }
    ]
}

export default async function Home() {
    const pageContent: ProjectsContents = await loadJsonContents("projects")
    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>

            </HeroBanner>
            <PageContents classNames="">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:gap-x-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {
                                pageContent.projectList.map((item, index) => {
                                    return <>
                                        <Link
                                            key={index}
                                            target={item.target ? item.target : "_blank"}
                                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                            href={`https://${item.url}`}
                                        >
                                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <h2 className="mt-2 font-bold">{item.label}</h2>
                                            <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                                {item.description}
                                            </p>
                                        </Link>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>

            </PageContents>
            <PageContents classNames="">
                <div className="flow-root  py-3  mt-6">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        {
                            pageContent.projectList.map((item, index) => {
                                return <>
                                    <Link
                                        key={index}
                                        target={item.target ? item.target : "_blank"}
                                        className="my-4 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                        href={`https://${item.url}`}
                                    >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                                        <div className="sm:flex sm:justify-between sm:gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                    {item.description}
                                                </h3>

                                                <p className="mt-1 text-xs font-medium text-gray-600">By Sudipta Kumar Paik</p>
                                            </div>

                                            <div className="hidden sm:block sm:shrink-0">
                                                <Image
                                                    width={80}
                                                    height={80}
                                                    alt="Paul Clapton"
                                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <p className="max-w-[40ch] text-sm text-gray-500">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                                                provident a, ipsa
                                                maiores deleniti consectetur nobis et eaque.
                                            </p>
                                        </div>

                                        <dl className="mt-6 flex gap-4 sm:gap-6">
                                            <div className="flex flex-col-reverse">
                                                <dt className="text-sm font-medium text-gray-600">Published</dt>
                                                <dd className="text-xs text-gray-500">31st June, 2021</dd>
                                            </div>

                                            <div className="flex flex-col-reverse">
                                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                                <dd className="text-xs text-gray-500">3 minute</dd>
                                            </div>
                                        </dl>
                                    </Link>
                                </>
                            })
                        }
                    </dl>
                </div>
            </PageContents>

        </>
    )
}
