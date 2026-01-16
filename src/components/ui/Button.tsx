// src/components/ui/Button.tsx
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

// Extendemos de HTMLMotionProps en lugar de React.ButtonHTMLAttributes
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  ...props 
}: ButtonProps) => {
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    outline: "border border-white/10 text-white hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "px-6 py-2.5 rounded-full font-medium transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      // Ahora ...props es 100% compatible con motion.button
      {...props}
    />
  );
};