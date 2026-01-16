// src/components/sections/Projects.tsx
import { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Github, ExternalLink, Eye, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import GalleryModal from '../ui/GalleryModal'; // Asegúrate de haber creado este componente

const Projects = () => {
  // Estado para controlar qué proyecto mostrar en la galería
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="projects" className="py-24 px-4 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Título con Revelado Suave */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
            Proyectos <span className="text-zinc-500">Seleccionados</span>
          </h2>
          <div className="h-1 w-20 bg-zinc-800 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0d0d0d] border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-500 flex flex-col min-h-[350px]"
            >
              {/* Efecto de luz interna en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    {/* Indicador de cantidad de fotos si hay galería */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-600 mt-1 uppercase tracking-widest">
                        <ImageIcon size={10} />
                        <span>{project.gallery.length} capturas</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Link externo rápido si existe */}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="text-zinc-500 mb-6 text-sm leading-relaxed font-light flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-zinc-900/50 text-zinc-500 border border-zinc-800/50 rounded-md text-[10px] font-mono uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800/30">
                  
                  {/* BOTÓN PRINCIPAL: Visualizar */}
                  {project.gallery && project.gallery.length > 0 && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-black hover:bg-white rounded-xl transition-all text-[11px] font-bold uppercase tracking-widest shadow-lg"
                    >
                      <Eye size={14} /> Visualizar
                    </button>
                  )}

                  {/* BOTÓN SECUNDARIO: GitHub */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500 rounded-xl transition-all text-[11px] font-bold uppercase tracking-widest"
                    >
                      <Github size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* RENDERIZADO DEL MODAL 
          Se coloca fuera del loop para mejor rendimiento.
      */}
      <GalleryModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject?.title || ''}
        images={selectedProject?.gallery}
      />
    </section>
  );
};

export default Projects;