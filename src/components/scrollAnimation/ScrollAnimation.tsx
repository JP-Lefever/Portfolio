import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

type ScrollAnimationType = {
	children: ReactNode;
};

export const ScrollAnimation = ({ children }: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });
	console.log(ref);
	const variants = {
		hidden: { opacity: 0, y: -20, scale: 0 },
		visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export const FadeAnimation = ({ children }: ScrollAnimationType) => {
	const variants = {
		hidden: { opacity: 1, x: 650 },
		visible: { opacity: 1, x: 0, transition: { duration: 4 } },
	};
	return (
		<motion.div initial="hidden" animate={"visible"} variants={variants}>
			{children}
		</motion.div>
	);
};

export const Scroll = ({ children }: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });
	console.log(ref);
	const variants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};
