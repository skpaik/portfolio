import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import {StaticContent} from "@/app/_models/ContentsModel";
import {loadPageContentMd} from "@/libs/MarkDownFileService";
import {log_con, toDateFormat} from "@/libs/Utils";

type Props = {
    pageName: string;
};

export default async function StaticPage({pageName}: Props) {
    const pageContent: StaticContent = await loadPageContentMd(pageName);
    log_con("pageContent TermsContent", JSON.stringify(pageContent))

    return (
        <>
            <HeroBanner
                title={pageContent.pageTitle}
                subtitle={pageContent.pageSubTitle}
            ></HeroBanner>
            <PageContents classNames="">
                <>
                    {pageContent.contentHtml && (<div dangerouslySetInnerHTML={{__html: pageContent.contentHtml}}/>)}
                    <br/>
                    <p>
                        <strong>Last update:</strong> {await toDateFormat(pageContent.lastUpdated.toString())}
                    </p>
                </>
            </PageContents>
        </>
    );
}
