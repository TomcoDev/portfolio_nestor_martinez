// src/components/sections/Services.tsx
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../constants';
import { SpotlightCard } from '../ui/SpotlightCard';
import { useLang } from '../../i18n';

// Numero de WhatsApp de Nestor (mismo que en Contact)
const WHATSAPP_PHONE = '595991682966';

// Arma el link de WhatsApp con un mensaje pre-escrito segun el servicio
const buildWhatsAppUrl = (serviceTitle: string) => {
  const text = `Hola Néstor, me interesa tu servicio de "${serviceTitle}". ¿Podemos hablar sobre esto?`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
};

const Services = () => {
  const { t, lang } = useLang();
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
            {t.services.title1} <span className="text-zinc-500">{t.services.title2}</span>
          </h2>
          <div className="h-1 w-20 bg-zinc-800 mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-lg font-light max-w-xl mx-auto">
            {t.services.subtitle}
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
            const title = lang === 'en' ? service.title_en : service.title;
            const tagline = lang === 'en' ? service.tagline_en : service.tagline;
            const description = lang === 'en' ? service.description_en : service.description;
            const features = lang === 'en' ? service.features_en : service.features;
            return (
              <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -5 }} className="group h-full">
                <SpotlightCard className="h-full flex flex-col bg-[#0d0d0d] border-zinc-800/50 hover:border-zinc-600 transition-colors duration-500 p-8">
                  <div className="relative z-10 flex flex-col h-full">

                    {/* Icono con animacion en hover */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6
                                    transition-all duration-300 ease-out
                                    group-hover:scale-110 group-hover:-rotate-6 group-hover:border-zinc-500 group-hover:bg-zinc-800/80
                                    motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
                      <Icon size={22} className="text-zinc-300 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                    </div>

                    {/* Encabezado */}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-2">
                      {tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-3">{title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light mb-6">
                      {description}
                    </p>

                    {/* Lista de features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {features.map((feature) => (
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
                        href={buildWhatsAppUrl(service.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-black hover:bg-white rounded-xl transition-all text-[11px] font-bold uppercase tracking-widest shadow-lg"
                      >
                        {t.services.consult} <ArrowRight size={14} />
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
