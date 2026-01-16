
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'hidden'>('default');
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Motion Values cho vị trí chuột (tốc độ xử lý thô)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Springs cho vòng ngoài - Dùng stiffness/damping cao hơn để bám sát và mượt hơn
  const ringX = useSpring(mouseX, { damping: 40, stiffness: 600, mass: 0.2 });
  const ringY = useSpring(mouseY, { damping: 40, stiffness: 600, mass: 0.2 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    // Cập nhật giá trị ngay lập tức, bỏ qua render React cho vị trí
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    const target = e.target as HTMLElement;
    const interactive = target.closest('a, button, [role="button"], .cursor-pointer, .interactive');
    
    if (interactive) {
      setCursorType('pointer');
    } else if (target.closest('h1, h2, h3, h4, p, span, li')) {
      setCursorType('text');
    } else {
      setCursorType('default');
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Sử dụng event listener với priority cao
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', () => setIsMouseDown(true));
    window.addEventListener('mouseup', () => setIsMouseDown(false));
    document.body.addEventListener('mouseleave', () => setCursorType('hidden'));
    document.body.addEventListener('mouseenter', () => setCursorType('default'));

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden">
      {/* 1. Core Dot - Zero Lag */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-sky-400 rounded-full mix-blend-screen smooth-animate shadow-[0_0_15px_rgba(56,189,248,1)]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* 2. Intelligent Outer Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-sky-500/30 flex items-center justify-center smooth-animate"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: '-50%', 
          translateY: '-50%' 
        }}
        animate={{
          width: cursorType === 'pointer' ? 80 : cursorType === 'text' ? 2 : 36,
          height: cursorType === 'pointer' ? 80 : cursorType === 'text' ? 50 : 36,
          borderRadius: cursorType === 'text' ? '2px' : '50%',
          opacity: cursorType === 'hidden' ? 0 : 1,
          borderWidth: cursorType === 'text' ? '1.5px' : '1px',
          borderColor: cursorType === 'pointer' ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.2)',
          scale: isMouseDown ? 0.8 : 1,
          backgroundColor: cursorType === 'pointer' ? 'rgba(56, 189, 248, 0.05)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      >
        <AnimatePresence>
          {cursorType === 'pointer' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-sky-400/50" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-sky-400/50" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-sky-400/50" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-sky-400/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
