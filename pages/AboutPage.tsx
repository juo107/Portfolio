
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ShieldCheck, Zap, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';

export const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="max-w-7xl mx-auto py-20 px-6"
  >
    <SectionHeader title="System Insights" subtitle="Deep dive into my engineering philosophy" />
    
    <div className="grid lg:grid-cols-12 gap-16 items-start">
      <div className="lg:col-span-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sky-500 to-transparent opacity-50" />
          <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-slate-100 mb-8">
            "I don't just write code; I design <span className="text-sky-500">scalable foundations</span> for digital evolution."
          </p>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl">
            {portfolioData.aboutMe}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Security First', icon: ShieldCheck, color: 'text-emerald-400', desc: 'Implementing robust Identity & JWT solutions.' },
            { title: 'Optimized Speed', icon: Zap, color: 'text-amber-400', desc: 'Database indexing and EF Core query tuning.' },
            { title: 'Scalable Architecture', icon: Globe, color: 'text-sky-400', desc: 'Building services ready for the modern cloud.' },
            { title: 'Clean Standards', icon: Code2, color: 'text-indigo-400', desc: 'Adhering to SOLID principles and DRY code.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
            >
              <item.icon className={`${item.color} mb-6 group-hover:scale-110 transition-transform`} size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-4 space-y-8"
      >
        <div className="glass-card p-10 rounded-[3rem] border-sky-500/10">
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="text-sky-500" />
            <h3 className="text-2xl font-bold">The Core</h3>
          </div>
          <ul className="space-y-6">
            {portfolioData.strengths.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-sky-500 font-code font-bold">0{i+1}.</span>
                <span className="text-slate-300 font-medium leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-1 rounded-[3rem] bg-gradient-to-br from-sky-500/20 to-indigo-500/20">
          <div className="bg-slate-950 p-10 rounded-[2.9rem] text-center">
            <h4 className="text-slate-500 uppercase font-code tracking-widest text-xs mb-4">Location</h4>
            <p className="text-white text-xl font-bold">Da Nang, Viet Nam</p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);
