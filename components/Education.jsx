import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "VIT College",
      year: "2023 - 2027",
      score: "CGPA: 8.3",
      status: "Pursuing",
      description: "Specializing in Computer Science & Engineering. Focusing on Data Structures, Algorithms, and Full Stack Development."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Gyan Niketan",
      year: "2022",
      score: "80.2%",
      status: "Completed",
      description: "Major in Science (Physics, Chemistry, Mathematics)."
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Gyan Niketan",
      year: "2020",
      score: "86%",
      status: "Completed",
      description: "Foundation in Mathematics and General Sciences."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
            Academic <span className="text-[#FF3D00]">Background</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF3D00] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-gray-200 dark:border-gray-800 ml-4 md:ml-10 space-y-12">
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot (The icon on the line) */}
              <div className="absolute -left-[22px] top-0 flex items-center justify-center w-11 h-11 bg-[#FF3D00] text-white rounded-full border-4 border-white dark:border-black shadow-lg">
                <GraduationCap size={20} />
              </div>

              {/* Content Card */}
              <div className="p-6 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:border-[#FF3D00] transition-colors duration-300 group">
                
                {/* Header: Degree & Year */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FF3D00] transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} className="mr-2" />
                    {item.year}
                  </div>
                </div>

                {/* Institution Name */}
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {item.institution}
                </h4>

                {/* Score Badge */}
                <div className="flex items-center mb-4">
                  <span className="flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-[#FF3D00] text-sm font-bold rounded-md">
                    <Star size={14} className="mr-1 fill-current" />
                    {item.score}
                  </span>
                  <span className="mx-3 text-gray-300 dark:text-gray-700">|</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{item.status}</span>
                </div>

                {/* Optional Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Education;