import { NavLink } from "react-router-dom";
import about from "../../assets/images/aboutme.png";
import contact from "../../assets/images/contactme.png";
import photo from "../../assets/images/profile-pic.png";
import project from "../../assets/images/projet.png";
import skills from "../../assets/images/skill.png";
import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import Header from "../../components/header/Header";
import { useTranslation } from "../../contexts/LangContext";
import SkillsPage from "../skillsPage/SkillsPage";
import style from "./homePage.module.css";

import { motion } from "framer-motion";
import { FadeAnimation } from "../../components/scrollAnimation/ScrollAnimation";

export default function HomePage() {
  const { translations } = useTranslation();

  return (
    <>
      <section className={style.background}>
        <h2 className={style.h2}>HOME</h2>

        <motion.div
          className={style.navigation}
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          animate={{ opacity: 1 }}
        >
          <Header />

          <article className={style.main}>
            <NavLink className={style.link1} to={"/project"}>
              <div className={style.container}>
                <p className={style.text}>{translations.homePage.project}</p>
                <img
                  className={`${style.img} ${style.hidden}`}
                  src={project}
                  alt="Lien vers mes projets"
                />
              </div>
            </NavLink>
            <NavLink className={style.link2} to={"/about"}>
              <div className={style.container}>
                <p className={style.text}>{translations.homePage.about}</p>
                <img
                  className={`${style.img} ${style.hidden}`}
                  src={about}
                  alt="Lien vers mon A propos "
                />
              </div>
            </NavLink>
            <a className={style.link3} href="#skills">
              <div className={style.container}>
                <p className={style.text}>{translations.homePage.skills}</p>
                <img
                  className={`${style.img} ${style.hidden}`}
                  src={skills}
                  alt="Lien vers mes skills"
                />
              </div>
            </a>
            <NavLink className={style.link4} to={"/contact"}>
              <div className={style.container}>
                <p className={style.text}>{translations.homePage.contact}</p>
                <img
                  className={`${style.img} ${style.hidden}`}
                  src={contact}
                  alt="lien pour me contacter"
                />
              </div>
            </NavLink>
          </article>
          <ConnexionLink />
        </motion.div>
        <FadeAnimation>
          <article className={style.presentationArticle}>
            <img className={style.logo} src={photo} alt="lefever jp" />

            <h2 className={style.presentationTitle}>
              {translations.homePage.presentationTitle}
            </h2>
            <p className={style.presentation}>
              {translations.homePage.presentation1}
            </p>

            <p className={style.presentation1}>
              {translations.homePage.presentation2}
            </p>
          </article>
        </FadeAnimation>
      </section>

      <section className={style.skills}>
        <SkillsPage />
      </section>
    </>
  );
}
