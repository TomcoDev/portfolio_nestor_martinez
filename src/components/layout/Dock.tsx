import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants';
import { cn } from '../../lib/utils';

const Dock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
      >
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ 
                scale: 1.5, 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "p-3 rounded-xl bg-white/5 text-gray-400 transition-colors",
                link.color,
                "hover:bg-white/10"
              )}
              title={link.name}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Dock;