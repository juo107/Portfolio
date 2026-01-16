
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card group flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-300 h-full cursor-pointer relative"
    >
      <div style={{ transform: "translateZ(50px)" }} className="p-8 md:p-10 flex flex-col h-full pointer-events-none">
        <div className="flex justify-between items-start mb-8 pointer-events-auto">
          <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
            <Cpu size={28} />
          </div>
          <div className="flex gap-3">
            <a href={project.githubUrl} target="_blank" className="p-2.5 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white transition-all">
              <Github size={20} />
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 hover:text-sky-300 transition-all">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors pointer-events-none">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-8 flex-grow pointer-events-none">
          {project.description}
        </p>

        <div className="pt-8 border-t border-white/5 flex flex-wrap gap-2 pointer-events-none">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-[10px] font-code px-3 py-1.5 rounded-lg bg-slate-900 text-slate-500 border border-white/5 group-hover:text-sky-400 transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="max-w-7xl mx-auto py-16 px-6"
  >
    <SectionHeader title="Dự án thực tế" subtitle="Engineering excellence in every line of code" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
      {portfolioData.projects.map((project, idx) => (
        <ProjectCard key={project.id} project={project} idx={idx} />
      ))}
    </div>
  </motion.div>
);
