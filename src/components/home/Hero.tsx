import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import bgImage from "../../assets/homeimage.webp";
// import Marquee from "../Marquee";
import GlobalContext from "../../context/GlobalContext";
import gsap from "gsap";

const Hero = () => {
	const backgroundStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "120vh",
		width: "100%",
	};

	// const textStyle = {
	// 	fontSize: "clamp(100px, 13vw, 160px)",
	// };

	const textRef = useRef<HTMLHeadingElement>(null);
	const textRef2 = useRef<HTMLParagraphElement>(null);

	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerRef(textRef2.current);
		}
	}, [context]);

	// image
	const imageRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Set initial state and animate with GSAP
	useLayoutEffect(() => {
		if (imageRef.current && overlayRef.current) {
			// Set initial state
			gsap.set(imageRef.current, { scale: 1, opacity: 0 });
			// gsap.set(overlayRef.current, { scale: 1, opacity: 0 });

			// Animate elements
			// gsap.to(overlayRef.current, {
			// 	scale: 1.1,
			// 	opacity: 0.5,
			// 	duration: 3,
			// 	delay: 0.5,
			// 	ease: "power2.out",
			// });
			gsap.to(imageRef.current, {
				scale: 1.1,
				opacity: 1,
				duration: 2,
				ease: "power2.out",
			});
			
		}
	}, []);

	return (
		<section className='w-full h-[120vh] relative overflow-hidden'>
			<div
				ref={textRef}
				className='absolute z-30 lg:top-[70%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col-reverse sm:px-8 gap-6 '
			>
				<h1
					// style={textStyle}
					className=' font-karlotte text-[80px] sm:text-[160px] lg:text-[200px] xl:text-[136px] xxl:text-[160px] xxxl:text-[200px] text-white leading-[110%] text-center sm:text-left uppercase xl:text-center relative flex xl:flex-row flex-col gap-6 w-full justify-between items-center'
				>
					{" "}
					STUDIO
					<span className='font-suisseMedium xxl:text-sm text-xs text-primary-light uppercase tracking-wide max-w-[260px] text-center'>
						An intimate full-service web design and development studio
					</span>
					ÁmÁkÁ{" "}
				</h1>
			</div>
			{/* <div className='absolute xxl:bottom-36 xl:bottom-20 bottom-20'>
				<Marquee />
			</div> */}

			<div ref={overlayRef} className='bg-primary w-full h-[120vh] absolute opacity-50 inset-0 z-20'></div>
			<div ref={imageRef} className='h-[120vh]' style={backgroundStyle}></div>
		</section>
	);
};

export default Hero;
