
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../SectionHeader';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const SkillsSection = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Backend': return <Layers className="text-sky-400" />;
      case 'Database': return <Database className="text-indigo-400" />;
      case 'Frontend': return <Layout className="text-emerald-400" />;
      case 'Tools': return <Settings className="text-amber-400" />;
      default: return <Code2 />;
    }
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Stack Công Nghệ" subtitle="My weapons of choice for modern backend development" />

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {portfolioData.skills.map((category, idx) => (
          <motion.div 
            key={category.name} 
            variants={staggerItem}
            className="glass-card p-10 rounded-[2.5rem] md:rounded-[3.5rem] group hover:bg-white/[0.04] transition-all duration-500 border border-white/5 hover:border-white/10"
          >
            <div className="flex items-center gap-6 mb-12">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="p-5 rounded-2xl bg-slate-900 border border-white/5 group-hover:border-sky-500/30 shadow-xl transition-all"
              >
                {getIcon(category.name)}
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white">{category.name}</h3>
                <p className="text-[10px] font-code text-slate-500 uppercase tracking-widest mt-1">Specialization</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.span 
                  key={skill} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: idx * 0.1 + sIdx * 0.05 
                  }}
                  whileHover={{ y: -5, backgroundColor: "rgba(56, 189, 248, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)", color: "#38bdf8" }}
                  className="px-5 py-3 text-sm font-bold bg-slate-900/80 text-slate-400 border border-white/5 rounded-2xl transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
