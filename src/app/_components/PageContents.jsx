export default function PageContents({children, classNames}) {
    return <section className={`pb-8 lg:pb-12 ${classNames}`}>{children}</section>
}