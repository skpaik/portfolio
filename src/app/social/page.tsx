import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";
import { loadJsonContents } from "@/libs/JsonFileService";
import { SocialContent } from "@/app/_models/ContentsModel";
import SocialCard from "@/app/_components/social/SocialCard";
import Image from "next/image";

export default async function About() {
  const pageContent: SocialContent = await loadJsonContents("social");

  return (
    <>
      <HeroBanner
        title={pageContent.pageTitle}
        subtitle={pageContent.intro}
      ></HeroBanner>
      <PageContents classNames="">
        <article className="rounded-xl border border-gray-700  p-4">
          <div className="flex items-center gap-4">
            <Image
              alt="Developer"
              height={100}
              width={100}
              src={pageContent.devAvatarURL}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium">{pageContent.devFullName}</h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  {pageContent.items.map(
                    (socialContentItem, socialContentItem_index) => {
                      return (
                        <li
                          key={socialContentItem_index}
                          className="p-1 leading-none"
                        >
                          <a
                            href={socialContentItem.url}
                            target="_blank"
                            className="text-xs font-medium"
                          >
                            {socialContentItem.title}
                          </a>
                        </li>
                      );
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2 grid lg:grid-cols-2 gap-8 sm:grid-cols-1">
            {pageContent.items.map(
              (socialContentItem, socialContentItem_index) => {
                return (
                  <SocialCard
                    key={socialContentItem_index}
                    socialContentItem={socialContentItem}
                    itemHeaders={pageContent.itemHeaders}
                  ></SocialCard>
                );
              },
            )}
          </div>
        </article>
      </PageContents>
    </>
  );
}
