import React from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className=" min-h-screen flex items-center pt-20 relative overflow-hidden">
      
      {/* Background Glow (Optional subtle effect) */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#FF3D00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* --- LEFT CONTENT --- */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-12 md:mt-0">
          
          {/* 1. GREETING */}
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
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            I'm <span className="text-[#FF3D00]">Aryan Kumar</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-300"
          >
            Software Developer
          </motion.h2>

          {/* 2. CATCHY LINE */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I don't just write code; I architect scalable digital solutions. 
            From interactive UIs to robust backends, I turn complex problems into elegant experiences.
          </motion.p>

          {/* 3. DOWNLOAD CV & SOCIALS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6 pt-6"
          >
            {/* Download Button */}
            <a 
              href="/resume.pdf"  // Make sure to put your actual resume.pdf in the 'public' folder
              download="Aryan_Kumar_Resume"
              className="flex items-center gap-2 px-8 py-3 bg-[#FF3D00] text-white font-bold rounded-full shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Github size={24} />
              </a>
              <a href="mailto:aryan@example.com" className="text-gray-400 hover:text-[#FF3D00] transition-colors hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT IMAGE (Circular Glow) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-[6px] border-[#FF3D00] shadow-[0_0_60px_-10px_rgba(255,61,0,0.5)] overflow-hidden bg-gray-900">
            {/* Replace with your actual image URL */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
              alt="Aryan Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;