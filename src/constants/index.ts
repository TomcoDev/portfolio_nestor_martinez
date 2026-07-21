// src/constants/index.ts
import React from 'react';
// Importamos los iconos oficiales desde react-icons/si (Simple Icons)
import {
  SiPhp,
  SiLaravel,
  SiSharp,
  SiDotnet,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiReact,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiAxios,
  SiDocker,
  SiGit,
  SiLinux,
  SiPostman,
} from 'react-icons/si';

import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  FileText, 
  Code2, 
  Database, 
  Layout, 
  Settings,
  Bug,
  Search,
  Globe,
  LayoutDashboard,
  Webhook,
  Bot,
  // Mantenemos estos de Lucide para la sección About y Redes
} from 'lucide-react';

import type { Project, SocialLink, SkillGroup, NavLink, Service } from '../types';

/**
 * DATOS DEL NAVBAR
 */
export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#home', key: 'inicio' },
  { name: 'Sobre mí', href: '#about', key: 'sobreMi' },
  { name: 'Servicios', href: '#services', key: 'servicios' },
  { name: 'Proyectos', href: '#projects', key: 'proyectos' },
  { name: 'Contacto', href: '#contact', key: 'contacto' },
];

/**
 * SERVICIOS (Tomcodev) — lo que un cliente puede contratar
 */
export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Arreglo de bugs',
    title_en: 'Bug Fixing',
    tagline: 'Encuentro y arreglo',
    tagline_en: 'Find & fix',
    description: 'Tu web o sistema da un error, algo dejó de funcionar o va lento. Lo diagnostico, lo arreglo y te explico qué pasó.',
    description_en: 'Your website or system throws an error, something stopped working or runs slow. I diagnose it, fix it and explain what happened.',
    features: ['Errores de código, WordPress y formularios', 'Diagnóstico + solución verificada', 'Entrega rápida, incluso en 24h'],
    features_en: ['Code, WordPress and form errors', 'Diagnosis + verified fix', 'Fast delivery, even in 24h'],
    price: 'Desde $15',
    icon: Bug,
  },
  {
    id: 2,
    title: 'Auditoría SEO',
    title_en: 'SEO Audit',
    tagline: 'Aparece en Google',
    tagline_en: 'Rank on Google',
    description: 'Analizo por qué tu web no aparece o no recibe visitas, con un informe claro y un plan de acción priorizado.',
    description_en: 'I analyze why your site does not rank or get visits, with a clear report and a prioritized action plan.',
    features: ['Velocidad, indexación y meta tags', 'Checklist con semáforo de prioridades', 'Las 3 acciones más importantes'],
    features_en: ['Speed, indexing and meta tags', 'Traffic-light priority checklist', 'The 3 most important actions'],
    price: 'Desde $30',
    icon: Search,
  },
  {
    id: 3,
    title: 'Páginas web',
    title_en: 'Websites',
    tagline: 'Tu negocio online',
    tagline_en: 'Your business online',
    description: 'Landing pages y webs a medida: rápidas, modernas y perfectas en el móvil. Listas para conseguir clientes.',
    description_en: 'Custom landing pages and websites: fast, modern and perfect on mobile. Ready to bring you clients.',
    features: ['Diseño responsive orientado a vender', 'React, Laravel o el stack ideal', 'Optimizado en velocidad y SEO base'],
    features_en: ['Responsive, conversion-focused design', 'React, Laravel or the ideal stack', 'Speed optimized + basic SEO'],
    price: 'Desde $80',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Sistemas de gestión',
    title_en: 'Management Systems',
    tagline: 'ERP y paneles a medida',
    tagline_en: 'Custom ERP & dashboards',
    description: 'Sistemas para administrar tu negocio: inventario, ventas, clientes y facturación, con tableros de control claros.',
    description_en: 'Systems to run your business: inventory, sales, clients and billing, with clear control dashboards.',
    features: ['Inventario, ventas y CRM', 'Reportes y tableros KPI', 'Roles y permisos de usuario'],
    features_en: ['Inventory, sales and CRM', 'Reports and KPI dashboards', 'User roles and permissions'],
    price: 'Desde $250',
    icon: LayoutDashboard,
  },
  {
    id: 5,
    title: 'APIs e integraciones',
    title_en: 'APIs & Integrations',
    tagline: 'Conecto tus sistemas',
    tagline_en: 'Connect your systems',
    description: 'Conecto tu web o app con servicios externos: pasarelas de pago, WhatsApp, facturación electrónica y más.',
    description_en: 'I connect your website or app with external services: payment gateways, WhatsApp, e-invoicing and more.',
    features: ['APIs REST a medida', 'Pasarelas de pago y WhatsApp', 'Integración entre plataformas'],
    features_en: ['Custom REST APIs', 'Payment gateways and WhatsApp', 'Integration between platforms'],
    price: 'Desde $60',
    icon: Webhook,
  },
  {
    id: 6,
    title: 'Automatización con IA',
    title_en: 'AI Automation',
    tagline: 'Ahorra tiempo con IA',
    tagline_en: 'Save time with AI',
    description: 'Chatbots y automatizaciones que responden a tus clientes y hacen el trabajo repetitivo por ti, con IA integrada.',
    description_en: 'Chatbots and automations that answer your clients and do the repetitive work for you, powered by AI.',
    features: ['Chatbots para atención al cliente', 'Automatización de tareas repetitivas', 'Integración con IA (Gemini / APIs)'],
    features_en: ['Customer-support chatbots', 'Automation of repetitive tasks', 'AI integration (Gemini / APIs)'],
    price: 'Desde $80',
    icon: Bot,
  },
];

/**
 * TODAS LAS TECNOLOGÍAS (Para el LogoLoop de React Bits)
 * Logos oficiales usando Simple Icons
 */
