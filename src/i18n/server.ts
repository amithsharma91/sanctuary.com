// SSR-safe i18n instance for the static prerender step. Skips the browser
// LanguageDetector (which reads window/navigator/cookie) and pins English.
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messages from "./local/index";

const serverI18n = i18n.createInstance();

serverI18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  resources: messages,
  interpolation: {
    escapeValue: false,
  },
});

export default serverI18n;
