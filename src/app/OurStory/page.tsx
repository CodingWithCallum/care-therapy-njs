import "../globals.css";
import Image from "next/image";
import 'material-symbols';

export default function OurStory() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 text-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-sky-700 to-blue-900">
            {["CARE Therapy\’s Story"]}
          </span>
        </h1>

        <article className="space-y-5">
          <header>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-500">And What Sets Us Apart</p>
          </header>

          <ul className="space-y-4 text-gray-700">
            {[
              "We aim to bridge the gap between rehabilitation and fitness by offering expert-guided, proactive exercise therapy in real-world settings.",
              "Unlike physiotherapy, which typically focuses on acute injuries, CARE Therapy emphasizes long-term movement health and performance enhancement.",
              "We prioritize preventative care: improving posture, strength, balance, and mobility before issues become disabling.",
              "We bring the service to you — at home, in community settings, or on the field.",
              "CARE Therapy adapts to each client\’s goals and environment, ideal for elderly individuals, post-injury recovery, or young athletes."
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gray-900 material-symbols-outlined">arrow_right_alt</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </article>

        <div className="my-12 mb-0">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Specialist</h2>
            <p>
            {"My name is Cameron, I am a Clinical \/ Adaptive Exercise Specialist and Founder of CARE Therapy, with a strong foundation in rehabilitative and adapted movement. I hold an MSc in Kinesiology with a specialization in Adapted Physical Activity, and earned my undergraduate and Honours degrees in Human Kinetics and Ergonomics from Rhodes University."}
            </p>
            <p>
              {"With professional experience in personal training and athletic performance since 2019, and a clinical focus on therapeutic and adapted exercise since 2022, I bring both scientific expertise and personal insight to my work. As a former Varsity Shield and U.S. Division II rugby player, I understand the physical demands of performance and the journey through injury recovery."}
            </p>
            <p>
              {"My adapted exercise experience includes working at the renowned Center of Achievement in California, where I provided specialized support for individuals with neurological and physical disabilities. I now lead CARE Therapy with a commitment to holistic, evidence-based care that bridges rehabilitation, functional movement, and performance enhancement."}
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Image src="/cameron_libera_linkedin.jpeg" width={600} height={600} alt="Portrait of Cameron Libera" className="rounded-lg object-cover w-full h-auto" priority/>
          </div>
        </div>

        <div className="my-12 mb-0">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Qualified for Your Needs</h2>
            <p>
              {"Cameron holds a Bachelor\’s in Human Kinetics & Ergonomics and Psychology, with an Honours from "}<strong>{"Rhodes University"}</strong>{". He also earned a Master of Science in Kinesiology, specializing in Adapted Physical Activity from "}<strong>{"California State University, Northridge"}</strong>{"."}
            </p>

            <div className="grid gap-6 bg-white p-4 border rounded-xl">
              {[{
                title: "Rhodes University, South Africa",
                degree: "B.SocSci in Human Kinetics and Ergonomics (Hons) & Psychology",
                icon: "🏛️"
              }, {
                title: "California State University, USA",
                degree: "MSc in Kinesiology: Adapted Physical Activity",
                icon: "🎓"
              }].map((edu, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="bg-gray-900 text-white p-3 rounded-full">{edu.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <Image src="https://images.unsplash.com/photo-1717500252106-2a9f83cc61ed?q=80&w=1170&auto=format&fit=crop" width={1200} height={900} alt="Graduation cap symbolizing qualifications" className="rounded-lg object-cover w-full h-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}
