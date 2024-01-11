export default function HeroBanner({children, title = "", subtitle = ""}) {
    return (
        <section className="bg-white text-center py-8 lg:py-12">
            <div className="flex flex-col space-y-4 space-y-reverse">
                {title && <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">{title}</h1>}

                {subtitle && <h2 className="order-last text-lg text-gray-700">{subtitle}</h2>}
            </div>

            {children && <p className="mx-auto mt-6 max-w-lg text-base/relaxed text-gray-600">{children}</p>}
        </section>
    )
}