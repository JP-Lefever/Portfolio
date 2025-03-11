import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

import { useState } from "react";
import { useTranslation } from "../../contexts/LangContext";

export default function NavBar() {
  const { translations } = useTranslation();
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleClick = () => setBurgerMenu(!burgerMenu);

  return (
    <>
      <nav className={style.nav}>
        <section className={style.portrait}>
          <h2 className={style.h2}>
            Lefever <br /> Jean-Philippe
          </h2>
        </section>
        <section className={style.phoneStyle}>
          <div>
            <button
              type="button"
              className={style.responsiveMenu}
              onClick={handleClick}
            >
              <div className={style.bar1} />
              <div className={style.bar2} />
              <div className={style.bar3_h} />
              <div className={style.bar4} />
            </button>
          </div>
          <div>
            {!burgerMenu && (
              <ul className={style.list}>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? style.active
                        : isActive
                          ? style.active
                          : style.link
                    }
                    to={"/"}
                  >
                    {translations.navBar.home}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? style.active
                        : isActive
                          ? style.active
                          : style.link
                    }
                    to={"/about"}
                  >
                    {translations.navBar.about}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? style.active
                        : isActive
                          ? style.active
                          : style.link
                    }
                    to={"/project"}
                  >
                    {translations.navBar.project}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? style.active
                        : isActive
                          ? style.active
                          : style.link
                    }
                    to={"/contact"}
                  >
                    {translations.navBar.contact}
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </section>
      </nav>
    </>
  );
}
