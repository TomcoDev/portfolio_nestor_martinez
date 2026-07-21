// src/components/sections/About.tsx
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Code2, BookOpen, Briefcase, Rocket } from 'lucide-react';
import { useLang } from '../../i18n';

const CARD_ICONS = [Briefcase, BookOpen, Code2, Rocket];

const About = () => {
  const { t } = useLang();
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
            {t.about.title1} <span className="text-zinc-500">{t.about.title2}</span>
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
          {t.about.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];
            return (
              <motion.div key={index} variants={itemVariants}>
                <SpotlightCard className="h-full border-zinc-800/50 bg-zinc-900/20 group">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-zinc-100">{card.title}</h3>
                      <p className="text-zinc-500 leading-relaxed font-light">{card.body}</p>
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

export default About;