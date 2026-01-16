
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { MagneticWrapper } from './MagneticWrapper';
import { VisitorCounter } from './VisitorCounter';

export const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="flex flex-col items-center mb-12">
        <VisitorCounter />
      </div>

      <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-10">
        {[
          { icon: <Github size={28} />, url: portfolioData.contact.github, color: 'hover:text-white' },
          { icon: <Linkedin size={28} />, url: portfolioData.contact.linkedin, color: 'hover:text-blue-400' },
          { icon: <Mail size={28} />, url: `mailto:${portfolioData.contact.email}`, color: 'hover:text-sky-400' }
        ].map((item, idx) => (
          <MagneticWrapper key={idx} strength={0.4}>
            <motion.a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`text-slate-500 transition-colors p-4 block ${item.color}`}
            >
              {item.icon}
            </motion.a>
          </MagneticWrapper>
        ))}
      </div>
      
      <div className="space-y-4">
        <p className="text-slate-500 text-xs font-code tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Engineered with <span className="text-sky-500">.NET Core</span> Philosophy
        </p>
        <p className="text-slate-600 text-[10px] font-code tracking-widest uppercase">
          Deployed by <span className="text-slate-400 font-bold">{portfolioData.name}</span>
        </p>
      </div>
    </div>
    
    {/* Decorative background pulse */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent shadow-[0_0_50px_rgba(56,189,248,0.1)]" />
  </footer>
);
