import fs from 'fs';
import path from 'path';
import {BlogContent, BlogMenu} from "@/app/_models/BlogModels";
import {loadJsonContents} from "@/libs/JsonFileService";
import {toTitleCase} from "@/libs/Utils";

const targetPath = './src/json_data/blog';

export async function getFoldersInPath(): Promise<string[]> {
    try {
        // Construct the full path
        const fullPath = path.resolve(targetPath);

        // Read the contents of the directory
        const filesAndFolders = fs.readdirSync(fullPath);

        // Filter out only the directories
        const folders = filesAndFolders.filter((item) =>
            fs.statSync(path.join(fullPath, item)).isDirectory()
        );

        //console.error('folders:', folders);

        // Return the number of folders
        return folders;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

function removeDuplicatesByProperty(array: BlogContent[], property: keyof BlogContent): BlogContent[] {
    const uniqueObjects: { [key: string]: BlogContent } = {};

    for (const obj of array) {
        const key = obj[property];
        if (!uniqueObjects[key]) {
            uniqueObjects[key] = obj;
        }
    }

    return Object.values(uniqueObjects);
}

export async function getAllUrlInAllFoldersInPath(): Promise<BlogContent[]> {
    try {
        const foldersInPath = await getFoldersInPath();

        let blogList: BlogContent[] = []

        for (let i = 0; i < foldersInPath.length; i++) {
            const blogContentList: BlogContent[] = await getBlogContentList(foldersInPath[i]);

            blogList.push(...blogContentList);
        }

        //const uniqueBlogContents = removeDuplicatesByProperty(blogList, 'url');
        return blogList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}


export async function getBlogMenu(currentPage: string): Promise<BlogMenu[]> {
    try {
        const foldersInPath = await getFoldersInPath();

        let blogMenuList: BlogMenu[] = [];

        foldersInPath.forEach(eachFolder => {
            const blogMenu = {
                label: toTitleCase(eachFolder),
                url: "/blog/" + eachFolder,
                count: 42,
                isActive: currentPage == eachFolder
            };

            blogMenuList.push(blogMenu);
        });

        return blogMenuList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getBlogContentList(currentPage: string): Promise<BlogContent[]> {
    try {
        const folderPath = targetPath + "/" + currentPage + "/"

        const jsonFiles = await findAllJsonFiles(folderPath);

        //console.log("jsonFiles>>>" + jsonFiles); //use i instead of 0

        let blogContentList: BlogContent[] = [];

        for (let i = 0; i < jsonFiles.length; i++) {
            //console.log("jsonFiles[i]>>>" + jsonFiles[i]); //use i instead of 0

            const url = jsonFiles[i].replace(".json", "");
            //console.log("jsonFiles url>>>" + url); //use i instead of 0

            if (url !== "index") {
                const endUrl="/blog/" + currentPage + "/" + url;

                const blogContent: BlogContent = await loadJsonContents(endUrl)

                blogContent.url = endUrl;
                blogContent.slug = url;
                blogContent.page = currentPage;

                //console.log(blogContent); //use i instead of 0

                blogContentList.push(blogContent);
            }
        }

        //console.error('blogContentList:', blogContentList);
        return blogContentList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

async function findAllJsonFiles(folderPath: string): Promise<string[]> {
    //console.error('folderPath:', folderPath);
    try {

        const fullPath = path.resolve(folderPath);
        const filesAndFolders = fs.readdirSync(fullPath);

        // Filter out only the JSON files
        const jsonFiles = filesAndFolders.filter((item) =>
            fs.statSync(path.join(folderPath, item)).isFile() && item.toLowerCase().endsWith('.json')
        );

        // Return the list of JSON files
        return jsonFiles;
    } catch (error) {
        // console.error('Error:', error.message);
        return []; // Return an empty array to indicate an error or no JSON files found
    }
}