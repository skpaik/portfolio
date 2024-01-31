import fs from "fs";
import path from "path";
import {BlogContent, BlogContentMd, BlogDetailModel, BlogMenu} from "@/app/_models/BlogModels";
import {loadContents, loadJsonContents} from "@/libs/JsonFileService";
import {toTitleCase} from "@/libs/Utils";
import {getBlogContentListMD, getBlogContentMd,} from "@/libs/MarkDownFileService";
import {GlobalContent} from "@/app/_models/ContentsModel";

const targetPath = "./src/json_data/blog";

export async function getFoldersInPath(): Promise<string[]> {
    try {
        // Construct the full path
        const fullPath = path.resolve(targetPath);

        // Read the contents of the directory
        const filesAndFolders = fs.readdirSync(fullPath);

        // Filter out only the directories
        const folders = filesAndFolders.filter((item) =>
            fs.statSync(path.join(fullPath, item)).isDirectory(),
        );

        //console.error('folders:', folders);

        // Return the number of folders
        return folders;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getAllUrlInAllFoldersInPathMd(): Promise<
    BlogContentMd[]
> {
    try {
        const foldersInPath = await getFoldersInPath();

        let blogListMd: BlogContentMd[] = [];

        for (let i = 0; i < foldersInPath.length; i++) {
            const blogContentListMd: BlogContentMd[] = await getBlogContentListMD(
                foldersInPath[i],
            );

            blogListMd.push(...blogContentListMd);
        }

        //const uniqueBlogContents = removeDuplicatesByProperty(blogList, 'url');

        return blogListMd;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getBlogMenu(currentCategory: string,): Promise<BlogMenu[]> {
    try {
        const foldersInPath = await getFoldersInPath();

        let blogMenuList: BlogMenu[] = [];

        foldersInPath.forEach((eachFolder) => {
            const blogMenu = {
                label: toTitleCase(eachFolder),
                url: "/blog/" + eachFolder,
                count: 42,
                isActive: currentCategory == eachFolder,
            };

            blogMenuList.push(blogMenu);
        });

        return blogMenuList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getBlogContentList(
    currentPage: string,
): Promise<BlogContent[]> {
    try {
        const folderPath = targetPath + "/" + currentPage + "/";

        const jsonFiles = await findAllJsonFiles(folderPath);

        let blogContentList: BlogContent[] = [];

        for (let i = 0; i < jsonFiles.length; i++) {
            const url = jsonFiles[i].replace(".json", "");

            if (url !== "index") {
                const endUrl = "/blog/" + currentPage + "/" + url;

                const blogContent: BlogContent = await loadJsonContents(endUrl);

                blogContent.url = endUrl;
                blogContent.slug = url;
                blogContent.page = currentPage;

                blogContentList.push(blogContent);
            }
        }

        return blogContentList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function findAllJsonFiles(folderPath: string): Promise<string[]> {
    //console.error('folderPath:', folderPath);
    try {
        const fullPath = path.resolve(folderPath);
        const filesAndFolders = fs.readdirSync(fullPath);

        // Filter out only the JSON files
        const jsonFiles = filesAndFolders.filter(
            (item) =>
                fs.statSync(path.join(folderPath, item)).isFile() &&
                item.toLowerCase().endsWith(".json"),
        );

        // Return the list of JSON files
        return jsonFiles;
    } catch (error) {
        // console.error('Error:', error.message);
        return []; // Return an empty array to indicate an error or no JSON files found
    }
}

export async function loadBlogDetails(category: string, slug: string): Promise<BlogDetailModel> {
    const blogMenuList: BlogMenu[] = await getBlogMenu(category);

    const blogContent: BlogContentMd = await getBlogContentMd(category, slug);

    const globalContents = await loadContents("global");

    const globalContent: GlobalContent = JSON.parse(globalContents);

    return {
        blogContent,
        blogMenuList,
        globalContent: globalContent
    };
}
