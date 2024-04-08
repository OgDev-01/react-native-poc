import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ro from "./locales/ro/translation.json";

const resources = {
  en: { translation: en },
  ro: { translation: ro },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  compatibilityJSON: "v3",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export default i18next;
