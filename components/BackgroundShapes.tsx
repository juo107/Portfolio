
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <motion.div 
      animate={{ 
        y: [0, 50, 0], 
        x: [0, 30, 0],
        rotate: [0, 10, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-sky-500/5 blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        y: [0, -70, 0], 
        x: [0, -40, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" 
    />
  </div>
);
