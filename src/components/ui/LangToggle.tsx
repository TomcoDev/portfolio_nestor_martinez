// src/components/ui/LangToggle.tsx
import { useLang } from '../../i18n';
import type { Lang } from '../../i18n';

const OPTIONS: Lang[] = ['es', 'en'];

const LangToggle = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 p-0.5 ${className}`}
      role="group"
      aria-label="Cambiar idioma / Change language"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors ${
            lang === opt ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-zinc-200'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default LangToggle;
