export interface BlogContents {
    pageTitle: string
    pageSubTitle: string
    currentPage: LinkPage
    previousPage: LinkPage
    nextPage: LinkPage
    blogList: [BlogContent]
}

export interface BlogContent {
    label: string,
    url: string
    dateTime: string
    contents: [string]
    tags: [string]
}
export interface BlogMenu {
    label: string,
    url: string
    count: number
    isActive: boolean
}
export interface LinkPage {
    linkText: string,
    url: string
}