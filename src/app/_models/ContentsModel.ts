export interface LayoutContent {
    devFullName: string
    header: HeaderContent
    footer: FooterContent
}
export interface HeaderContent {
    topMenuLinks: [
        {
            title: string
            href: string
            external: boolean
        }
    ]
}

export interface FooterContent {
    footNote: string
    footerLinks: [
        {
            title: string
            url: string
            external: boolean
            target: string
        }
    ]
    socialLinks: [
        {
            title: string
            url: string
            external: boolean
        }
    ]
}

export interface HomeContents {
    devFullName: string
    pageTitle: string
    pageSubTitle: string
    titleDetail: string
    techStackTitle: string
    techStacks: [
        {
            label: string,
            tech: string
        }
    ]
    studyInfo: string
}

export interface CareerContents {
    pageTitle: string
    pageSubTitle: string
    betweenText: string
    skillsText: string
    linkText: string
    workList: CompanyIWork []
}

export interface ProjectsContents {
    pageTitle: string
    pageSubTitle: string
    techStackTitle: string
    linkText: string
    projectList: ProjectIWork[]
}


export interface ProjectIWork {
    label: string,
    url: string
    target?: string
    description: string
    techStack: [string]
    workType: string
}

export interface CompanyIWork {
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

export interface AboutContents {
    intro: string
    contents: [string]
}
