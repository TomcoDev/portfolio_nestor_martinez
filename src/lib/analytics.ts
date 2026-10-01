// src/lib/analytics.ts
// Google Analytics 4: solo se carga en produccion y si hay un Measurement ID configurado (VITE_GA_ID)

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const initAnalytics = () => {
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!import.meta.env.PROD || !id) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag espera el objeto arguments tal cual, no un array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
};
