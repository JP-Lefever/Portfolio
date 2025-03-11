import { useTranslation } from "../../contexts/LangContext";
import style from "./theme.module.css";

import { Languages } from "lucide-react";

export default function Theme() {
  const { language, toggleLanguage } = useTranslation();
  return (
    <button className={style.button} type="button" onClick={toggleLanguage}>
      {language === "fr" ? (
        <Languages size={32} color="white" />
      ) : (
        <Languages size={32} color="yellow" />
      )}
    </button>
  );
}
