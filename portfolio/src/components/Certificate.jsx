import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Download, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import awst from '../assets/awst.jpg';
import awsf from '../assets/awsf.jpg';
import aws2 from '../assets/aws2.jpg';
import cloud from '../assets/cloud.jpg';
import Coursera from '../assets/Coursera.jpg';
import full from '../assets/full.jpg';
import intellipaat from '../assets/intellipaat.jpg';
import ibm from '../assets/ibm.jpg';
import nestle from '../assets/nestle.jpg';
// --- DATA ---
const certificates = [
  {
    id: 1,
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    date: "Aug 2024",
    // Placeholder image - replace with your actual file path like "../assets/aws-cert.jpg"
    image: cloud,
    downloadLink: "#" 
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    issuer: "Forage by Meta",
    date: "Dec 2023",
    image: awsf,
    downloadLink: "#"
  },
  {
    id: 3,
    title: "React (Basic) Certificate",
    issuer: "HackerRank",
    date: "Sep 2023",
    image: aws2,
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "July 2023",
    image: awst,
    downloadLink: "#"
  },
  {
    id: 4,
    title: "AML",
    issuer: "Coursera",
    date: "July 2023",
    image: Coursera,
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Applied Machine Learning",
    issuer: "ML",
    date: "July 2023",
    image: full,
    downloadLink: "#"
  },
  {
    id: 6,
    title: "AWS ",
    issuer: "Intellipaat",
    date: "June 2023",
    image: intellipaat,
    downloadLink: "#"
  },
  {
    id: 7,
    title: "Data Analytics",
    issuer: "IBM",
    date: "June 2023",
    image: ibm ,
    downloadLink: "#"
  },
  {
    id: 8,
    title: "E - learning Nestle",
    issuer: "Nestle",
    date: "June 2023",
    image: nestle ,
    downloadLink: "#"
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger effect: cards appear one by one
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="certificates" className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
              My <span className="text-[#FF3D00]">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF3D00] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Credentials that validate my technical expertise.
            </p>
          </motion.div>
        </div>

        {/* --- CERTIFICATES GRID --- */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 cursor-pointer hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              
              {/* Image Area with Overlay */}
              <div className="h-56 overflow-hidden relative bg-gray-100 dark:bg-black">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                  <Award className="text-[#FF3D00] w-10 h-10" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm bg-[#FF3D00] px-4 py-1 rounded-full">
                    View Credential
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 relative">
                {/* Decorative glow line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#FF3D00] transition-all duration-500 group-hover:w-full"></div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF3D00] transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-[#FF3D00]" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCert.title}</h3>
                  <p className="text-[#FF3D00] font-medium">{selectedCert.issuer}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#FF3D00] hover:text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content (Image) */}
              <div className="p-6 bg-gray-50 dark:bg-black flex justify-center items-center min-h-[400px]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-h-[60vh] w-auto object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                 <span className="text-sm text-gray-500">Issued: {selectedCert.date}</span>
                 <a 
                  href={selectedCert.downloadLink} 
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF3D00] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  <Download size={18} /> Download Certificate
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;