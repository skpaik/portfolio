type Props = {
    children: string | JSX.Element | JSX.Element[] | undefined
    classNames: string
}
export default function PageContents({children, classNames}: Props) {
    return <section className={`pb-8 lg:pb-12 ${classNames}`}>{children}</section>
}