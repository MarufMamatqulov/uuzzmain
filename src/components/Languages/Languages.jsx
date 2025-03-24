import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "@/hooks/useTranslation";
import cn from "classnames";

const Language = ({
  language,
  display,
  setIsOpen,
  languages = ["uz", "ru", "en"],
}) => {
  const { changeLanguage } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [languageState, setLanguageState] = React.useState(language);

  const handleChange = (lang) => {
    setLanguageState(lang);

    router.push({ pathname, query }, asPath, { locale: lang });

    return changeLanguage(lang);
  };

  return (
    <div>
      <span
        className={cn({
          ["flex gap-2"]: true,
          ["hidden lg:flex"]: Boolean(display),
        })}
      >
        {languages.map((lang) => (
          <span
            className="uppercase cursor-pointer language
            "
            key={lang}
            tabIndex={1}
            onClick={() => handleChange(lang)}
          >
            {lang}
          </span>
        ))}
      </span>
    </div>
  );
};

export default Language;
