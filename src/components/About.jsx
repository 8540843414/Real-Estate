import React from 'react';
import { assets } from '../assets/assets';
import { motion as Motion} from "framer-motion";

const About = () => {
  return (
  <Motion.div 
  initial={{ opacity: 0, x: 200 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  id="About"
  className="relative flex flex-col items-center container mx-auto px-6 md:px-20 lg:px-32 py-16 scroll-mt-24"
>
  <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
    About <span className="underline underline-offset-4 decoration-1 text-blue-500">Our Brand</span>
  </h1>

  <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
    Passionate About Properties, Dedicated to Your Vision
  </p>

  <div className="flex flex-col md:flex-row items-stretch gap-10">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={assets.brand_img}
        alt="Brand"
        className="w-full h-full max-h-[500px] object-cover rounded-tl-[100px]"
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-6 md:gap-10">
        <div>
          <p className="text-4xl font-medium text-gray-800">10+</p>
          <p className="whitespace-nowrap">Years of Experience</p>
        </div>
        <div>
          <p className="text-4xl font-medium text-gray-800">12+</p>
          <p className="whitespace-nowrap">Projects Completed</p>
        </div>
        <div>
          <p className="text-4xl font-medium text-gray-800">20+</p>
          <p className="whitespace-nowrap">Mn. Sq. Ft. Delivered</p>
        </div>
        <div>
          <p className="text-4xl font-medium text-gray-800">25+</p>
          <p className="whitespace-nowrap">Ongoing Projects</p>
        </div>
      </div>

      <p className="my-6 text-justify text-gray-600 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>

      <button className="bg-blue-600 text-white px-8 py-2 rounded self-start hover:bg-blue-700 transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</Motion.div>

  );
};

export default About;
