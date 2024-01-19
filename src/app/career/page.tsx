import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {loadJsonContents} from "@/libs/JsonFileService";

import {CareerContents} from "@/app/_models/ContentsModel";
import CareerCard from "@/app/_components/career/CareerCard";

export default async function Career() {
    const pageContent: CareerContents = await loadJsonContents("career")
    return (
        <>
            <HeroBanner title={pageContent.pageTitle} subtitle={pageContent.pageSubTitle}>

            </HeroBanner>
            <PageContents classNames="">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:gap-x-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {
                                pageContent.workList.map((item, index) => {
                                    return <CareerCard key={index} companyInfo={item}
                                                      pageContent={pageContent}></CareerCard>
                                })
                            }
                        </div>
                    </div>
                </div>
            </PageContents>
        </>
    )
}
