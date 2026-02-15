// src/components/sections/About.tsx
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Code2, BookOpen, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Título Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">
            Mi <span className="text-zinc-500">Trayectoria</span>
          </h2>
          <div className="h-1 w-16 bg-zinc-800 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card: Experiencia */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full border-zinc-800/50 bg-zinc-900/20 group">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Experiencia Actual</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    Actualmente me desempeño como <strong className="text-zinc-200">Developer Full Stack</strong> en <span className="text-zinc-100">Onnix</span>, gestionando módulos financieros con <span className="font-mono text-xs">MVC, PHP, Framework Laravel, Pgsql, MySQL, jQuery y AJAX</span>.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card: Educación */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full border-zinc-800/50 bg-zinc-900/20 group">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Educación</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    Estudiante de <strong className="text-zinc-200">Análisis de Sistemas</strong> en la <span className="text-zinc-100">Universidad Iberoamericana</span>, enfocado en arquitectura de software y metodologías ágiles.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card: Stack */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full border-zinc-800/50 bg-zinc-900/20 group">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Stack Tecnológico</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    Dominio de <span className="text-zinc-200">PHP (Laravel), JavaScript (React, jQuery)</span> y <span className="text-zinc-200">MySQL</span>. Experiencia en despliegues con WinSCP y Git.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card: Objetivos */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full border-zinc-800/50 bg-zinc-900/20 group">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Objetivos</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    Mi meta es evolucionar a <strong className="text-zinc-200">Full Stack Master</strong>, migrando mi stack hacia el ecosistema moderno de <span className="text-zinc-100">React y Node.js</span>.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;