import { motion } from 'framer-motion';

interface LogoLoopProps {
  items: { name: string; icon: React.ReactNode }[];
  speed?: number;
}

const LogoLoop = ({ items, speed = 30 }: LogoLoopProps) => {
  // Duplicamos los items para que el loop sea fluido e infinito
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-10">
      {/* Degradados a los lados para efecto de "desvanecimiento" */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100"
          >
            <div className="text-4xl md:text-5xl text-white mb-2">
              {item.icon}
            </div>
            <span className="text-xs font-mono text-gray-500">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;