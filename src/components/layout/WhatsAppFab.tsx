// src/components/layout/WhatsAppFab.tsx
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Mismo numero que el resto del sitio
const WHATSAPP_PHONE = '595991682966';
const MESSAGE = 'Hola Néstor, vi tu portafolio y me gustaría consultarte sobre un proyecto.';

const WhatsAppFab = () => {
  const href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbeme por WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip (solo desktop, aparece en hover) */}
      <span
        className="hidden md:block bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 text-zinc-100 text-xs font-medium px-4 py-2 rounded-full shadow-lg
                   opacity-0 translate-x-2 pointer-events-none transition-all duration-300
                   group-hover:opacity-100 group-hover:translate-x-0"
      >
        ¿Hablamos? 👋
      </span>

      {/* Boton verde */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-950/40">
        {/* Anillo de pulso (se desactiva si el usuario prefiere menos animacion) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping motion-reduce:animate-none" />
        <FaWhatsapp size={28} className="relative z-10" />
      </span>
    </motion.a>
  );
};

export default WhatsAppFab;
