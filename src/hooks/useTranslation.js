import React from "react";

import { LanguageContext } from "@/context/LanguageProvider";

import { locales } from "@/locales";

export const useTranslation = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);

  const t = (option) => {
    try {
      const [namespace, key, innerKey] = option
        .split(":")
        .join(",")
        .split(".")
        .join(",")
        .split(",");

      if (innerKey) return locales[language][namespace][key][innerKey];

      return locales[language][namespace][key];
    } catch {
      return option;
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return { t, changeLanguage };
};
