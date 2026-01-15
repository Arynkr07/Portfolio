import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home'); // Tracks the current active ID

  // --- 1. THEME LOGIC ---
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // --- 2. SCROLL STYLE LOGIC ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 3. SCROLL SPY LOGIC (The Highlight Feature) ---
  useEffect(() => {
    // Select all sections that match our nav links
    const sections = document.querySelectorAll('section[id], div[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in the middle of the viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger exactly when the section is in the middle
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // --- ANIMATIONS ---
  const rubberBand = {
    rest: { scale: 1, color: 'inherit' },
    hover: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certificate', href: '#Certificate', id: 'certificate' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const nameChars = "Aryan".split("");

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'dark:bg-black/90 bg-white/90 backdrop-blur-md shadow-lg' : 'dark:bg-transparent bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer">
            <a href="#home" className="flex items-center gap-1 group">
              <span className="text-3xl font-extrabold tracking-tighter flex">
                {nameChars.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={rubberBand}
                    initial="rest"
                    whileHover="hover"
                    className={`inline-block cursor-default ${
                      index < 3 ? 'dark:text-white text-black' : 'text-[#FF3D00]'
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-[#FF3D00] mt-4 ml-1"
              ></motion.span>
            </a>
          </div>

          {/* DESKTOP MENU WITH ACTIVE HIGHLIGHT */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-[#FF3D00]'
                    : 'dark:text-gray-300 text-gray-700 hover:text-[#FF3D00]'
                }`}
              >
                {link.name}
                
                {/* SLIDING UNDERLINE ANIMATION */}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#FF3D00]"
                  ></motion.span>
                )}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-[#FF3D00] text-white text-sm font-bold uppercase rounded hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Hire Me!
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white hover:text-[#FF3D00]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white dark:bg-black border-t dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`block text-base font-bold uppercase ${
                    activeSection === link.id ? 'text-[#FF3D00]' : 'dark:text-white text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)} 
                  className="block w-full text-center py-3 bg-[#FF3D00] text-white font-bold uppercase rounded"
                >
                  Hire Me!
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;