export const TECH_LOGOS = [
  // Backend y Bases de Datos
  { name: 'PHP', icon: React.createElement(SiPhp, { size: 40 }) },
  { name: 'Laravel', icon: React.createElement(SiLaravel, { size: 40 }) },
  { name: 'C#', icon: React.createElement(SiSharp, { size: 40 }) },
  { name: '.NET', icon: React.createElement(SiDotnet, { size: 40 }) },
  { name: 'Express.js', icon: React.createElement(SiExpress, { size: 40 }) },
  { name: 'Node.js', icon: React.createElement(SiNodedotjs, { size: 40 }) },
  { name: 'MySQL', icon: React.createElement(SiMysql, { size: 40 }) },
  { name: 'Postgres', icon: React.createElement(SiPostgresql, { size: 40 }) },
  { name: 'Oracle', icon: React.createElement(SiOracle, { size: 40 }) },
  
  // Frontend
  { name: 'React', icon: React.createElement(SiReact, { size: 40 }) },
  { name: 'JavaScript', icon: React.createElement(SiJavascript, { size: 40 }) },
  { name: 'jQuery', icon: React.createElement(SiJquery, { size: 40 }) },
  { name: 'TailwindCSS', icon: React.createElement(SiTailwindcss, { size: 40 }) },
  { name: 'TypeScript', icon: React.createElement(SiTypescript, { size: 40 }) },
  { name: 'Axios', icon: React.createElement(SiAxios, { size: 40 }) },
  
  // Herramientas y Entorno
  { name: 'Docker', icon: React.createElement(SiDocker, { size: 40 }) },
  { name: 'Git', icon: React.createElement(SiGit, { size: 40 }) },
  { name: 'Linux', icon: React.createElement(SiLinux, { size: 40 }) },
  { name: 'Postman', icon: React.createElement(SiPostman, { size: 40 }) },
];

/**
 * TUS PROYECTOS
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GlowManager",
    description: "Sistema integral de gestión para peluquerías y centros de estética. Incluye turnos, clientes y control de stock.",
    description_en: "All-in-one management system for salons and beauty centers. Includes appointments, clients and stock control.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/TomcoDev/glowmanager",
    gallery: [
      "/projects/glowmanager/glow1.png",
      "/projects/glowmanager/glow2.png",
      "/projects/glowmanager/glow3.png",
      "/projects/glowmanager/glow4.png"
    ]
  },
  {
    id: 2,
    title: "ERP Ferretería",
    description: "Sistema administrativo para ferretería naval con gestión de inventarios complejos y facturación.",
    description_en: "Administrative system for a naval hardware store with complex inventory management and billing.",
    tags: ["PHP", "Laravel", "PostgreSQL", "MVC", "Tailwind", "Docker"],
    github: "https://github.com/TomcoDev/ERP-Completa",
  },
  {
    id: 3,
    title: "E-commerce Variedad Universal",
    description: "Plataforma de ventas online con panel administrativo CRM y tableros de control KPI para el negocio.",
    description_en: "Online sales platform with a CRM admin panel and KPI control dashboards for the business.",
    tags: ["PHP", "PostgreSQL", "JavaScript", "CSS"],
    github: "https://github.com/TomcoDev/e-commerce-variedad-universal",
  },
  {
    id: 4,
    title: "Factupar Core Modules",
    description: "Desarrollo de módulos financieros: reportes de créditos, planillas de asociación y liquidaciones de caja.",
    description_en: "Development of financial modules: credit reports, membership sheets and cash settlements.",
    tags: ["PHP", "jQuery", "AJAX", "MySQL", "Bootstrap"],
  },
  {
    id: 5,
    title: "Gastozen",
    description: "Aplicación móvil para control de gastos personales con gráficos interactivos y alertas de presupuesto.",
    description_en: "Mobile app for personal expense tracking with interactive charts and budget alerts.",
    tags: ["React", "TypeScript", "Gemini SDK", "Tailwind", "Vite"],
    github: "https://github.com/TomcoDev/GastoZen",
    gallery: [
      "/projects/gastozen/gasto1.png",
      "/projects/gastozen/gasto2.png",
      "/projects/gastozen/gasto3.png",
      "/projects/gastozen/gasto4.png",
      "/projects/gastozen/gasto5.png",
      "/projects/gastozen/gasto6.png",
      "/projects/gastozen/gasto7.png",
      "/projects/gastozen/gasto8.png",
      "/projects/gastozen/gasto9.png",
      "/projects/gastozen/gasto10.png",
      "/projects/gastozen/gasto11.png",
      "/projects/gastozen/gasto12.png",
      "/projects/gastozen/gasto13.png"
    ]
  }
];

/**
 * TUS HABILIDADES (Para la sección About)
 * Mantenemos Lucide aquí porque son iconos genéricos de categoría
 */
export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "jQuery"]
  },
  {
    category: "Backend",
    icon: Settings,
    skills: ["PHP (Laravel)", "Node.js", "MVC Architecture"]
  },
  {
    category: "Base de Datos",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MySQL Workbench"]
  },
  {
    category: "Herramientas",
    icon: Code2,
    skills: ["Git/GitHub", "WinSCP", "Vite", "REST APIs"]
  }
];

/**
 * REDES SOCIALES
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/TomcoDev",
    icon: Github,
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/néstor-martínez-tomco1512",
    icon: Linkedin,
    color: "hover:text-blue-500"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/595991682966", 
    icon: MessageCircle,
    color: "hover:text-green-500"
  },
  {
    name: "Currículum",
    href: "/nestor_martinez_cv_en.pdf",
    icon: FileText,
    color: "hover:text-red-400"
  }
];