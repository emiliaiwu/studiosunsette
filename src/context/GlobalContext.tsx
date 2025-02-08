import { createContext, PropsWithChildren, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface GlobalContextType {
	registerRef: (el: HTMLElement | null) => void;
	registerImageRef: (
		el: HTMLElement | null,
		container: HTMLElement | null
	) => void;
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// ANIMATE TEXT
	const animateText = (el: HTMLElement | null) => {
		if (!el) return;
		gsap.set(el, { opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" });
		gsap.to(el, {
			opacity: 1,
			y: 0,
			clipPath: "inset(0% 0 0 0)",
			duration: 1.5,
			stagger: 0.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play none play none",
			},
		});
	};

	const animateImage = (
		el: HTMLElement | null,
		container: HTMLElement | null
	) => {
		if (!el || !container) return;
		gsap.fromTo(
			el,
			{ yPercent: -20, clipPath: "inset(20% 0 20% 0)" },
			{
				yPercent: 20,
				clipPath: "inset(0% 0 0% 0)",
				ease: "none",

				scrollTrigger: {
					trigger: container,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			}
		);
	};

	return (
		<GlobalContext.Provider
			value={{
				registerRef: animateText,
				registerImageRef: animateImage,
				isMenuOpen,
				toggleMenu,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
