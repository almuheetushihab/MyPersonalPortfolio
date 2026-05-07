import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-[#252525]">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium mb-2 text-lg">Hi There <span className="animate-bounce inline-block">👋</span></p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            I'm <span className="text-gradient">Shihab</span><br/>
            <span className="text-2xl md:text-3xl font-light text-gray-300">{data.title}</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {data.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={data.socials.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#333] hover:bg-gray-700 border border-gray-600 rounded-full text-white font-medium transition-all">
              GitHub Profile
            </a>
            <a href="#contact" className="px-6 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-full transition-all shadow-lg shadow-yellow-500/20">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="w-full h-full rounded-full border-4 border-yellow-500/30 overflow-hidden relative z-10 bg-[#333]">
              {/* Note: Keep your profile image in frontend/public/images/Profile.png */}
              {/* Temporarily commented out until image is added */}
              {/* <img src="/images/Profile.png" alt="Shihab" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" /> */}
            </div>
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl -z-10 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;