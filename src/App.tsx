// src/App.tsx
import Navbar from './components/layout/Navbar';
import Dock from './components/layout/Dock';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// 1. Importamos el componente de loop y los logos
import LogoLoop from './components/ui/LogoLoop';
import { TECH_LOGOS } from './constants';

// 2. Importamos el nuevo componente de Partículas
import Particles from './components/ui/Particles';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* FONDO DE PARTÍCULAS (Efecto Especial)
        - Lo ponemos con 'fixed' para que cubra toda la pantalla mientras haces scroll.
        - '-z-10' asegura que siempre esté detrás de todo el contenido.
      */}
      <Particles
        className="fixed inset-0 -z-10"
        quantity={150}      // Cantidad de puntos (puedes subirlo a 200 si quieres más densidad)
        staticity={30}     // Qué tanto se mueven solos
        ease={50}          // Suavidad del movimiento al seguir el mouse
      />

      {/* 1. Navegación Superior Fija */}
      <Navbar />

      {/* 2. Contenido Principal - Usamos 'relative z-10' para asegurar que esté sobre el fondo */}
      <main className="relative z-10">
        {/* Presentación impactante */}
        <Hero />

        {/* SECCIÓN DE TECNOLOGÍAS (Infinite Loop) */}
        <div className="border-y border-white/5 bg-zinc-900/10 backdrop-blur-sm">
          <LogoLoop items={TECH_LOGOS} speed={30} />
        </div>

        {/* Quién eres y qué haces */}
        <About />

        {/* Tus trabajos (ERP, GlowManager, etc.) */}
        <Projects />

        {/* Formulario con conexión a WhatsApp */}
        <Contact />
      </main>

      {/* 3. Cierre de página */}
      <Footer />

      {/* 4. Barra de Redes Sociales Flotante (Dock) */}
      <Dock />
    </div>
  );
}

export default App;