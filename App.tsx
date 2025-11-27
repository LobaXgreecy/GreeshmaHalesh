import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './components/ScrollReveal';
import { ProjectCard } from './components/ProjectCard';
import { ChatWidget } from './components/ChatWidget';
import { PROFILE, EXPERIENCE, PROJECTS, EDUCATION, SOCIALS } from './constants';
import { ArrowDown, Mail, Download, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const CATEGORIES = ["All", "AI/ML", "Blockchain", "Data Viz", "Web Dev"];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky nav appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        const tags = p.technologies.join(' ').toLowerCase();
        if (activeCategory === "AI/ML") return tags.includes('ai') || tags.includes('machine') || tags.includes('tensor') || tags.includes('gemini');
        if (activeCategory === "Blockchain") return tags.includes('blockchain') || tags.includes('solidity');
        if (activeCategory === "Data Viz") return tags.includes('map') || tags.includes('dashboard') || tags.includes('viz');
        if (activeCategory === "Web Dev") return tags.includes('react') || tags.includes('web');
        return false;
    });

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-white selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-20">
         {/* Top Nav */}
         <nav className="flex justify-between items-start animate-fade-in">
            <div className="text-sm font-bold tracking-widest uppercase">
                Greeshma Kadur Halesh<br/>
                <span className="text-gray-500 font-normal">Portfolio 2025</span>
            </div>
            <div className="flex gap-4">
                {SOCIALS.map(s => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        {s.platform === 'LinkedIn' ? <Linkedin size={20} /> : s.platform === 'GitHub' ? <Github size={20} /> : <Mail size={20} />}
                    </a>
                ))}
            </div>
         </nav>

         {/* Hero Content */}
         <div className="mt-20 md:mt-0">
             <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter mix-blend-difference animate-slide-up">
                DATA<br/>
                <span className="text-gray-600">SCIENCE</span><br/>
                & BEYOND
             </h1>
             <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                 <p className="max-w-md text-lg text-gray-400 leading-relaxed">
                    {PROFILE.bio}
                 </p>
                 <div className="flex items-center gap-4">
                     <a 
                        href="#work" 
                        onClick={(e) => handleSmoothScroll(e, 'work')}
                        className="cursor-pointer flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all"
                     >
                        View Projects <ArrowDown size={16} />
                     </a>
                     <a href="/resume.pdf" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors pb-1">
                        Resume <Download size={16} />
                     </a>
                 </div>
             </div>
         </div>
      </section>

      {/* 2. STICKY FILTER PILL NAV */}
      <div className={`sticky top-8 z-40 flex justify-center pointer-events-none transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
         <div className="pointer-events-auto bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-2xl flex gap-1">
             {CATEGORIES.map(cat => (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                        px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${activeCategory === cat 
                            ? 'bg-white text-black shadow-lg' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    `}
                 >
                     {cat}
                 </button>
             ))}
         </div>
      </div>

      {/* 3. PROJECTS SHOWCASE */}
      <section id="work" className="scroll-mt-12 px-6 md:px-12 lg:px-20 py-32 max-w-[1800px] mx-auto">
        <ScrollReveal>
             <div className="mb-20 border-b border-white/10 pb-8 flex justify-between items-end">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">SELECTED<br/>WORK</h2>
                <span className="text-gray-500 text-xl font-mono hidden md:block">01 — {filteredProjects.length.toString().padStart(2, '0')}</span>
             </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {filteredProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx % 2 * 100} className={idx % 2 !== 0 ? "md:mt-32" : ""}>
                    <ProjectCard project={project} />
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION - SPLIT LAYOUT */}
      <section className="bg-[#0a0a0a] px-6 md:px-12 lg:px-20 py-32 border-t border-white/5">
         <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Experience Column */}
            <div>
                <ScrollReveal>
                    <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                        Experience <span className="text-sm font-normal text-gray-500 px-3 py-1 border border-white/10 rounded-full">04 Years</span>
                    </h2>
                </ScrollReveal>
                <div className="space-y-12">
                    {EXPERIENCE.map((exp, i) => (
                        <ScrollReveal key={exp.id} delay={i * 100}>
                            <div className="group border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
                                <span className="text-xs font-mono text-gray-500 mb-2 block">{exp.period}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                <div className="text-lg text-gray-400 mt-1 mb-4">{exp.company}</div>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{exp.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

             {/* Education Column */}
             <div>
                <ScrollReveal delay={200}>
                    <h2 className="text-4xl font-bold mb-12">Education</h2>
                </ScrollReveal>
                <div className="space-y-12">
                    {EDUCATION.map((edu, i) => (
                        <ScrollReveal key={edu.id} delay={i * 100 + 200}>
                             <div className="relative pb-12 border-b border-white/10 last:border-0">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{edu.gpa}</span>
                                </div>
                                <div className="text-gray-400 mb-4">{edu.institution}</div>
                                <div className="text-sm text-gray-600 font-mono">{edu.period}</div>
                                <div className="mt-4 text-sm text-gray-500">
                                    <strong className="text-gray-400">Focus:</strong> {edu.coursework}
                                </div>
                             </div>
                        </ScrollReveal>
                    ))}
                </div>
             </div>

         </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/10 bg-black">
         <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
                <div>
                    <h2 className="text-[8vw] leading-none font-bold tracking-tighter text-white mb-8">
                        LET'S<br/>TALK
                    </h2>
                    <a href="mailto:greeshmakh3@gmail.com" className="inline-flex items-center gap-3 text-2xl hover:text-blue-500 transition-colors">
                        greeshmakh3@gmail.com <ArrowRight />
                    </a>
                </div>
                <div className="flex gap-8 text-sm text-gray-500">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Socials</span>
                        {SOCIALS.map(s => (
                            <a key={s.platform} href={s.url} className="hover:text-white transition-colors">{s.platform}</a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Location</span>
                        <span>Liverpool, UK</span>
                        <span>Open to Relocate</span>
                    </div>
                </div>
            </div>
            <div className="mt-24 flex justify-between text-xs text-gray-700 uppercase tracking-widest">
                <span>© 2025 Greeshma Kadur Halesh</span>
                <span>Designed & Developed with AI</span>
            </div>
         </ScrollReveal>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;