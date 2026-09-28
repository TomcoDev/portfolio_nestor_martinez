// src/hooks/useClickOutside.ts
import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Genérico sobre el tipo de elemento para aceptar refs de div, section, etc.
 */
export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T | null>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Si la referencia no existe o si el clic fue dentro del elemento, no hacemos nada
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};