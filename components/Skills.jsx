import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each card by 0.1s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center uppercase tracking-wider"
        >
          Technical <span className="text-[#FF4D00]">Proficiency</span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts when 20% of section is visible
        >
          {skills.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#FF4D00' }}
              className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
              <div className="mb-4 inline-block p-3 rounded-full bg-orange-50 dark:bg-gray-900">
                <category.icon className="w-8 h-8 text-[#FF4D00]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;