
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, Database, Server, Code2, ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, staggerItem } from '../utils/animations';
import { MagneticWrapper } from '../components/MagneticWrapper';

import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll transform with spring physics
  const rawY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const yBg = useSpring(rawY, { stiffness: 100, damping: 30 });

  return (
    <div className="relative z-10">
      {/* Scroll Progress Bar - Smooth as 120fps */}
      <motion.div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 hidden md:flex">
        <span className="text-[9px] font-code text-sky-500/50 rotate-90 mb-8 uppercase tracking-[0.4em]">Index</span>
        <div className="w-[2px] h-32 bg-white/5 relative rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-sky-500 origin-top"
            style={{ 
              scaleY: useSpring(scrollYProgress, { stiffness: 200, damping: 50 }) 
            }}
          />
        </div>
      </motion.div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
        <motion.div 
          style={{ y: yBg, opacity: 0.03 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[-1]"
        >
          <h1 className="text-[22vw] font-black uppercase tracking-tighter leading-none smooth-animate">BACKEND</h1>
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-20 flex flex-col items-center w-full max-w-[95rem]"
        >
          <motion.div 
            variants={staggerItem} 
            className="mb-10 flex items-center gap-3 px-6 py-2.5 rounded-full bg-sky-500/5 border border-sky-500/20 text-sky-400 text-[10px] md:text-xs font-code uppercase tracking-[0.5em] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Core_Engine_Stable
          </motion.div>
          
          <div className="mb-12 perspective-2000">
            <motion.h1 
              variants={staggerItem}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black tracking-tighter leading-[0.9] text-white smooth-animate"
            >
              {portfolioData.name.split(" ").map((n, i) => (
                <span key={i} className={i === 2 ? "radiant-text inline-block" : "opacity-95 mx-2 inline-block"}>
                  {n}
                </span>
              ))}
            </motion.h1>
          </div>
          
          <motion.p 
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-500 max-w-4xl mx-auto mb-20 tracking-tight leading-snug smooth-animate"
          >
            Architecting <span className="text-white">robust digital ecosystems</span> where performance meets high-level security.
          </motion.p>
          
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-6 px-6">
            <MagneticWrapper strength={0.3}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-6 rounded-2xl bg-white text-slate-950 font-black transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-sky-500/20 hover:bg-sky-400 hover:text-white text-base smooth-animate"
              >
                DEPLOYMENTS <ArrowDownRight size={22} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              </button>
            </MagneticWrapper>
            
            <MagneticWrapper strength={0.3}>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 rounded-2xl border border-white/10 text-white font-bold transition-all bg-white/5 backdrop-blur-md hover:bg-white/10 text-base smooth-animate"
              >
                CONNECT_NODE
              </button>
            </MagneticWrapper>
          </motion.div>
        </motion.div>
      </section>

      <div className="space-y-40 md:space-y-64 pb-32">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};
