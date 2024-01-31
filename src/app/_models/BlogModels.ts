import { BaseStaticContent, GlobalContent } from "@/app/_models/ContentsModel";

export interface BlogStaticContent extends BaseStaticContent {}

export interface BlogContentMd {
  title?: string;
  intro?: string;
  url?: string;
  category: string;
  slug: string;
  dateTime?: string;
  contents?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  contentHtml?: string;
  tags?: [string];
}

export interface BlogMenu {
  label: string;
  url: string;
  count: number;
  isActive: boolean;
}

export interface BlogDetailModel {
  blogContent: BlogContentMd;
  globalContent: GlobalContent;
  blogMenuList: BlogMenu[];
}

export interface BlogListModel {
  blogContentList: BlogContentMd[];
  blogStaticContent: BlogStaticContent;
  blogMenuList: BlogMenu[];
}
