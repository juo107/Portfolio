
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';

export const SkillsPage = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Backend': return <Layers className="text-sky-400" />;
      case 'Database': return <Database className="text-indigo-400" />;
      case 'Frontend': return <Layout className="text-emerald-400" />;
      case 'Tools': return <Settings className="text-amber-400" />;
      default: return <Code2 />;
    }
  };

  const getGlow = (name: string) => {
    switch (name) {
      case 'Backend': return 'shadow-sky-500/10';
      case 'Database': return 'shadow-indigo-500/10';
      case 'Frontend': return 'shadow-emerald-500/10';
      case 'Tools': return 'shadow-amber-500/10';
      default: return '';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <SectionHeader title="Stack Công Nghệ" subtitle="My weapons of choice for modern backend development" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.skills.map((category, idx) => (
          <motion.div 
            key={category.name} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-10 rounded-[3rem] group hover:shadow-2xl ${getGlow(category.name)} transition-all`}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-white/5 group-hover:scale-110 transition-transform shadow-xl">
                {getIcon(category.name)}
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight">{category.name}</h3>
                <p className="text-xs font-code text-slate-500 uppercase tracking-widest mt-1">Core Competencies</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-5 py-3 text-sm font-semibold bg-slate-900/50 text-slate-300 border border-white/5 rounded-2xl hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
