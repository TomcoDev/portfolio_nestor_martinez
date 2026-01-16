// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Particles from '../ui/Particles';
import TextType from '../ui/TextType';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. MOTOR DE PARTÍCULAS OGL (Fondo Galáctico) */}
      <Particles
        particleCount={250}
        particleSpread={11}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        particleHoverFactor={1.5}
        alphaParticles={true}
        className="z-0"
      />

      {/* 2. CAPA DE GRADIENTE (Suaviza la transición al scroll) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a] z-[1]" />

      {/* 3. LUZ DE FONDO DECORATIVA (Ahora en Zinc sutil en vez de Azul) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-500/5 blur-[120px] rounded-full z-[1]" />

      {/* 4. CONTENIDO PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Tu Foto con aura metálica */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-800 rounded-full blur-md opacity-30 animate-pulse" />
          <img 
            src="/tomcodev1.jpeg" 
            alt="Néstor Martínez" 
            className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-[1px] border-zinc-100/10 grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* SUBTÍTULO ANIMADO (Ahora en Zinc-400) */}
        <div className="h-8 mb-4 flex items-center justify-center">
          <TextType
            as="h2"
            text={[
              "< Desarrollador Full Stack />",
              "< Stack React | Node.js | Express | Next.js | C# | .NET | Python | PHP | Laravel />",
              "< Estudiante de Sistemas />",
              "< Freelance Developer />"
            ]}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={2000}
            className="text-zinc-500 font-mono tracking-[0.2em] text-xs md:text-sm uppercase"
            showCursor={true}
            cursorClassName="bg-zinc-500"
          />
        </div>

        {/* NOMBRE (Tipografía Black y color Zinc-100) */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-zinc-100"
        >
          Néstor <span className="text-zinc-500">Martínez</span>
        </motion.h1>

        {/* DESCRIPCIÓN (Minimalista) */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Estudiante en la <span className="text-zinc-200">Universidad Iberoamericana</span> y Developer en <span className="text-zinc-200">Factupar</span>. Especializado en ecosistemas digitales con <span className="text-zinc-100 font-medium">PHP</span> y <span className="text-zinc-100 font-medium">React</span>.
        </motion.p>

        {/* BOTONES (Contraste Máximo) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a href="#projects">
            <Button className="w-full sm:w-auto px-12 py-4 bg-zinc-100 text-black hover:bg-white transition-all font-bold uppercase tracking-widest text-xs">
              Ver Proyectos
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="w-full sm:w-auto px-12 py-4 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all font-bold uppercase tracking-widest text-xs">
              Hablemos
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;