import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {BlogContentMd} from "@/app/_models/BlogModels";
import {remarkContent} from "@/libs/remarking";
import {loadContents} from "@/libs/JsonFileService";

function getDirPath(category: string) {
    const mdDirectory = path.join(
        process.cwd(),
        `/src/json_data/blog/${category}`,
    );
    return mdDirectory;
}

export async function getBlogContentMd(category: string, slug: string) {
    const mdDirectory = getDirPath(category);

    //const slug = slug.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //log_con("fileContents", fileContents)

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = await remarkContent(matterResult.content);

    //log_con("matterResult", contentHtml)

    const endUrl = "/blog/" + category + "/" + slug;

    const blogContent: BlogContentMd = {
        slug: endUrl,
        category: category,
        contents: contentHtml,
        ...matterResult.data,
    };

    return blogContent;
}

function getEachBlogContentMd(fileName: string, category: string) {
    const mdDirectory = getDirPath(category);

    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const endUrl = "/blog/" + category + "/" + slug;

    const blogContent: BlogContentMd = {
        url: endUrl,
        slug: slug,
        category: category,
        ...matterResult.data,
    };

    return blogContent;
}

export async function getBlogContentListMD(
    currentCategory: string,
): Promise<BlogContentMd[]> {
    const mdDirectory = getDirPath(currentCategory);
    try {
        const fileNames = fs.readdirSync(mdDirectory);

        let allPostsData: BlogContentMd[] = fileNames.map((fileName) => {
            return getEachBlogContentMd(fileName, currentCategory);
        });

        allPostsData = allPostsData?.filter((x) => !x.slug.endsWith(".json"));

        return allPostsData;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getMdContent(file_name: string) {
    const mdDirectory = path.join(process.cwd(), `/src/json_data/`);

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, `${file_name}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = await remarkContent(matterResult.content);

    return {
        contentHtml,
        ...matterResult.data,
    };
}

export async function loadPageContentMd(file: string) {
    const globalContents = await loadContents("global");

    const fileContents = await getMdContent(file);

    const obj1 = JSON.parse(globalContents);

    return {...obj1, ...fileContents};
}
