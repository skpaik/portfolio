import {remark} from 'remark'
import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import {reporter} from 'vfile-reporter'
import html from "remark-html";
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export async function remarkContent(content: string) {
/*
    const processedContent = await remark()
        .use(html)
        .process(content)

    // const file = await unified()
    //     .use(remarkParse)
    //     .use(remarkRehype)
    //     .use(rehypeSanitize)
    //     .use(rehypeStringify)
    //     .process('# Hello, Neptune!')
    //
    // console.log(String(file))

    const file = await remark()
        // .use(remarkPresetLintConsistent)
        // .use(remarkPresetLintRecommended)
        .use(html)
        .process(content)

    console.error(reporter(file))
    return String(file);

    */


    const file = await unified()
        .use(remarkParse) // Convert into markdown AST
        .use(remarkRehype) // Transform to HTML AST
        .use(rehypeSanitize) // Sanitize HTML input
        .use(rehypeStringify) // Convert AST into serialized HTML
        .process(content)


    return String(file)
}