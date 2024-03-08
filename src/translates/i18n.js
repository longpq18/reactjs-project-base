import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANG } from "@/constants";
import Storage from "@/utils/storage";
import resources from './resources';

const INIT_LANGUAGE = Storage.get(LANG.LANGUAGE) || LANG.EN;

i18n.use(initReactI18next).init({
  resources,
  lng: INIT_LANGUAGE,
  fallbackLng: INIT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.off("languageChanged");

export default i18n;
