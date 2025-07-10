'use client';
import "../globals.css";
import React, { useState } from 'react';

// const testimonials = [
//   {
//     name: 'Callum Barry',
//     role: 'Software Developer',
//     quote: 'Cameron\'s help me start my training plan to rebuild my running strength after an injury. He provided a structured plan that was easy to follow and tailored to my needs. Within 4 weeks, I noticed significant improvements in my strength and endurance. His expertise and support have been invaluable in my recovery journey.',
//     image: '',
//   },
//   {
//     name: 'Tara Pohl',
//     role: 'Medical Officer',
//     quote: 'Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference in my performance and overall health.',
//     image: '',
//   },
// ];

// const TestimonialSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {setCurrent((prev) => (prev + 1) % testimonials.length);};
//   const prevSlide = () => {setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);};

//   return (
//     <div className="relative w-full max-w-3xl mx-auto py-12 p-8 rounded-lg">
//       <div className="overflow-hidden">
//         <h2 className="text-4xl text-center font-semibold justify-between text-gray-900">
//             Testimonials
//         </h2>
//         <div className="flex transition-transform duration-700 ease-in-out"  style={{ transform: `translateX(-${current * 100}%)` }}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="flex-shrink-0 w-full p-12">
//               <div className="bg-white shadow-lg rounded-lg  hover:shadow-2xl transition-shadow duration-300 p-2">
//                 {/* <div className="flex justify-center mb-4">
//                   <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="w-20 h-20 rounded-full"/>
//                 </div> */}
//                 <h3 className="text-xl font-semibold text-center text-gray-800">
//                     {testimonial.name}
//                 </h3>
//                 <p className="text-center text-sm font-semibold text-gray-500">
//                   <span className="text-teal-600">
//                     {testimonial.role}
//                   </span>
//                 </p>
//                 <div className="mt-4 text-gray-600 text-center italic">
//                   <p className="max-w-xs mx-auto">{testimonial.quote}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center space-x-2 mt-6">
//         {testimonials.map((_, index) => (
//           <button key={index} className={`h-2 w-2 rounded-full ${current === index ? 'bg-teal-600' : 'bg-gray-300'} transition-all duration-300`}
//           onClick={() => setCurrent(index)}/>
//         ))}
//       </div>

//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//         <button
//           className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300" onClick={prevSlide}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
//           </svg>
//         </button>
//       </div>

//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//         <button
//           className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300" onClick={nextSlide}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

const testimonials = [
  {
    name: 'Callum Barry',
    role: 'Software Developer',
    quote: 'Cameron helped me start my training plan to rebuild my running strength after an injury. Within 4 weeks, I noticed significant improvements.',
    image: '',
  },
  {
    name: 'Tara Pohl',
    role: 'Medical Officer',
    quote: 'Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference.',
    image: '',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full max-w-3xl mx-auto py-12 px-8 rounded-lg" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className="text-4xl text-center font-semibold text-gray-900 mb-6">
        Testimonials
      </h2>

      <div className="overflow-hidden" aria-live="polite">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="flex-shrink-0 w-full p-6"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${testimonials.length}`}
            >
              <blockquote className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 p-6">
                <header className="mb-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <cite className="text-sm text-teal-600 not-italic">{testimonial.role}</cite>
                </header>
                <p className="text-center italic text-gray-600 max-w-xs mx-auto">“{testimonial.quote}”</p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full ${current === index ? 'bg-teal-600' : 'bg-gray-300'} transition-all duration-300`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Prev Arrow */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Next Arrow */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;