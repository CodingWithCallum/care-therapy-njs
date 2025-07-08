import "../globals.css";
import Link from "next/link"

const OurServices = () => {
return (
    <section className="py-25">
        <div className="max-w-7xl mx-auto px-5 pt-15 sm:px-10 md:px-12 lg:px-1 divide-gray-200">
            <div className="flex md:justify-between md:flex-row flex-col gap-5 md:gap-20">
                <div className="max-w-xl">
                    <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-700">
                        The Right Plan for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 from-30% via-blue-400 via-50% to-teal-600">Your Body</span>
                    </h1>
                </div>
                <div className="flex-1 max-w-2xl pt-5">
                    <p className="text-gray-700">
                        We offer a range of services tailored to your needs, whether you are looking for personalized exercise therapy, movement health coaching, or group classes. Our plans are designed to help you achieve your fitness goals and maintain a healthy lifestyle.
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-t-gray-200 divide-y divide-gray-200">
                <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="font-bold text-2xl text-gray-900">Plan ABC</h2>
                    </div>
                    <div className="text-gray-700 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                        <ul className="space-y-3 md:col-span-2">
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage  1
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 2
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 3
                            </li>
                        </ul>
                        <div className="font-bold text-2xl text-gray-900">
                            <span>R750 Per Session</span>
                        </div>
                    </div>
                    <div className="flex md:justify-end md:items-center">
                        <a href="/ContactUs" className="h-10 px-5 text-sky-700 rounded-lg bg-gray-100 border border-gray-200 flex items-center outline-none">
                            Book ABC
                        </a>
                    </div>
                </div>
                <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="font-bold text-2xl text-gray-900 ">Plan DEF</h2>
                    </div>
                    <div className="text-gray-700 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                        <ul className="space-y-3 md:col-span-2">
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage  1
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 2
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 3
                            </li>
                        </ul>
                        <div className="font-bold text-2xl text-gray-900">
                            <span>R1500 Per Session</span>
                        </div>
                    </div>
                    <div className="flex md:justify-end md:items-center">
                        <Link href="/ContactUs" className="h-10 px-5 rounded-lg text-white bg-sky-700 border-gray-200 flex items-center outline-none">
                            Book DEF
                        </Link>
                    </div>
                </div>
                <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="font-bold text-2xl text-gray-900">Plan XYZ</h2>
                    </div>
                    <div className="text-gray-700 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                        <ul className="space-y-3 md:col-span-2">
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage  1
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 2
                            </li>
                            <li className="flex items-center gap-x-4">
                                <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 text-white">✓</span>
                                Advantage 3
                            </li>
                        </ul>
                        <div className="font-bold text-2xl text-gray-900">
                            <span>R1000 Per Session</span>
                        </div>
                    </div>
                    <div className="flex md:justify-end md:items-center">
                        <Link href="/ContactUs" className="h-10 px-5 text-sky-700 rounded-lg bg-gray-100 border border-gray-200 flex items-center outline-none">
                            Book XYZ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
 
export default OurServices