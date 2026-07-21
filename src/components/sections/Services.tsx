// src/components/sections/Services.tsx
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../constants';
import { SpotlightCard } from '../ui/SpotlightCard';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as const;

  return (
    <section id="services" className="py-24 px-4 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
            Servicios <span className="text-zinc-500">Tomcodev</span>
          </h2>
          <div className="h-1 w-20 bg-zinc-800 mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-lg font-light max-w-xl mx-auto">
            ¿Necesitas ayuda con tu proyecto? Esto es lo que puedo hacer por ti — trabajo remoto y entregas claras.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -5 }}>
                <SpotlightCard className="h-full flex flex-col bg-[#0d0d0d] border-zinc-800/50 hover:border-zinc-600 transition-colors duration-500 p-8">
                  <div className="relative z-10 flex flex-col h-full">

                    {/* Icono */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6">
                      <Icon size={22} className="text-zinc-300" strokeWidth={1.5} />
                    </div>

                    {/* Encabezado */}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-2">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-3">{service.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Lista de features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                          <Check size={16} className="text-zinc-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Precio + CTA */}
                    <div className="pt-6 border-t border-zinc-800/30 flex items-center justify-between gap-4">
                      <span className="text-lg font-bold text-zinc-100 font-mono">{service.price}</span>
                      <a
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-black hover:bg-white rounded-xl transition-all text-[11px] font-bold uppercase tracking-widest shadow-lg"
                      >
                        Contratar <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
