
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <motion.div 
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, margin: "-100px" }}
    className="mb-12 md:mb-20 px-2"
  >
    <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter whitespace-nowrap text-white"
      >
        {title}
      </motion.h2>
      <div className="flex-1 relative h-px">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-transparent origin-left"
        />
      </div>
    </div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-slate-500 mt-4 font-code text-xs sm:text-sm tracking-[0.2em] uppercase"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);
