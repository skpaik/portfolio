// Generate segments for both [category] and [product]
import HeroBanner from "@/app/_components/HeaderBanner";
import {getAllUrlInAllFoldersInPath, getBlogMenu} from "@/libs/BlogUtil";
import {BlogContent, BlogMenu} from "@/app/_models/BlogModels";
import {loadJsonContents} from "@/libs/JsonFileService";
import PageContents from "@/app/_components/PageContents";
import SideBar from "@/app/_components/blog/SideBar";
import BlogList from "@/app/_components/blog/BlogList";
import BlogDetail from "@/app/_components/blog/BlogDetail";

export async function generateStaticParams() {
    const blogContents = await getAllUrlInAllFoldersInPath();

    const urls: Props[] = blogContents.map((blogContent: BlogContent) => ({
        url: blogContent.url,
        page: blogContent.page,
        slug: blogContent.slug
    }));

    return urls;
}

type Props = {
    page: string,
    slug: string
}

export default async function BlogSlug({params}: { params: Props }) {
    const {page, slug} = params
    const blogMenuList: BlogMenu[] = await getBlogMenu(page);
    const blogContent: BlogContent = await loadJsonContents("/blog/" + page + "/" + slug)
    console.log(blogContent)
    return (
        <>
            <HeroBanner title={page} subtitle={page}>
                Blogs Page Slug {page}
            </HeroBanner>
            <PageContents classNames="text-center">
                <div className="grid gap-2 lg:grid-cols-4">
                    <div className="rounded-lg">
                        <SideBar sideBarList={blogMenuList}></SideBar>
                    </div>
                    <div className="rounded-lg lg:col-span-3">
                        <BlogDetail blogContent={blogContent} currentPage="page1"></BlogDetail>
                    </div>
                </div>
            </PageContents>
            <PageContents classNames="">
                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                    <div className="flex items-start sm:gap-8">
                        <div
                            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-1">
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            </div>
                        </div>

                        <div>
                            <strong
                                className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Episode #101
                            </strong>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                <a href="" className="hover:underline"> {blogContent.title} </a>
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">
                                {blogContent.intro}
                            </p>

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
                        </div>
                    </div>
                </article>
            </PageContents>
        </>
    )
}