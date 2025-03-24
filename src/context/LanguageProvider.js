import React from "react";

const LanguageContext = React.createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState("uz");

  React.useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("language")) {
        setLanguage(localStorage.getItem("language"));
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (language) {
        localStorage.setItem("language", language);
      } else {
        localStorage.removeItem("language");
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
