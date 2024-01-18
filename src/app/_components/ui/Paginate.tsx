'use client'
import Link from "next/link";
import {LinkPage} from "@/app/_models/BlogModels";

interface BlockContents {
    pageTitle: string
    pageSubTitle: string
    betweenText: string
    skillsText: string
    linkText: string
}

interface LinkBlockContents {
    company: string,
    company_url: string
    company_logo_url?: string
    designation: string
    description?: string
    start_date: string
    end_date: string
    location: string
    skills: [string]
}

type Props = {
    previousPage: LinkPage,
    nextPage: LinkPage,
    currentPage?: string,
    totalPage?: string,
    baseUrl?: string
}

export default function Paginate({previousPage, nextPage, currentPage, totalPage, baseUrl}: Props) {
    let base_url = baseUrl;

    if (base_url == undefined) {
        baseUrl = "/blog/"
    }

    return <>
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
            <Link
                href={baseUrl + previousPage.url}
                className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                 {previousPage.linkText}
            </Link>
            <Link
                href={baseUrl + nextPage.url}
                className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
               {nextPage.linkText}
            </Link>
        </span>
    </>
}
