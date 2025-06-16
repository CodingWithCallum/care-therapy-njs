'use client';
import "../globals.css";
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Callum Barry',
    role: 'Software Developer',
    quote: `Here is space for a review from each client would appear
            the formatting for this is direct and not by P`,
    image: '',
  },
  {
    name: 'Tara Pohl',
    role: 'Medical Officer',
    quote: `It’s a very pleasant environment to 
            be on a very interactive learning platform
            which helps me to enhance my skill set to move
            forward in an IT marathon.`,
    image: '',
  },
  {
    name: 'John Doe',
    role: 'Accountant',
    quote: `GeeksforGeeks helped me a lot to
            crack the coding rounds/Interviews.`,
    image: '',
  },
  {
    name: 'Jane Doe',
    role: 'Infosys',
    quote: `I got very good problem-solving skills 
            in GC 6 classes. After completing this class, 
            I gained in-depth knowledge of data structures 
            and algorithms. GeeksforGeeks helped a lot to 
            crack the interviews.`,
    image: '',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials
    .length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12 p-8 rounded-lg">
      <div className="overflow-hidden">
        <h2 className="text-4xl text-center font-semibold justify-between text-gray-900">
            Testimonials
        </h2>
        <div className="flex transition-transform duration-700 ease-in-out"  style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full p-12">
              <div className="bg-white shadow-lg rounded-lg  hover:shadow-2xl transition-shadow duration-300 p-2">
                {/* <div className="flex justify-center mb-4">
                  <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="w-20 h-20 rounded-full"/>
                </div> */}
                <h3 className="text-xl font-semibold text-center text-gray-800">
                    {testimonial.name}
                </h3>
                <p className="text-center text-sm font-semibold text-gray-500">
                  <span className="text-teal-600">
                    {testimonial.role}
                  </span>
                </p>
                <div className="mt-4 text-gray-600 text-center italic">
                  <p className="max-w-xs mx-auto">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button key={index} className={`h-2 w-2 rounded-full ${current === index ? 'bg-teal-600' : 'bg-gray-300'} transition-all duration-300`}
          onClick={() => setCurrent(index)}/>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;