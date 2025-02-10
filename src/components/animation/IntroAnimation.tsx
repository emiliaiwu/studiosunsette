import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const IntroAnimation = () => {
	const container = useRef<HTMLDivElement | null>(null);

	const [showIntro, setShowIntro] = useState<boolean>(false);

	useEffect(() => {
		const handleBeforeUnload = () => {
			sessionStorage.clear();
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	useLayoutEffect(() => {
		const introState = sessionStorage.getItem("showIntro");
		if (introState === "false") {
			setShowIntro(true);
		} else {
			setShowIntro(false);
		}
	}, []);

	const handleIntroEnd = () => {
		sessionStorage.setItem("showIntro", "false");
		setShowIntro(false);
	};

	useGSAP(
		() => {
			if (container.current) {
				const timeline = gsap.timeline({
					defaults: { ease: "power4.inOut" },
					onComplete: () => {
						if (handleIntroEnd) handleIntroEnd();
					},
				});
				timeline
					// .fromTo(
					// 	".logo",
					// 	{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
					// 	{
					// 		opacity: 1,
					// 		clipPath: "inset(0% 0% 0% 0%)",
					// 		duration: 1,
					// 		ease: "power3.in",
					// 	}
					// )
					.to({}, { duration: 1.5})
					// .to(".logo", {
					// 	opacity: 0,
					// 	duration: 1,
					// 	ease: "power3.in",
					// 	clipPath: "inset(100% 0% 0% 0%)",
					// })
					// .to(".logo", { opacity: 0, duration: 1, ease: "power3.in" })
					// .to(
					// 	container.current.querySelector(".left"),

					// 	{ xPercent: -100, duration: 1.5 }
					// )

					// .to(
					// 	container.current.querySelector(".right"),
					// 	{
					// 		xPercent: 100,
					// 		duration: 1.5,
					// 	},
					// 	"<"
					// )
					.to(container.current, { opacity: 0, duration: 1})
					.to(container.current, { display: "none", duration: 0 });
			}
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className={`bg-primar bg-[#FBF0DA] w-screen h-screen absolute inset-0 z-50 text-2xl sm:text-3xl xxl:text-5xl lg:text-4xl justify-center items-center ${
				!showIntro ? "flex" : "hidden"
			}`}
		>
			<h1 className='logo font-karlotte uppercase  text-primary'>
				Studio ÁmÁkÁ
			</h1>
			{/* <div className='left w-1/2 h-full flex justify-end items-center b-[#FBF0DA]'>
				<h1 className='opacity-0 logo font-karlotte uppercase  text-primary-light'>
					Studio
				</h1>
			</div>{" "}
			<div className='right w-1/2 h-full flex items-center b-[#FBF0DA]'>
				{" "}
				<h1 className='opacity-0 logo font-karlotte uppercase   text-primary-light'>
					ÁmÁkÁ
				</h1>
			</div> */}
		</div>
	);
};

export default IntroAnimation;
