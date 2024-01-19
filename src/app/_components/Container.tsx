type Props = {
    children: string | JSX.Element | JSX.Element[]
    classNames: string
}

export default function Container({children, classNames}: Props) {
    return <div className={`mx-auto max-w-screen-xl px-4 ${classNames}`}>{children}</div>
}