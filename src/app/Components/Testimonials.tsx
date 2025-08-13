'use client';
import "../globals.css";
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Callum Barry',
    role: 'Software Developer',
    quote: 'Cameron helped me start my training plan to rebuild my running strength after a period of time away from running due to injury. Within weeks, I noticed significant improvements and recently started to run more freely with less pain. His insights into running form and strength training have been invaluable. I highly recommend him to anyone looking to improve their performance or return from injury.',
    image: '',
  },
  {
    name: 'Tara Pohl',
    role: 'Medical Officer Intern',
    quote: 'Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference in my progress readying myself for my next trail run later this year. I highly recommend him to anyone looking to improve their fitness or recover from an injury.',
    image: '',
  },
  {
    name: 'Joan',
    role: '',
    quote: 'Before working with Cameron, I had been living with vertigo and drop foot. I was unsteady and becoming increasingly reliant on my cane for walking. Since starting our sessions, my balance and walking have improved so much that I now only use my cane occasionally. I feel stronger, more stable, and more confident moving throughout my day. I’m also sleeping better, feeling more positive, and experiencing far less pain.',
    image: '',
  }
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
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="flex-shrink-0 w-full p-6" role="group" aria-roledescription="slide" aria-label={`Slide ${index + 1} of ${testimonials.length}`}>
              <blockquote className="bg-base-00 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 p-6">
                <header className="mb-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <cite className="text-sm text-sky-600 not-italic">{testimonial.role}</cite>
                </header>
                <p className="text-center italic text-gray-600 max-w-sm mx-auto">“{testimonial.quote}”</p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button key={index} aria-label={`Go to slide ${index + 1}`} className={`h-2 w-2 btn btn-primary ${current === index ? 'bg-sky-600' : 'bg-sky-300'} transition-all duration-300`} onClick={() => setCurrent(index)}/>
        ))}
      </div>

      {/* Prev Arrow */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevSlide} aria-label="Previous testimonial" className="p-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Next Arrow */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextSlide} aria-label="Next testimonial" className="p-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;