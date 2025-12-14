import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';

const Hero = () => {
  // Animation config for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each letter by 0.1s
      },
    },
  };

  // Animation config for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 } 
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center space-y-8">
        
        {/* Intro text */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-[#FF4D00] font-bold tracking-wide uppercase"
        >
          Hi, I am
        </motion.h2>

        {/* --- NAME ANIMATION START --- */}
        <motion.div 
          className="text-6xl md:text-8xl font-extrabold tracking-tight overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* We split the name into letters to animate each one */}
          {personalDetails.name.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants} 
              className={`inline-block ${char === " " ? "mr-4" : ""} hover:text-[#FF4D00] transition-colors duration-300 cursor-default`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        {/* --- NAME ANIMATION END --- */}

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {personalDetails.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
        >
          <a href="#projects" className="px-8 py-4 bg-[#FF4D00] text-white rounded-md font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-md font-bold text-lg hover:border-[#FF4D00] hover:text-[#FF4D00] transition">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;