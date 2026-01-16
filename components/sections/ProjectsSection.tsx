
import React from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Github, ExternalLink, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../SectionHeader';
import { staggerContainer, staggerItem } from '../../utils/animations';

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse tracking for spotlight
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={staggerItem}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col rounded-[2.5rem] bg-slate-900/30 border border-white/5 overflow-hidden transition-all duration-700 h-full smooth-animate hover:bg-slate-900/50"
    >
      {/* Dynamic Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-700 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${smoothX}px ${smoothY}px,
              rgba(56, 189, 248, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 p-8 md:p-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-sky-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-4 bg-slate-950/80 border border-white/10 rounded-2xl text-sky-400 group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-700">
              <Terminal size={24} />
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }} 
              href={project.githubUrl} 
              target="_blank" 
              className="p-3 rounded-xl bg-white/5 text-slate-500 hover:text-white border border-white/5 transition-all duration-300"
            >
              <Github size={18} />
            </motion.a>
            {project.demoUrl && (
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }} 
                href={project.demoUrl} 
                target="_blank" 
                className="p-3 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 transition-all duration-300"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors duration-500 tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="text-[9px] font-code px-3 py-1.5 rounded-lg bg-white/5 text-slate-500 border border-white/5 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.3 + idx * 0.1 }}
              className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => (
  <section id="projects" className="max-w-7xl mx-auto px-6">
    <SectionHeader title="Selected Works" subtitle="Proven track record of building reliable backend services" />
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {portfolioData.projects.map((project, idx) => (
        <ProjectCard key={project.id} project={project} idx={idx} />
      ))}
    </motion.div>
  </section>
);
