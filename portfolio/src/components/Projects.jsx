import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center uppercase tracking-wider"
        >
          Featured <span className="text-[#FF4D00]">Projects</span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10 }} // Lifts the card up on hover
              className="group bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-[#FF4D00] transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider ${
                    project.status === 'Completed' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-50 dark:bg-gray-900 text-[#FF4D00] rounded-full text-xs font-bold uppercase border border-orange-100 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-[#FF4D00] font-bold uppercase text-sm tracking-widest hover:underline decoration-2 underline-offset-4">
                  View Project &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;