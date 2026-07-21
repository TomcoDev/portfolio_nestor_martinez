// src/types/index.ts
import type { ElementType } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  description_en?: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  gallery?: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ElementType; // Para componentes de Lucide
  color: string;
}

export interface SkillGroup {
  category: string;
  icon: ElementType;
  skills: string[];
}

export interface Service {
  id: number;
  title: string;
  title_en: string;
  tagline: string;
  tagline_en: string;
  description: string;
  description_en: string;
  features: string[];
  features_en: string[];
  price: string;
  icon: ElementType; // Componente de Lucide
}

export interface NavLink {
  name: string;
  href: string;
  key: 'inicio' | 'sobreMi' | 'servicios' | 'proyectos' | 'contacto';
}