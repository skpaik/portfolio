import fs from 'fs';
import path from 'path';
import {BlogContent, BlogContents, BlogMenu} from "@/app/_models/BlogModels";
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

        console.error('folders:', folders);

        // Return the number of folders
        return folders;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}

export async function getAllUrlInAllFoldersInPath(): Promise<BlogContent[]> {
    try {
        const foldersInPath = await getFoldersInPath();

        let blogList: BlogContent[] = []

        for (let i = 0; i < foldersInPath.length; i++) {
            console.log(foldersInPath); //use i instead of 0

            const pageContent: BlogContents = await loadJsonContents("blog/" + foldersInPath[i] + "/index")

            pageContent.blogList.forEach((element) => {
                element.url = "/blog/" + pageContent.currentPage.url + "/" + element.url;
                blogList.push(element);
            });

            // blogList.push(...pageContent.blogList);
        }

        return blogList;
    } catch (error) {
        //console.error('Error:', error.message);
        return []; // Return -1 to indicate an error
    }
}


export async function getBlogMenu(currentPage:string): Promise<BlogMenu[]> {
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