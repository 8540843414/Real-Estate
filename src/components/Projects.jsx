import React, { useRef, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion as Motion} from "framer-motion";

const Projects = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsPerView = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const scrollToDirection = (direction) => {
    const container = sliderRef.current;
    const cardWidth = container.offsetWidth / cardsPerView();
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Motion.div 
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='w-full pt-20 px-4 sm:px-6 lg:px-20' id='Projects'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'>
        Projects{' '}
        <span className='text-blue-500 underline underline-offset-4 decoration-1'>
          Completed
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-8'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Arrows */}
      <div className='flex justify-end gap-2 mb-4'>
        <button
          onClick={() => scrollToDirection('prev')}
          className='p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow'
        >
          <img src={assets.left_arrow} alt='Previous' className='w-4 h-4' />
        </button>
        <button
          onClick={() => scrollToDirection('next')}
          className='p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow'
        >
          <img src={assets.right_arrow} alt='Next' className='w-4 h-4' />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        className='flex gap-6 overflow-x-auto no-scrollbar cursor-grab'
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className='min-w-full sm:min-w-[50%] lg:min-w-[25%] bg-white rounded shadow-md overflow-hidden'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-auto object-cover' />
            <div className='p-4 text-center'>
              <h2 className='text-lg font-semibold text-gray-800'>
                {project.title}
              </h2>
              <p className='text-sm text-gray-500'>
                {project.price} | {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Projects;
