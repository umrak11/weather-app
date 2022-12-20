import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "./translations/en.json";
import translationSlovenian from "./translations/sl.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  sl: {
    translation: translationSlovenian,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "sl", //default language
});

export default i18next;
