import bgImage from "../assets/desssk.png";
import GlobalContext from "../context/GlobalContext";
import ArrowLink from "./ArrowLink";
import { useContext, useEffect, useRef } from "react";


const Cta = () => {
	const backgroundStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundAttachment: "fixed",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
	};

	const textStyle = {
		fontSize: "clamp(12px, 8vw, 46px)",
	};

	const textRef = useRef<HTMLHeadingElement>(null);

	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
		}
	}, [context]);

	return (
		<section className='bg-primary-light w-full xl:px-32 sm:px-16 px-8 flex justify-center items-center min-h-[100vh] pb-40 pt-20'>
			<div className='h-[500px] w-full relative flex justify-center items-center'>
				<div style={backgroundStyle} className=' w-full h-full absolute'>
					<div className='bg-primary w-full h-full absolute opacity-50 inset-0'></div>
					<div className='h-full flex justify-center items-center w-full gap-10 flex-col absolute'>
						<h2
							ref={textRef}
							style={textStyle}
							className='font-meditate text-center max-w-[800px] w-full text-white leading-[120%] px-8'
						>
							Your brand deserves a space that feels like home—a website where
							it lives, grows, and connects with your audience.
						</h2>

						<div className='text-white'>
							<ArrowLink link='/about' label='Become a client here' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
