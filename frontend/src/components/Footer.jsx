import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Daniel Podbrezsky • All rights reserved
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-[#E91E63] hover:bg-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.4)] hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-[#E91E63] hover:bg-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.4)] hover:scale-110"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-[#E91E63] hover:bg-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.4)] hover:scale-110"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;