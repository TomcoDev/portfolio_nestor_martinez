// src/components/sections/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { MessageCircle } from 'lucide-react';
import { useLang } from '../../i18n';

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "595991682966"; 
    const message = `Hola Néstor, soy ${formData.name}. ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0a0a0a] relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabecera de Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
            {t.contact.title1} <span className="text-zinc-500">{t.contact.title2}</span>
          </h2>
          <div className="h-1 w-12 bg-zinc-800 mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-lg font-light max-w-md mx-auto">
            {t.contact.subtitlePre}<span className="text-zinc-200">{t.contact.subtitleStrong}</span>.
          </p>
        </motion.div>

        {/* Contenedor del Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0d0d0d] border border-zinc-800/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Sutil brillo de fondo */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-zinc-400/5 blur-[80px] rounded-full" />

          <form onSubmit={handleWhatsAppSend} className="space-y-8 relative z-10">
            <div className="space-y-2">
              <Input
                label={t.contact.name}
                placeholder={t.contact.namePlaceholder}
                required
                className="bg-transparent border-zinc-800 focus:border-zinc-500 transition-colors text-zinc-100 placeholder:text-zinc-700"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Input
                label={t.contact.message}
                placeholder={t.contact.messagePlaceholder}
                isTextArea
                required
                className="bg-transparent border-zinc-800 focus:border-zinc-500 transition-colors text-zinc-100 placeholder:text-zinc-700 min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-3 py-6 bg-zinc-100 text-black hover:bg-white transition-all duration-300 font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <MessageCircle size={18} />
              {t.contact.send}
            </Button>
          </form>
        </motion.div>

        {/* Nota al pie minimalista */}
        <p className="text-center mt-12 text-zinc-600 text-xs font-mono tracking-tighter uppercase">
          {t.contact.location}
        </p>
      </div>
    </section>
  );
};

export default Contact;