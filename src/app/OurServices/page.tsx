import "../globals.css";
import Link from "next/link";

const services = [
  {
    title: "Adapted Exercise Therapy",
    description: "Clinical exercise approach designed for individuals living with chronic illness, disability, or age-related functional decline.",
    features: [
      "Functional movement screenings\/assessments",
      "Strength, range of motion, balance, functional motor skills, and cardiovascular exercises",
      "Individualised progression plans",
      "Ideal for seniors, stroke survivors, and individuals with SCI, MS, Parkinson\’s, arthritis, frailty...",
    ],
    price: "R650 \– R800 per session \(fuel\/distance dependent\)",
    cta: "/ContactUs",
  },
  {
    title: "Assisted Stretching for Flexibility \& Range of Motion (ROM)",
    description: "Hands-on flexibility therapy to reduce stiffness, improve neuromuscular control, and enhance overall mobility.",
    features: [
      "Neuromuscular re-education",
      "Reduced muscle tension",
      "Enhanced mobility and increased ROM for active or sedentary clients",
      "Complementary to rehabilitation and athletic training",
    ],
    price: "R250 \(30 min\) \| R400 \(60 min\)",
    cta: "/ContactUs",
  },
  {
    title: "Sports Performance \& Injury Prevention Therapy",
    description: "Targeted training for athletes and active individuals to enhance physical performance and prevent injuries.",
    features: [
      "Sport\-specific strength \& mobility training",
      "Movement quality and biomechanical correction",
      "Speed, agility, and proprioception development",
      "Return\-to\-play strategies and performance tracking",
    ],
    price: "R650 \– R800 per session \(fuel\/distance dependent\)",
    cta: "/ContactUs",
  },
  {
    title: "Injury Recovery Support",
    description: "Rehabilitation-focused sessions are designed to bridge the gap between physiotherapy and full physical readiness.",
    features: [
      "Post-operative recovery \(e.g. joint replacement, ligament repair\)",
      "Ongoing or chronic pain management",
      "Functional return after orthopedic or neurological rehab",
    ],
    price: "R800 per session",
    cta: "/ContactUs",
  },
];

const OurServices = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="mb-12 md:flex md:justify-between gap-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Services Designed for <br />
            <span className="bg-gradient-to-br from-blue-700 via-blue-400 to-teal-600 bg-clip-text text-transparent">
              Your Health & Performance
            </span>
          </h1>
          <p className="text-gray-700 max-w-xl pt-5 md:pt-0">
            {"CARE Therapy brings individualized, mobile care to you — whether you\’re managing a chronic condition, recovering from injury, or looking to move and live better. Each service is guided by clinical expertise and a personal approach."}
          </p>
        </div>

        <div className="space-y-4 divide-y divide-gray-200">
          {services.map((service, index) => (
            <div key={index} className="pt-8 grid gap-6 md:grid-cols-5">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="md:col-span-3">
                <ul className="space-y-3 text-gray-700 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-sky-700 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full mt-1">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="font-bold text-xl text-gray-900">{service.price}</div>
                  <Link href={service.cta} className="px-5 py-2 text-sm font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
