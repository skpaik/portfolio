import HeroBanner from "@/app/_components/HeaderBanner";
import { loadJsonContents } from "@/libs/JsonFileService";
import PageContents from "@/app/_components/PageContents";
import { ContactContent } from "@/app/_models/ContentsModel";
import ContactCard from "@/app/_components/contact/ContactCard";

export default async function Contact() {
  const pageContent: ContactContent = await loadJsonContents("contact");

  return (
    <>
      <HeroBanner
        title={pageContent.pageTitle}
        subtitle={pageContent.pageSubTitle}
      ></HeroBanner>
      <PageContents classNames="text-center">
        <ContactCard pageContent={pageContent}></ContactCard>
      </PageContents>
    </>
  );
}
