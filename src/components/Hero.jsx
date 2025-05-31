import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-yellow-500">Yuwan Kavindu</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-10 max-w-3xl mx-auto">
          I'm a <span className="text-yellow-500">Full Stack Developer</span> passionate about creating beautiful and functional web experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:text-slate-900">Contact Me</a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero; 