import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeLink, setActiveLink] = useState('#hero'); // Track active section

  // Scroll Detection & Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Logic
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // ANIMATION: Rubber Band Name
  const rubberBand = {
    rest: { scale: 1, color: 'inherit' },
    hover: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
            <a href="#hero" className="flex items-center gap-1 group">
              <span className="text-3xl font-extrabold tracking-tighter flex">
                {nameChars.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={rubberBand}
                    initial="rest"
                    whileHover="hover"
                    className={`inline-block cursor-default ${
                      index < 3 ? 'dark:text-white text-black' : 'text-[#FF4D00]'
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-[#FF4D00] mt-4 ml-1"
              ></motion.span>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide dark:text-gray-300 text-gray-700 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
              >
                {link.name}
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
              className="px-6 py-2 bg-[#FF4D00] text-white text-sm font-bold uppercase rounded hover:bg-orange-600 transition-colors"
            >
              Hire Me!
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white hover:text-[#FF4D00]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-base font-bold uppercase dark:text-white text-gray-900 hover:text-[#FF4D00]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;