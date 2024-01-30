import {promises as fs} from 'fs';

export async function loadContents(file: string) {
    return await fs.readFile(process.cwd() + `/src/json_data/${file}.json`, 'utf8');
}

export async function loadJsonContents(file: string) {
    const globalContents = await loadContents("global");

    const fileContents = await loadContents(file);

    const obj1 = JSON.parse(globalContents);
    const obj2 = JSON.parse(fileContents);

    return {...obj1, ...obj2};
}