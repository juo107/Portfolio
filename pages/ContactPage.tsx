
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ContactPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="max-w-5xl mx-auto py-12 md:py-20 px-6"
  >
    <div className="text-center mb-12 md:mb-20">
      <motion.div 
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="inline-block p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-sky-500 to-indigo-600 text-white mb-6 md:mb-10 shadow-2xl shadow-sky-500/20"
      >
        <Mail size={32} className="md:w-12 md:h-12" strokeWidth={1.5} />
      </motion.div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">Let's build something <span className="text-sky-400 underline decoration-sky-500/30 underline-offset-8">great</span> together</h2>
      <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
        I'm currently looking for an Intern/Fresher position where I can grow and contribute to high-impact projects.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {[
        { 
          label: 'Email', 
          value: portfolioData.contact.email, 
          icon: <Mail size={24} className="md:w-8 md:h-8" />, 
          url: `mailto:${portfolioData.contact.email}`,
          color: 'group-hover:text-sky-400'
        },
        { 
          label: 'LinkedIn', 
          value: 'vinh-dotnet', 
          icon: <Linkedin size={24} className="md:w-8 md:h-8" />, 
          url: portfolioData.contact.linkedin,
          color: 'group-hover:text-blue-500'
        },
        { 
          label: 'GitHub', 
          value: 'quangvinh-dev', 
          icon: <Github size={24} className="md:w-8 md:h-8" />, 
          url: portfolioData.contact.github,
          color: 'group-hover:text-white'
        }
      ].map((item, idx) => (
        <motion.a 
          key={item.label}
          href={item.url}
          target={idx > 0 ? "_blank" : "_self"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1 }}
          className="flex flex-col items-center text-center gap-4 md:gap-6 p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-all group shadow-xl"
        >
          <div className={`text-slate-500 transition-all duration-500 group-hover:scale-110 ${item.color}`}>
            {item.icon}
          </div>
          <div className="overflow-hidden w-full px-2">
            <span className="block font-code text-[10px] md:text-xs uppercase text-slate-500 tracking-widest mb-1">{item.label}</span>
            <span className="block font-bold text-sm md:text-lg text-slate-200 truncate">{item.value}</span>
          </div>
        </motion.a>
      ))}
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-12 md:mt-20 p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl md:rounded-[4rem] text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-sky-500/5 blur-[80px] -z-10" />
      <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Start a conversation</h3>
      <p className="text-slate-400 text-sm md:text-base mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <motion.a 
        href={`mailto:${portfolioData.contact.email}`} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 rounded-full bg-white text-slate-950 font-black hover:bg-sky-400 hover:text-white transition-all shadow-2xl shadow-white/5 group text-sm md:text-base"
      >
        Say Hello <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
      </motion.a>
    </motion.div>
  </motion.div>
);
