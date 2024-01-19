import HeroBanner from "@/app/_components/HeaderBanner";

export function generateStaticParams() {
    return [
        {category: 'a', product: '1'},
        {category: 'a', product: '6'},
        {category: 'b', product: '2'},
        {category: 'c', product: '3'},
        {category: 'c', product: '6'},
        {category: 'aws', product: 'title-4'},
    ]
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /products/a/1
// - /products/b/2
// - /products/c/3
export default function Page({params,}: { params: { category: string; product: string } }) {
    const {category, product} = params


    console.log("/products/a/1")
    console.log("category:" + category)
    console.log("product:" + product)

    return (
        <>
            <HeroBanner title={product} subtitle={category}>
                Blogs Page Slug {category}
            </HeroBanner>
        </>
    )
}