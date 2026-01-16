
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core', id: 'hero' },
    { name: 'Philosophy', id: 'about' },
    { name: 'Stack', id: 'skills' },
    { name: 'Deployments', id: 'projects' },
    { name: 'Node', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between h-16 md:h-20 px-6 md:px-10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 border border-white/5 ${
          scrolled ? 'bg-slate-950/60 backdrop-blur-3xl shadow-2xl' : 'bg-transparent'
        }`}>
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <Rocket size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-xl md:text-2xl tracking-tighter text-white uppercase leading-none">
                Vinh<span className="text-sky-500">.</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-code text-slate-500 tracking-[0.2em] md:tracking-[0.3em] uppercase">Architecture</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeSection === link.id ? 'text-white' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 bg-white/5 rounded-xl border border-white/5"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 p-6 rounded-[2rem] bg-slate-900 border border-white/10 shadow-3xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-6 py-4 rounded-xl text-lg font-black uppercase tracking-tighter text-left ${
                    activeSection === link.id ? 'bg-sky-500 text-white' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
