import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import GlobalContext from "../context/GlobalContext";
import gsap from "gsap";

interface MainHeroProps {
	bgImage: string;
	text: string;
}

const MainHero: React.FC<MainHeroProps> = ({ bgImage, text }) => {
	const backgroundStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundAttachment: "fixed",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100%",
	};

	const textStyle = {
		fontSize: "clamp(50px, 11vw, 100px)",
	};

	// image
	const imageRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Set initial state and animate with GSAP
	useLayoutEffect(() => {
		if (imageRef.current && overlayRef.current) {
			// Set initial state
			gsap.set(imageRef.current, { scale: 1}); 
			gsap.set(overlayRef.current, { scale: 1, opacity: 1});

			// Animate elements
			gsap.to(imageRef.current, {
				scale: 1.05,
				opacity: 1,
				duration: 1.2,
				ease: "power2.out",
			});
			gsap.to(overlayRef.current, {
				scale: 1.05,
				opacity: 0.5,
				duration: 1,
				delay: 0.5,
				ease: "power2.out",
			});
		}
	}, []);

	// text
	const context = useContext(GlobalContext);
	const textRef = useRef<HTMLHeadingElement>(null);
	const textRef2 = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerRef(textRef2.current);
		}
	}, [context]);

	return (
		<div className='w-full h-full relative'>
			<div className='w-full left-0 flex flex-col justify-center items-center gap-8 absolute z-40 bottom-28 px-4'>
				<div className='w-full flex justify-center items-center z-50'>
					<h1
						ref={textRef2}
						className='font-karlotte opacity-0 text-white text-[150px] uppercase leading-[120%] max-w-[80vw] text-center hidden xxl:flex'
					>
						{text}
					</h1>
					<h1
						ref={textRef}
						style={textStyle}
						className='font-karlotte text-white uppercase leading-[120%] max-w-[80vw] text-center xxl:hidden opacity-0'
					>
						{text}
					</h1>
				</div>
			</div>

			<div ref={overlayRef} className='bg-primary w-full h-[100vh] absolute inset-0 z-20 opacity-50'></div>
			<div rel="preload" ref={imageRef} style={backgroundStyle} className='image opacity-0'></div>
		</div>
	);
};

export default MainHero;
