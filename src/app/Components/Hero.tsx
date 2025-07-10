import "../globals.css";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
return (
        // <section className="py-5 mt-10 relative pt-18 lg:pt-18">
        //     <div className="mt-5 mx-auto lg:max-w-7xl w-full px-3 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        //         <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
        //         lg:items-start lg:max-w-none max-w-4xl mx-5 lg:mx-0 lg:flex-1/6 lg:w-1/2">
        //             <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
        //             font-bold text-gray-900">
        //                 <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 from-30% via-blue-400 via-50% to-teal-600">CARE Therapy<br/></span>
        //             </h1>
        //             <h2 className="mt-5 text-1xl sm:text-2xl md:text-3xl xl:text-4xl
        //             font-bold text-gray-900">Helping you move better, live stronger, and perform with confidence.</h2>
        //             <p className="mt-5 text-gray-700">
        //                 CARE Therapy aims to bridge the gap by providing evidence-based adapted therapeutic and rehabilitative exercise. Striving for excellence, CARE Therapy aspires
        //                 to become a leading provider of physiotherapy and rehabilitation services in the region, empowering individuals to achieve their optimal health and well-being.
        //             </p>
        //             <div className="flex justify-center items-center flex-wrap mx-auto gap-6 mt-6">
        //               <Link href="/ContactUs" className="flex items-center h-12 px-6 rounded-full bg-teal-600 text-white border border-teal-500">Book Your Free Consultation</Link>
        //               {/* <Link href="/ContactUs" className="flex items-center h-12 px-6 rounded-full bg-gray-100 text-teal-700 border border-gray-200">Book Your Free Consultation</Link> */}
        //             </div>
        //         </div>
        //         <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
        //             <Image src="/physio_hand.jpg" alt="Physiotherapist helping patient with hand exercises" width={1920} height={1080} priority className="w-full h-auto object-cover rounded-3xl" />
        //         </div>
        //     </div>
        // </section>

        <section className="py-10 mt-15 relative">
        <div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row items-center gap-10">

            <div className="flex flex-col text-center lg:text-left lg:w-1/2">
            <section aria-labelledby="hero-heading">
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-400 to-teal-600">
                    CARE Therapy
                    </span>
                </h1>
            </section>
            
            <p className="mt-5 text-xl font-semibold text-gray-900">
                Helping you move better, live stronger, and perform with confidence.
            </p>
            
            <p className="mt-4 text-gray-700">
                CARE Therapy provides evidence-based adapted therapeutic and rehabilitative exercise. 
                We strive to empower individuals to achieve optimal health and well-being.
            </p>

            <div className="flex justify-center lg:justify-start mt-6">
                <Link href="/ContactUs" className="px-6 h-12 rounded-full bg-teal-600 text-white border border-teal-500 flex items-center" aria-label="Book your free consultation">
                Book Your Free Consultation
                </Link>
            </div>
            </div>

            <div className="lg:w-1/2 w-full">
            <Image src="/physio_hand.jpg" alt="Physiotherapist helping patient with hand exercises" width={1200} height={800} priority className="w-full h-auto object-cover rounded-3xl"/>
            </div>
        </div>
        </section>
)
}
export default Hero