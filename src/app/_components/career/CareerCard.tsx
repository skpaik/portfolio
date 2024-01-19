'use client'
import {toDateFormat} from "@/libs/Utils";
import Badge from "@/app/_components/ui/Badge";
import Link from "next/link";
import {CareerContents, CompanyIWork} from "@/app/_models/ContentsModel";

type Props = {
    companyInfo: CompanyIWork,
    pageContent: CareerContents,
}

export default function CareerCard({companyInfo, pageContent}: Props) {
    return <Link
        href={"https://" + companyInfo.company_url} target="_blank"
        className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        <div
            className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-10 w-10 sm:h-12 sm:w-12"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">{companyInfo.designation} @ {companyInfo.company}</h2>
                <p className="mt-4 text-sm sm:text-base">
                    {toDateFormat(companyInfo.start_date)} {pageContent.betweenText} {toDateFormat(companyInfo.end_date)}
                </p>
                <p className="mt-4 text-sm sm:text-base">
                    {companyInfo.location}
                </p>
            </div>
            <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">{pageContent.skillsText}</h3>

                <p className="mt-4 text-sm sm:text-base">
                    {companyInfo.skills?.map((skil, skill_index) => {
                        return <Badge title={skil} key={skill_index}/>
                    })}
                </p>

                <p className="mt-4 text-sm sm:text-base">
                    {companyInfo.description}
                </p>

                <Link href={"https://www." + companyInfo.company_url} target="_blank">
                    <p className="mt-8 font-bold">{pageContent.linkText}</p>
                </Link>
            </div>
        </div>
    </Link>
}
