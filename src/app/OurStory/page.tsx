import "../globals.css";
import Image from "next/image"

export default function OurStory() {
  return (
    <section className="py-25 mt-10">
        <div className="max-w-7xl mx-auto sm:px-10 md:px-12 lg:px-5 md:flex-row gap-16 justify-items-center">
            <h1 className="mt-6 text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 from-30% via-blue-400 via-50% to-teal-600">CARE Therapys Story</span>
            </h1>
        </div>
        <div className="max-w-7xl mx-auto sm:px-10 md:px-12 lg:px-5 md:flex-row gap-16">
            <div className="flex-row justify-items-center">
                <h2 className="mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
                    Our Mission
                </h2>
            </div>
            <div className="flex-row justify-items-center">
                <h3 className="mt-2 mb-5 text-base sm:text-xs md:text-1xl xl:text-2xl font-medium text-gray-400">
                    And What Sets Us Apart
                </h3>
            </div>
            <div className="flex flex-col pb-10">
                <div className="flex flex-row items-center gap-2">
                    <Image src="/arrow-small-right.png" alt="arrow small right" width={20} height={20} className="w-5 h-5 mb-2 mt-2"/>
                    <p>We aim to bridge the gap between rehabilitation and fitness by offering expert-guided, proactive exercise therapy in real-world settings.</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/arrow-small-right.png" alt="arrow small right" width={20} height={20} className="w-5 h-5 mb-2 mt-2"/>
                    <p>Unlike physiotherapy, which typically focuses on diagnosing and treating acute injuries and pain, CARE Therapy emphasizes long-term movement health, maintenance, and performance enhancement.</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/arrow-small-right.png" alt="arrow small right" width={20} height={20} className="w-5 h-5 mb-2 mt-2"/>
                    <p>Our focus is on preventative care: improving posture, strength, balance, and mobility before problems become disabling.</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/arrow-small-right.png" alt="arrow small right" width={20} height={20} className="w-5 h-5 mb-2 mt-2"/>
                    <p>We bring the service to you. Whether at home, in community settings, or on the field. CARE Therapy delivers professional care without the clinic walls.</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/arrow-small-right.png" alt="arrow small right" width={20} height={20} className="w-5 h-5 mb-2 mt-2"/>
                    <p>CARE Therapy adapts to each clients specific needs, goals, and environment. Making it ideal for elderly clients, those recovering from illness or injury, and even school-age athletes looking to improve their performance.</p>
                </div>
            </div>
        </div>

        <div className="mt-10 mb-0">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10"></hr>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-12 lg:px-5 flex flex-row lg:flex-row gap-10 lg:gap-6">
            <div className="flex flex-initial content-center">
                <div className="flex flex-col">
                    <div className="content-end basis-4/10">
                        <h2 className="justify-center mb-5 text-2xl sm:text-2xl md:text-3xl xl:text-4xl
                            font-bold text-gray-900">Our Specialist - Cameron
                        </h2>
                    </div>
                    <div className="basis-6/10">
                        <p>My name is Cameron Libera - a clinical and adaptive exercise specialist. I am the founder of CARE Therapy providing mobile and individualised exercise therapy in Pretoria and Johannesburg.</p> <br/>
                        <p>At the renowned <strong>Center of Achievement</strong> in California, USA - I have over 3 years of international experience. At the center, I provided exercise therapy for individuals with Stroke, Multiple Sclerosis (MS), Traumatic Brain Injury (TBI), Spinal Cord Injury (SCI), Spina Bifida, Arthritis, Cerebral Palsy (CP), and children with Autism and other developmental disabilities.</p>
                    </div>
                </div>
            </div>
            <div className="flex w-max py-5 pl-15">
                <Image src="/cameron_libera_linkedin.jpeg" width={1000} height={1000} alt="Headshot of Cameron Libera" className="object-cover rounded-lg"/>
            </div>
        </div>

        <div className="mt-10 mb-15">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10"></hr>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
            <div className="flex md:flex-1">
                <Image src="https://images.unsplash.com/photo-1717500252106-2a9f83cc61ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image representing graduation" width={22000} height={900} className="w-full md:h-full object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 lg:w-[65%] space-y-12 text-gray-700">
                <h2 className="mb-5 text-1xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
                    Qualified For Your Needs
                </h2>
                <p className="text-gray-700">
                    Our Specialist, Cameron, boasts and impressive history with education completing his Undergraduate in Human Kinetics and Ergonics & Psychology and further completed his Honours in Human Kinetics and Ergonomics at <strong>Rhodes University</strong>. Cameron went on to complete his Masters of Science in Kinesiology - specialising in adapted physical therapy - at <strong>California State University, Northbridge</strong>.
                </p>
                <div className="grid gap-3">
                    <div className="flex lg:w-auto md:w-auto space-y-6 p-2 pt-3 rounded-xl bg-white border border-gray-100">
                        <div className="w-90 flex-initial p-2 items-center">
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-gray-900 text-gray-100 w-max p-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>
                                </span>
                                <h2 className="font-semibold text-xl text-gray-900">Rhodes University, South Africa.</h2>
                            </div>
                            <p className="mt-2">
                                <span>Bachelor of Social Sciences in Human Kinetics and Ergonomics (Hons) and Psychology.</span>
                            </p>
                        </div>
                        <div className="w-16 flex-initial py-2 lg:pr-4 md:pr-2 divider divider-horizontal">&</div>
                        <div className="w-90 flex-initial p-2 items-center">
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-gray-900 text-gray-100 w-max p-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <h2 className="font-semibold text-xl text-gray-900">California State University, US.</h2>
                            </div>
                            <div className="flex items-center">
                                <p className="mt-2">
                                    <span>Master of Science in Kinesiology: Specialization in Adapted Physical Activity.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}