import { useTranslation } from "../../contexts/LangContext";
import style from "./header.module.css";
export default function Header() {
  const { translations } = useTranslation();
  return (
    <>
      <header className={style.header}>
        <h1 className={style.h2}>{translations.header.title}</h1>
      </header>
    </>
  );
}
