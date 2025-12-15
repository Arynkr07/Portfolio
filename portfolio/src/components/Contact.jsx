import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Facebook, Linkedin, Twitter, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
  // --- FORM STATE ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // SIMULATING EMAIL SENDING (Replace this with EmailJS or a backend API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
      // Hide success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };
  
  // --- CONTACT DETAILS ---
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arynkr07@gmail.com",
      link: "mailto:arynkr07@gmail.com",
    },
    
    {
      icon: MapPin,
      title: "Location",
      value: "Patna, India",
      link: "#",
    }
  ];

  // --- SOCIAL PROFILES ---
  const socialLinks = [
    { icon: Github, url: "https://github.com/Arynkr07" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/aryankr07/" },
    { icon: Facebook, url: "https://facebook.com/" },
    { icon: Twitter, url: "https://twitter.com/" }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
            Get In <span className="text-[#FF3D00]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF3D00] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I am available for freelance work and full-time opportunities. Connect with me today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* --- LEFT COLUMN: INFO & SOCIALS (2/5 width) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-center gap-5 p-5 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#FF3D00] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-sm text-[#FF3D00] group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#FF3D00] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons Row */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-full border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#FF3D00] hover:text-white hover:border-[#FF3D00] transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: MESSAGE FORM (3/5 width) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-orange-500/5 relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#FF3D00] focus:ring-1 focus:ring-[#FF3D00] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#FF3D00] focus:ring-1 focus:ring-[#FF3D00] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#FF3D00] focus:ring-1 focus:ring-[#FF3D00] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-[#FF3D00] text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Overlay Animation */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-black/95 flex flex-col items-center justify-center text-center p-6 z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
        
        {/* --- FOOTER CREDIT --- */}
        <div className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-900 text-center">
            <p className="text-gray-500 dark:text-gray-600 text-sm">
                Designed & Built by <span className="text-[#FF3D00] font-bold">Aryan Kumar</span>
            </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;