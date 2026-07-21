// src/i18n.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'es' | 'en';

// Diccionario de traducciones (ES / EN)
export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      servicios: 'Servicios',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    hero: {
      roles: [
        '< Desarrollador Full Stack />',
        '< Stack React | Node.js | Express | Next.js | C# | .NET | Python | PHP | Laravel />',
        '< Estudiante de Sistemas />',
        '< Freelance Developer />',
      ],
      desc: (
        <>
          Estudiante en la <span className="text-zinc-200">Universidad Iberoamericana</span> y Developer en{' '}
          <span className="text-zinc-200">Onnix</span>. Especializado en ecosistemas digitales con{' '}
          <span className="text-zinc-100 font-medium">PHP Framework(Laravel)</span> y{' '}
          <span className="text-zinc-100 font-medium">React</span>.
        </>
      ),
      cta1: 'Ver Proyectos',
      cta2: 'Hablemos',
    },
    about: {
      title1: 'Mi',
      title2: 'Trayectoria',
      cards: [
        {
          title: 'Experiencia Actual',
          body: (
            <>
              Actualmente me desempeño como <strong className="text-zinc-200">Developer Full Stack</strong> en{' '}
              <span className="text-zinc-100">Onnix</span>, gestionando módulos financieros con{' '}
              <span className="font-mono text-xs">MVC, PHP, Framework Laravel, Pgsql, MySQL, jQuery y AJAX</span>.
            </>
          ),
        },
        {
          title: 'Educación',
          body: (
            <>
              Estudiante de <strong className="text-zinc-200">Análisis de Sistemas</strong> en la{' '}
              <span className="text-zinc-100">Universidad Iberoamericana</span>, enfocado en arquitectura de software y
              metodologías ágiles.
            </>
          ),
        },
        {
          title: 'Stack Tecnológico',
          body: (
            <>
              Dominio de <span className="text-zinc-200">PHP (Laravel), JavaScript (React, jQuery)</span> y{' '}
              <span className="text-zinc-200">MySQL</span>. Experiencia en despliegues con WinSCP y Git.
            </>
          ),
        },
        {
          title: 'Objetivos',
          body: (
            <>
              Mi meta es evolucionar a <strong className="text-zinc-200">Full Stack Master</strong>, migrando mi stack
              hacia el ecosistema moderno de <span className="text-zinc-100">React y Node.js</span>.
            </>
          ),
        },
      ],
    },
    services: {
      title1: 'Servicios',
      title2: 'Tomcodev',
      subtitle: '¿Necesitas ayuda con tu proyecto? Esto es lo que puedo hacer por ti. Trabajo remoto y entregas claras.',
      consult: 'Consultar',
      from: 'Desde',
    },
    projects: {
      title1: 'Proyectos',
      title2: 'Seleccionados',
      view: 'Visualizar',
      code: 'Código',
      captures: 'capturas',
    },
    contact: {
      title1: '¿Hablamos',
      title2: 'ahora?',
      subtitlePre: 'Completa el formulario y te responderé directamente por ',
      subtitleStrong: 'WhatsApp',
      name: 'Tu nombre',
      namePlaceholder: 'Escribe tu nombre aquí...',
      message: 'Mensaje',
      messagePlaceholder: '¿En qué puedo ayudarte?',
      send: 'Enviar a WhatsApp',
      location: 'Limpio, Paraguay • Disponible para nuevos proyectos',
    },
    footer: {
      tagline: (
        <>
          Construyendo ecosistemas digitales desde <span className="text-zinc-300">Limpio, Paraguay</span>. Enfocado en el
          código limpio y la escalabilidad.
        </>
      ),
    },
    sidebar: { menu: 'Menú', connect: 'Conectar' },
    fab: { tooltip: '¿Hablamos?', aria: 'Escríbeme por WhatsApp' },
  },

  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About',
      servicios: 'Services',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    hero: {
      roles: [
        '< Full Stack Developer />',
        '< Stack React | Node.js | Express | Next.js | C# | .NET | Python | PHP | Laravel />',
        '< Systems Student />',
        '< Freelance Developer />',
      ],
      desc: (
        <>
          Student at the <span className="text-zinc-200">Ibero-American University</span> and Developer at{' '}
          <span className="text-zinc-200">Onnix</span>. Specialized in digital ecosystems with{' '}
          <span className="text-zinc-100 font-medium">PHP Framework (Laravel)</span> and{' '}
          <span className="text-zinc-100 font-medium">React</span>.
        </>
      ),
      cta1: 'View Projects',
      cta2: "Let's Talk",
    },
    about: {
      title1: 'My',
      title2: 'Journey',
      cards: [
        {
          title: 'Current Experience',
          body: (
            <>
              I currently work as a <strong className="text-zinc-200">Full Stack Developer</strong> at{' '}
              <span className="text-zinc-100">Onnix</span>, managing financial modules with{' '}
              <span className="font-mono text-xs">MVC, PHP, Laravel Framework, Pgsql, MySQL, jQuery and AJAX</span>.
            </>
          ),
        },
        {
          title: 'Education',
          body: (
            <>
              <strong className="text-zinc-200">Systems Analysis</strong> student at the{' '}
              <span className="text-zinc-100">Ibero-American University</span>, focused on software architecture and
              agile methodologies.
            </>
          ),
        },
        {
          title: 'Tech Stack',
          body: (
            <>
              Proficient in <span className="text-zinc-200">PHP (Laravel), JavaScript (React, jQuery)</span> and{' '}
              <span className="text-zinc-200">MySQL</span>. Experience deploying with WinSCP and Git.
            </>
          ),
        },
        {
          title: 'Goals',
          body: (
            <>
              My goal is to become a <strong className="text-zinc-200">Full Stack Master</strong>, migrating my stack
              toward the modern <span className="text-zinc-100">React and Node.js</span> ecosystem.
            </>
          ),
        },
      ],
    },
    services: {
      title1: 'Tomcodev',
      title2: 'Services',
      subtitle: 'Need help with your project? This is what I can do for you. Remote work and clear deliverables.',
      consult: 'Inquire',
      from: 'From',
    },
    projects: {
      title1: 'Selected',
      title2: 'Projects',
      view: 'View',
      code: 'Code',
      captures: 'shots',
    },
    contact: {
      title1: "Let's talk",
      title2: 'now?',
      subtitlePre: 'Fill out the form and I will reply to you directly on ',
      subtitleStrong: 'WhatsApp',
      name: 'Your name',
      namePlaceholder: 'Type your name here...',
      message: 'Message',
      messagePlaceholder: 'How can I help you?',
      send: 'Send to WhatsApp',
      location: 'Limpio, Paraguay • Available for new projects',
    },
    footer: {
      tagline: (
        <>
          Building digital ecosystems from <span className="text-zinc-300">Limpio, Paraguay</span>. Focused on clean code
          and scalability.
        </>
      ),
    },
    sidebar: { menu: 'Menu', connect: 'Connect' },
    fab: { tooltip: "Let's talk?", aria: 'Message me on WhatsApp' },
  },
} as const;

export type Dict = (typeof translations)['es'];

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((prev) => (prev === 'es' ? 'en' : 'es'));

  // El diccionario 'es' y 'en' comparten forma pero difieren en literales;
  // lo exponemos como Dict para tipado uniforme en los componentes.
  const t = translations[lang] as unknown as Dict;

  return <LangContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LangContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang debe usarse dentro de <LanguageProvider>');
  return ctx;
};
