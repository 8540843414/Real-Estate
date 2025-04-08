import React from 'react';
import { testimonialsData } from '../assets/assets';
import { motion as Motion} from "framer-motion";

const Testimonials = () => {
  return (
    <Motion.div
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
     id="Testimonials" className='w-full pt-20 px-4 sm:px-10 lg:px-20'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'>
        Customer{' '}
        <span className='text-blue-500 underline underline-offset-4 decoration-1'>
          Testimonials
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-10'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-md p-6 text-center'
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className='w-20 h-20 mx-auto rounded-full mb-4 object-cover'
            />
            <h3 className='text-lg font-semibold text-gray-800'>
              {testimonial.name}
            </h3>
            <p className='text-sm text-gray-500 mb-2'>{testimonial.title}</p>

            {/* Star Rating */}
            <div className='flex justify-center text-orange-500 mb-4'>
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className='text-sm text-gray-600 leading-relaxed'>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Testimonials;