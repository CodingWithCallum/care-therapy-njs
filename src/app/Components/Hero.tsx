import "../globals.css";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
return (
        <section className="relative">
            <div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex flex-col text-center lg:text-left lg:w-1/2">
                {/* Hero Title */}
                    <section aria-labelledby="hero-heading"> 
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-sky-700 to-blue-900">
                            CARE Therapy</span>
                        </h1>
                    </section>
                    {/* Hero Subtitle */}
                    <p className="mt-5 text-xl font-semibold text-gray-900">
                        Helping you move better, live stronger, and perform with confidence.
                    </p>
                    {/* Hero Additional Text */}
                    <p className="mt-4 text-gray-700">
                        CARE Therapy provides evidence-based adapted therapeutic and rehabilitative exercise. 
                        We strive to empower individuals to achieve optimal health and well-being.
                    </p>
                    {/* Call to Action Button */}
                    <div className="flex justify-center lg:justify-start mt-6">
                        <Link href="/ContactUs" className="btn btn-primary" aria-label="Book your free consultation">
                        Book Your Free Consultation
                        </Link>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="avatar lg:w-1/2 w-full">
                    <Image src="/physio_hand.jpg" alt="Physiotherapist helping patient with hand exercises" width={1200} height={800} priority className="w-full h-auto object-cover rounded-3xl"/>
                </div>
            </div>
        </section>
)
}
export default Hero