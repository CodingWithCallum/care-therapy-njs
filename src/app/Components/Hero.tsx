import Link from "next/link";
import Image from "next/image";
const Hero = () => {
return (
        <section className="py-5 my-10 relative pt-18 lg:pt-18">
            <div className="mx-auto lg:max-w-7xl w-full px-3 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"/>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"/>
                </div>
                <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"/>
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-4xl mx-5 lg:mx-0 lg:flex-1/6 lg:w-1/2">
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-gray-900">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Care Therapy<br/></span>
                    </h1>
                    <h2 className="text-1xl sm:text-2xl md:text-3xl xl:text-4xl
   font-bold text-gray-900">Helping you move better, live stronger, and perform with confidence.</h2>
                    <p className="mt-8 text-gray-700 dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                        quis voluptatum porro incidunt,
                        libero sequi quos eos velit
                    </p>
                    <div className="flex justify-center items-center flex-wrap mx-auto gap-6 mt-6">
                      <Link href="/OurStory" className="flex items-center h-12 px-6 rounded-full bg-teal-600 text-white border border-teal-500">Our Story</Link>
                      <Link href="/ContactUs" className="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-teal-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">Book Your Consult</Link>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <Image src="/image1.webp" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </div>
        </section>
)
}
export default Hero