import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


import {BlogContentMd} from "@/app/_models/BlogModels";
import {log_con} from "@/libs/Utils";
import {remarkContent} from "@/libs/remarking";


const postsDirectory = path.join(process.cwd(), '/src/json_data/blog/mrkdown');

function getDirPath(category: string) {
    const mdDirectory = path.join(process.cwd(), `/src/json_data/blog/${category}`);
    return mdDirectory;
}

export async function getBlogContentMd(category: string, slug: string,) {
    const mdDirectory = getDirPath(category);

    //const slug = slug.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    log_con("fileContents", fileContents)


    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = await remarkContent(matterResult.content)

    log_con("matterResult", contentHtml)

    const endUrl = "/blog/" + category + "/" + slug;

    const blogContent: BlogContentMd = {
        slug: endUrl,
        category: category,
        contents: contentHtml,
        ...matterResult.data,
    }

    return blogContent;
}

function getEachBlogContentMd(fileName: string, category: string) {
    const mdDirectory = getDirPath(category);

    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const endUrl = "/blog/" + category + "/" + slug;

    const blogContent: BlogContentMd = {
        url: endUrl,
        slug: slug,
        category: category,
        ...matterResult.data,
    }

    return blogContent;
}


export async function getBlogContentListMD(currentCategory: string): Promise<BlogContentMd[]> {
    const mdDirectory = getDirPath(currentCategory);
    try {
        const fileNames = fs.readdirSync(mdDirectory);

        let allPostsData: BlogContentMd[] = fileNames.map((fileName) => {
            return getEachBlogContentMd(fileName, currentCategory);
        });

        allPostsData = allPostsData?.filter(x => !x.slug.endsWith(".json"));

        return allPostsData;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}


export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get
        //
        // .
        // .
        // .0
        // 0.0
        // .0id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            slug,
            ...matterResult.data,
        };
    });

    /*
    // Sort posts by date

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    */

    return allPostsData;
}

