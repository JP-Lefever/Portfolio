import style from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { useTranslation } from "../../contexts/LangContext";
import { useState } from "react";

export default function NavBar() {
	const { translations } = useTranslation();
	const [burgerMenu, setBurgerMenu] = useState(false);
	const handleClick = () => setBurgerMenu(!burgerMenu);
	return (
		<>
			<nav className={style.nav}>
				<section className={style.portrait}>
					<figure className={style.figure}>
						<img className={style.logo} src={logo} alt="portrait" />
					</figure>
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
										onClick={handleClick}
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
										onClick={handleClick}
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
										onClick={handleClick}
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
										onClick={handleClick}
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
