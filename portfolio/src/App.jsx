// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'; // <--- Import Contact

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      
      <Navbar />

      <main>
        {/* ... Previous Sections ... */}
        <div id="home" className="scroll-mt-20"><Hero /></div>
        <div id="education" className="scroll-mt-24"><Education /></div>
        <div id="Certificate" className="scroll-mt-24"><Certificate/></div>
        <div id="skills" className="scroll-mt-24"><Skills /></div>
        <div id="projects" className="scroll-mt-24"><Projects /></div>
        
        {/* ADD CONTACT COMPONENT HERE */}
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </main>

      {/* You can remove the footer from App.jsx since Contact.jsx now handles it */}
    </div>
  );
}

export default App;