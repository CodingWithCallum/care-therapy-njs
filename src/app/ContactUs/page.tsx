import "../globals.css";
import Image from "next/image";

export default function ContactUs() {
  return (
      <section className="">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-bold text-gray-900">
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-400 to-teal-600">CARE Therapy</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {"Whether you\'re ready to book or just have a question \— we\'re here for you."}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Image */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop"
                width={1000}
                height={600}
                alt="Contact CARE Therapy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Contact Details */}
            <div className="flex flex-col gap-10">
              {/* Locations */}
              <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Servicing Area</h2>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-sky-700 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="text-gray-700">
                    <p>Pretoria</p>
                    <p>Johannesburg</p>
                    <p>Greater Gauteng Region</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-sky-700 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M21.2 8.4a2 2 0 01.8 1.6v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 01.8-1.6l8-6a2 2 0 012.4 0l8 6z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 01-2.06 0L2 10" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:caretherapysa@gmail.com"
                      className="text-base font-medium text-gray-900 underline hover:text-blue-700"
                    >
                      caretherapysa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-sky-700 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a
                      href="tel:+27797908846"
                      className="text-base font-medium text-gray-900 underline hover:text-teal-600"
                    >
                      +27 79 790 8846
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

