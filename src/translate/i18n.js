// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Adicione as traduções em inglês aqui
        // Exemplo: 'hello': 'Hello',
        'hello': 'Hello'
      },
    },
    pt: {
      translation: {
        // Adicione as traduções em português aqui
        // Exemplo: 'hello': 'Olá',
        'hello': 'Olá'
      },
    },
  },
  lng: 'pt', // Define o idioma padrão
  fallbackLng: 'pt', // Idioma de fallback caso a tradução não seja encontrada
  interpolation: {
    escapeValue: false, // Não escape strings traduzidas
  },
});

export default i18n;
