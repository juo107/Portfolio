
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const ContactSection = () => (
  <section id="contact" className="max-w-7xl mx-auto px-6">
    <motion.div 
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className="grid lg:grid-cols-2 gap-16 items-center"
    >
      <div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-code uppercase tracking-widest mb-10"
        >
          <MessageSquare size={14} /> Available for new roles
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-8">
          LET'S BUILD <br />
          <span className="radiant-text">SYSTEMS</span> <br />
          TOGETHER.
        </h2>
        
        <p className="text-slate-400 text-xl max-w-lg leading-relaxed mb-12">
          Hợp tác cùng tôi để xây dựng những hệ thống Backend mạnh mẽ, an toàn và sẵn sàng cho quy mô lớn.
        </p>

        <motion.div 
          variants={staggerContainer}
          className="flex flex-wrap gap-4"
        >
          {[
            { icon: <Mail />, url: `mailto:${portfolioData.contact.email}`, color: 'bg-white text-slate-950 hover:bg-sky-400 hover:text-white' },
            { icon: <Linkedin />, url: portfolioData.contact.linkedin, color: 'bg-slate-900 text-white hover:bg-blue-600' },
            { icon: <Github />, url: portfolioData.contact.github, color: 'bg-slate-900 text-white hover:bg-white hover:text-slate-950' }
          ].map((item, i) => (
            <motion.a 
              key={i}
              variants={staggerItem}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={item.url}
              target="_blank"
              className={`p-6 rounded-3xl transition-all duration-300 shadow-xl ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="glass-card p-12 rounded-[4rem] border-white/5 relative z-10">
          <div className="space-y-10">
            <div>
              <span className="block font-code text-xs text-slate-500 uppercase tracking-widest mb-4">Direct Channel</span>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-2xl md:text-3xl font-bold text-white hover:text-sky-400 transition-colors break-all">
                {portfolioData.contact.email}
              </a>
            </div>
            <div>
              <span className="block font-code text-xs text-slate-500 uppercase tracking-widest mb-4">Current Location</span>
              <p className="text-2xl md:text-3xl font-bold text-white">Da Nang, VN</p>
            </div>
            <div className="pt-10 border-t border-white/5">
              <p className="text-slate-500 text-sm leading-relaxed">
                Đang tìm kiếm cơ hội thực tập hoặc Fresher .NET để đóng góp giá trị cho dự án thực tế.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements behind the card */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-500/10 blur-[100px] -z-10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10 rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);
