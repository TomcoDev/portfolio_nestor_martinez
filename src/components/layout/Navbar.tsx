// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { NAV_LINKS } from '../../constants';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(20);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/50 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo: Ahora con estética Zinc/Metálica */}
            <div className="flex-shrink-0">
              <a href="#home" className="group flex items-center gap-2">
                <span className="text-xl font-black tracking-tighter text-zinc-100 group-hover:text-white transition-colors">
                  TOMCO<span className="text-zinc-500">DEV</span>
                </span>
                {/* Un pequeño detalle: un punto que indica "online" */}
                <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" />
              </a>
            </div>

            {/* Desktop Links: Minimalismo Industrial */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-100 transition-all duration-300 relative group"
                  >
                    {link.name}
                    {/* Línea inferior sutil al hacer hover */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Botón Hamburguesa (Mobile) - Estilo Zinc */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;