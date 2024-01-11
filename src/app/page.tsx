import HeroBanner from "@/app/_components/HeaderBanner";
import PageContents from "@/app/_components/PageContents";

export default function Home() {
    return (
        <>
            <HeroBanner title="HyperUI"
                        subtitle="Free Open Source Tailwind CSS Components">
                HyperUI is a collection of free Tailwind CSS components that can be used in your next
                project. With a range of components, you can build your next marketing website, admin
                dashboard, eCommerce store and much more.
            </HeroBanner>
            <PageContents classNames="">
                <ul className="space-y-8">
                    Home Contents
                    eCommerce
                    Working on an eCommerce project? HyperUI has a growing range of eCommerce Tailwind CSS components,
                    that will help you build your next eCommerce website in Shopify, BigCommerce, Magento and more.
                    eCommerce
                    Working on an eCommerce project? HyperUI has a growing range of eCommerce Tailwind CSS components,
                    that will help you build your next eCommerce website in Shopify, BigCommerce, Magento and more.


                    eCommerce
                    Working on an eCommerce project? HyperUI has a growing range of eCommerce Tailwind CSS components,
                    that will help you build your next eCommerce website in Shopify, BigCommerce, Magento and more.

                    eCommerce
                    Working on an eCommerce project? HyperUI has a growing range of eCommerce Tailwind CSS components,
                    that will help you build your next eCommerce website in Shopify, BigCommerce, Magento and more.
                </ul>
            </PageContents>
        </>
    )
}
