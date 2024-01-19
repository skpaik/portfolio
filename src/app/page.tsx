import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";
import Image from "next/image";
import Link from "next/link";
import {HomeContents} from "@/app/_models/ContentsModel";

export default async function Home() {
    const pageContent: HomeContents = await loadJsonContents("home")

    return (
        <>
            <HeroBanner title={pageContent.pageTitle}>

            </HeroBanner>
            <PageContents classNames="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            {pageContent.devFullName}
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            {pageContent.pageSubTitle}
                        </p>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            {pageContent.titleDetail}
                        </p>
                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            {pageContent.studyInfo}
                        </p>
                        <div className="mt-4 md:mt-8">
                            <Link
                                href={"/contact"}
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Hire
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    width={100}
                    height={100}
                    alt="Violin"
                    src="https://avatars.githubusercontent.com/u/620762?s=400&u=353021b6974bb9baf267dc10ed116016d77ca618"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </PageContents>

            <PageContents classNames="mt-12">
                <span className="relative flex justify-center">
                   <div
                       className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75">
                   </div>
                    <span
                        className="relative z-10 bg-white px-6 text-2xl font-extrabold text-gray-900 sm:text-3xl">{pageContent.techStackTitle}</span>
                </span>
                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mt-6">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        {
                            pageContent.techStacks.map((item, index) => {
                                return <div
                                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                    key={index}>
                                    <dt className="font-medium text-gray-900">{item.label}</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{item.tech}</dd>
                                </div>
                            })
                        }
                    </dl>
                </div>
            </PageContents>
        </>
    )
}
