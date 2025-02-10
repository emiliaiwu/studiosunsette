import { useContext, useEffect, useRef } from "react";
import bgImage from "../../assets/homeimage.webp";
import ArrowLink from "../ArrowLink";
import GlobalContext from "../../context/GlobalContext";

const About = () => {
	const backgroundStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100vw",
	};

	const textStyle = {
		fontSize: "clamp(60px, 8vw, 100px)",
	};

	const textRef = useRef<HTMLHeadingElement>(null);
	const textRef2 = useRef<HTMLParagraphElement>(null);
	const textRef3 = useRef<HTMLParagraphElement>(null);

	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerRef(textRef2.current);
			context.registerRef(textRef3.current);
		}
	}, [context]);

	return (
		<section className='md:py-20 pb-20 bg-primay w-full h-[100vh] flex justify-center items-center relative '>
			<div className='w-full h-full'>
				<div className='bg-primary w-full h-full absolute opacity-60 inset-0 z-20'></div>
				<div
					style={backgroundStyle}
					className='w-screen h-full absolute inset-0'
				>
					{" "}
				</div>


				<div className='h-full flex justify-center items-center w-full gap-16 flex-col absolute inset-0 z-30 '>
					<p ref={textRef2} className='font-suisse text-center mb-4 leading-[100%] uppercase text-xs text-primary-light tracking-[10px]'>
						welcome to
					</p>
					<div className='flex flex-col justify-center items-center gap-4'>
						<h2 ref={textRef}
							style={textStyle}
							className='font-karlotte text-center w-full text-white leading-[120%] px-8'
						>
							STUDIO ÁMÁKÁ
						</h2>
						<p ref={textRef3} className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify text-primary-light px-8'>
							Studio Amaka is a boutique space dedicated to creating websites
							that feel like home—calm, elegant, and perfectly attuned to the
							brands they represent. I believe that a website is more than just
							a digital necessity. It’s where your brand lives, where your story
							is told, and where your audience connects deeply with you. Studio
							Amaka is rooted in the idea of simplicity, crafting designs that
							feel intentional and timeless, free from clutter or distractions.
						</p>
					</div>
					<div className='text-white'>
						<ArrowLink link='/about' label='MORE ABOUT THE STUDIO' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
