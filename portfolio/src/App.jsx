import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <div id="hero" className="scroll-mt-20">
          <Hero />
        </div>
        
        {/* 2. Skills Section */}
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>

        {/* 3. Projects Section */}
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        
        {/* 4. Contact Section */}
        
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-100 dark:border-gray-900">
        <p>&copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;