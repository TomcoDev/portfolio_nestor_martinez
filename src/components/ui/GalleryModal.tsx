// src/components/ui/GalleryModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images?: string[];
}

const GalleryModal = ({ isOpen, onClose, projectTitle, images }: GalleryModalProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const total = images?.length ?? 0;

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(((index % total) + total) % total);
  };
  const next = () => goTo(current + 1, 1);
  const prev = () => goTo(current - 1, -1);

  // Reiniciar al abrir
  useEffect(() => {
    if (isOpen) setCurrent(0);
  }, [isOpen]);

  // Bloquear scroll del body y navegacion por teclado
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, current, total]);

  // Mantener la miniatura activa a la vista
  useEffect(() => {
    const strip = thumbsRef.current;
    if (!strip) return;
    const active = strip.children[current] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [current]);

  if (!images || images.length === 0) return null;

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0d0d0d] border border-zinc-800/50 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4 border-b border-zinc-800/50 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <h3 className="text-base md:text-xl font-bold text-zinc-100 truncate">{projectTitle}</h3>
                <span className="text-[11px] md:text-xs font-mono text-zinc-500 tabular-nums shrink-0">
                  {current + 1} / {total}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="p-2 -mr-1 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors shrink-0"
              >
                <X size={22} />
              </button>
            </div>

            {/* Visor principal */}
            <div className="relative flex-1 min-h-0 flex items-center justify-center bg-black/40 overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`${projectTitle} — captura ${current + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  drag={total > 1 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) next();
                    else if (info.offset.x > 80) prev();
                  }}
                  className="max-h-full max-w-full w-auto object-contain select-none touch-pan-y"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Flechas (solo si hay mas de una imagen) */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white backdrop-blur-md transition-colors"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Siguiente"
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white backdrop-blur-md transition-colors"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Tira de miniaturas */}
            {total > 1 && (
              <div
                ref={thumbsRef}
                className="flex gap-2 md:gap-3 overflow-x-auto p-3 md:p-4 border-t border-zinc-800/50 bg-[#0a0a0a] shrink-0
                           [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]"
              >
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index, index > current ? 1 : -1)}
                    aria-label={`Ir a la captura ${index + 1}`}
                    className={`relative shrink-0 h-14 w-20 md:h-16 md:w-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === current
                        ? 'border-white opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" draggable={false} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
