
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../SectionHeader';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export const AboutSection = () => (
  <section id="about" className="max-w-7xl mx-auto px-6">
    <SectionHeader title="The Engineer" subtitle="Philosophy & Core Competencies" />
    
    <div className="grid lg:grid-cols-4 gap-6">
      {/* Profile Photo Bento Card - Now always in color */}
      <motion.div 
        {...fadeInUp}
        className="lg:col-span-1 h-full min-h-[400px] rounded-[3rem] bg-slate-900 border border-white/5 relative overflow-hidden group shadow-2xl"
      >
        <img 
          src={portfolioData.avatarUrl} 
          alt="Profile" 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 z-20">
           <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-code text-emerald-400 uppercase tracking-widest font-bold">Node_Active</span>
           </div>
           <h4 className="text-xl font-bold text-white uppercase tracking-tighter">System_Verified</h4>
        </div>
      </motion.div>

      {/* Main Bio Card */}
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="lg:col-span-3 p-10 md:p-14 rounded-[3rem] bg-slate-900/40 border border-white/5 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-8 text-sky-500/10 group-hover:text-sky-500/20 transition-colors">
          <Cpu size={120} strokeWidth={1} />
        </div>
        
        <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] text-white mb-8 tracking-tighter">
          Mastering the <span className="text-sky-500">Unseen</span> Layer of Software Architecture.
        </h3>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl">
          {portfolioData.aboutMe}
        </p>
      </motion.div>

      {/* Philosophy Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { title: 'Security', icon: ShieldCheck, color: 'text-emerald-400' },
          { title: 'Performance', icon: Zap, color: 'text-amber-400' },
          { title: 'Scalability', icon: Globe, color: 'text-sky-400' },
          { title: 'Clean Code', icon: Code2, color: 'text-indigo-400' }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-sky-500/20 hover:bg-white/[0.05] transition-all text-center group"
          >
            <item.icon className={`${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={28} />
            <span className="text-sm font-bold text-slate-300 group-hover:text-white">{item.title}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Core Strengths Card */}
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="lg:col-span-1 p-10 rounded-[3rem] bg-gradient-to-br from-sky-500/10 to-indigo-500/5 border border-white/5 flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-8">
          <Terminal size={24} className="text-sky-500" />
          <h4 className="text-xl font-bold uppercase tracking-widest text-[10px] font-code opacity-50">Core_Stack</h4>
        </div>
        <ul className="space-y-4">
          {portfolioData.strengths.slice(0, 4).map((s, i) => (
            <li key={i} className="flex gap-4 items-start group">
              <span className="text-sky-500 font-code font-bold text-xs">0{i+1}</span>
              <p className="text-slate-300 text-xs font-medium leading-tight group-hover:text-white transition-colors">
                {s}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);
