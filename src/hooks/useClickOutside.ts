// src/hooks/useClickOutside.ts
import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Usamos 'any' en el RefObject para evitar conflictos de varianza 
 * entre diferentes tipos de elementos HTML (div, section, etc.) durante el build.
 */
export const useClickOutside = (ref: RefObject<any>, handler: () => void) => {
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