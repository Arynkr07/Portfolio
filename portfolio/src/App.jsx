import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    // Main Wrapper: Controls the global background color (White vs Pitch Black)
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      
      <Navbar />

      <main className="relative">
        {/* Added 'scroll-mt-24' to all sections. 
          This creates invisible padding at the top when you click a nav link,
          so the fixed Navbar doesn't cover the content.
        */}
        
        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>
        
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>

        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        
        {/* Contact Section - Redesigned for Black/Orange Theme */}
        <div id="contact" className="scroll-mt-24 py-24 flex items-center justify-center bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="text-center px-6">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
               Get In <span className="text-[#FF4D00]">Touch</span>
             </h2>
             
             <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
               I am currently looking for new opportunities as a Software Developer. 
               Whether you have a question or just want to say hi, my inbox is always open!
             </p>
             
             <a 
               href="mailto:aryan@example.com" 
               className="inline-block px-10 py-4 bg-[#FF4D00] text-white font-bold text-lg uppercase tracking-widest rounded shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-orange-500/20"
             >
               Say Hello
             </a>
          </div>
        </div>
      </main>

      {/* Optional: Simple Copyright Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-600 dark:bg-black">
        <p>&copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;