// src/components/ui/GalleryModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';
import { useEffect } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images?: string[];
}

const GalleryModal = ({ isOpen, onClose, projectTitle, images }: GalleryModalProps) => {
  
  // Bloquear el scroll de la página cuando el modal está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Fondo oscuro con desenfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Contenedor del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0d0d0d] border border-zinc-800/50 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
              <div className="flex items-center gap-3">
                <ImageIcon className="text-zinc-500" size={20} />
                <h3 className="text-xl font-bold text-zinc-100">{projectTitle}</h3>
              </div>
              <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Galería (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#0a0a0a]">
              {images.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-zinc-800/30">
                  <img src={img} alt={`Preview ${index}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;