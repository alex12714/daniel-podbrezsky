import React from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#C2185B', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#D81B60', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#AD1457', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <polygon points="0,0 800,0 400,600" fill="url(#grad1)" opacity="0.4" />
            <polygon points="1920,0 1200,400 1920,800" fill="url(#grad1)" opacity="0.3" />
            <polygon points="0,1080 600,800 0,400" fill="url(#grad1)" opacity="0.35" />
            <polygon points="1920,1080 1400,1080 1600,600" fill="url(#grad1)" opacity="0.4" />
            <polygon points="960,200 1200,600 720,800" fill="#E91E63" opacity="0.15" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          {personalInfo.tagline}
        </p>
        
        <div className="flex justify-center items-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#C2185B] to-[#E91E63] hover:from-[#AD1457] hover:to-[#D81B60] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(233,30,99,0.6)]"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-12 text-gray-400">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#E91E63] transition-colors duration-300">
            {personalInfo.email}
          </a>
          <span className="text-gray-600">•</span>
          <a href={`tel:${personalInfo.phone}`} className="hover:text-[#E91E63] transition-colors duration-300">
            {personalInfo.phone}
          </a>
          <span className="text-gray-600">•</span>
          <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E91E63] transition-colors duration-300">
            {personalInfo.website}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#E91E63] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#E91E63] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;