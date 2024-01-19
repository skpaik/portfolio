type Props = {
    children?: string | JSX.Element | JSX.Element[]
    title?: string
    subtitle?: string
}

export default function HeroBanner({children, title="", subtitle=""}: Props) {
    return (<section className="bg-white text-center mx-auto max-w px-8 py-8">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-4 lg:px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        {subtitle}
                    </p>
                </div>
            </div>
            {children && children}
        </section>
    )
}