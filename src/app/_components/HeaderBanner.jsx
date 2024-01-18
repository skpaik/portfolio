export default function HeroBanner({children, title = "", subtitle = ""}) {
    return (
        <section className="bg-white text-center mx-auto max-w px-8 py-8">
            <div className="mx-auto">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
                    <strong className="mt-4 text-gray-500">
                        {subtitle}
                    </strong>
                </div>
            </div>
            {children && children}
        </section>
    )
}