import fs from 'fs';
import path from 'path';
import {BlogContent, BlogContents} from "@/app/_models/BlogModels";
import {loadJsonContents} from "@/libs/JsonFileService";

export async function getFoldersInPath(targetPath: string): Promise<string[]> {
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

export async function getAllUrlInAllFoldersInPath(targetPath: string): Promise<BlogContent[]> {
    try {
        const foldersInPath = await getFoldersInPath(targetPath);

        let blogList: BlogContent[] = []

        for (let i = 0; i < foldersInPath.length; i++) {
            console.log(foldersInPath); //use i instead of 0

            const pageContent: BlogContents = await loadJsonContents("blog/" + foldersInPath[i] + "/index")

            pageContent.blogList.forEach((element) => {
                element.url ="/blog/"+ pageContent.currentPage.url + "/" + element.url;
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