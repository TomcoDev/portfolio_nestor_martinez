import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  isTextArea?: boolean;
}

export const Input = ({ label, className, isTextArea, ...props }: InputProps) => {
  const Component = isTextArea ? 'textarea' : 'input';
  
  return (
    <div className="w-full space-y-2">
      {label && <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>}
      <Component
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all",
          isTextArea && "min-h-[120px] resize-none",
          className
        )}
        {...(props as React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    </div>
  );
};