// src/components/layout/Footer.tsx
import { NAV_LINKS } from '../../constants';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-zinc-800/50 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Lado Izquierdo: Branding & Mission */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-zinc-100">
              TOMCO<span className="text-zinc-500">DEV</span>
            </h3>
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
              Construyendo ecosistemas digitales desde <span className="text-zinc-300">Limpio, Paraguay</span>. Enfocado en el código limpio y la escalabilidad.
            </p>
          </div>

          {/* Lado Derecho: Navegación Técnica */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Línea divisoria interna muy sutil */}
        <div className="h-[1px] w-full bg-zinc-900 my-12" />

        <div className="flex justify-center md:justify-start">
          {/* Copyright */}
          <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} <span className="text-zinc-400">Néstor Martínez</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;