// src/components/layout/Sidebar.tsx
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useClickOutside(sidebarRef, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop: Más oscuro y con mayor desenfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden"
          />

          {/* Menú Lateral: Estética Zinc Dark */}
          <motion.div
            ref={sidebarRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed inset-y-0 right-0 w-80 bg-[#0a0a0a] border-l border-zinc-800/50 z-[70] p-10 md:hidden flex flex-col"
          >
            {/* Header del Sidebar */}
            <div className="flex items-center justify-between mb-16">
              <span className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase">Menú</span>
              <button 
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links de Navegación: Estilo Minimalista */}
            <nav className="flex flex-col gap-8 mb-auto">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-3xl font-black tracking-tighter text-zinc-500 hover:text-zinc-100 transition-all duration-300"
                >
                  {link.name}<span className="text-zinc-800">.</span>
                </motion.a>
              ))}
            </nav>

            {/* Pie del Sidebar: Redes Sociales Monocromáticas */}
            <div className="pt-10 border-t border-zinc-900 flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-widest text-zinc-700 uppercase">Conectar</span>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors duration-300"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
              <p className="text-[10px] font-mono text-zinc-800 tracking-tighter">
                &copy; 2026 TOMCODEV_CORE
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;