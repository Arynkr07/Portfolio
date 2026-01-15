import React from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import resume from '../assets/resume.pdf';

// --- IMAGE IMPORT ---
// We use '..' to go up from 'components' folder, then into 'assets'
// import profileImg from '../assets/Snapchat-1714104311.jpg'; 

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#FF3D00] rounded-full blur-[150px] opacity-20 dark:opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* --- LEFT CONTENT --- */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-12 md:mt-0">
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF3D00] font-bold tracking-widest uppercase text-lg"
          >
            Hello, Welcome
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            I'm <span className="text-[#FF3D00]">Aryan Kumar</span>
          </motion.h1>

          {/* Typewriter Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 flex justify-center md:justify-start gap-2"
          >
            <span className="opacity-70 mr-2">I am a</span>
            
            <span className="text-[#FF3D00]">
              <Typewriter
                options={{
                  strings: [
                    'Software Developer',
                    'Web Developer',
                    'Game Developer',
                    'Tech Enthusiast',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I don't just write code; I architect scalable digital solutions. 
            From interactive UIs to robust backends, I turn complex problems into elegant experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6 pt-6"
          >
            <a 
              href= {resume}
              download="resume"
              className="flex items-center gap-2 px-8 py-3 bg-[#FF3D00] text-white font-bold rounded-full shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </a>

            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/aryankr07/" className="text-gray-600 dark:text-gray-400 hover:text-[#FF3D00] dark:hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Arynkr07" className="text-gray-600 dark:text-gray-400 hover:text-[#FF3D00] dark:hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Github size={24} />
              </a>
              <a href="mailto:arynkr07@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FF3D00] dark:hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT IMAGE --- */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-[6px] border-gray-100 dark:border-[#FF3D00] shadow-[0_0_60px_-10px_rgba(255,61,0,0.3)] dark:shadow-[0_0_60px_-10px_rgba(255,61,0,0.5)] overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            
            {/* USING THE IMPORTED IMAGE VARIABLE HERE */}
            {/* <img
              src={profileImg} 
              alt="Aryan Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Home;