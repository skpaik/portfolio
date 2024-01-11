import {promises as fs} from 'fs';

export async function loadJsonContents(file: string) {
    const fileContents = await fs.readFile(process.cwd() + `/src/json_data/${file}.json`, 'utf8');

    return JSON.parse(fileContents);
}