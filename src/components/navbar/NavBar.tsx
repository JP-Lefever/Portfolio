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
								to={"/skills"}
							>
								{translations.navBar.skills}
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
			</nav>
		</>
	);
}
