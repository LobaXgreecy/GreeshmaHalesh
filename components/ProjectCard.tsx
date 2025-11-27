import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative overflow-hidden mb-6 bg-gray-900 rounded-sm aspect-[4/3] md:aspect-[16/9]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Hover Overlay Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
            <ArrowUpRight size={24} className="text-black" />
        </div>
      </div>

      {/* Editorial Content */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
            <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-gray-400 transition-colors">
                {project.title}
            </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 my-2">
            {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full uppercase tracking-wider">
                {tech}
                </span>
            ))}
        </div>

        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            {project.description}
        </p>
      </div>
    </div>
  );
};