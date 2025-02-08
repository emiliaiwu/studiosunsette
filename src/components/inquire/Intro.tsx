import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";

const Intro = () => {
	const textStyle = {
		fontSize: "clamp(40px, 10vw, 70px)",
	};

	const textRef = useRef<HTMLHeadingElement>(null);
	const textRef2 = useRef<HTMLParagraphElement>(null);

	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerRef(textRef2.current);
		}
	}, [context]);

	return (
		<section className='w-full h-full md:py-40 py-32 md:px-16 px-8 bg-primary flex justify-center items-center'>
			<div className='text-primary-light flex flex-col justify-center items-center gap-12'>
				<h2
					ref={textRef}
					style={textStyle}
					className='font-meditate text-center leading-[100%] max-w-[860px]'
				>
					Are you ready to join the growing list of my happy clients?
				</h2>
				<p
					ref={textRef2}
					className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify'
				>
					Please fill out the form below so I can understand your needs and
					begin crafting a space that perfectly reflects your brand. Not yet
					ready to become my client?{" "}
					<span className='font-suisseBold'>
						Send a message to hello@studioamaka.co{" "}
					</span>
					I’ll be in touch within 2 business days. Check your spam folder or
					junk incase you miss my response.
				</p>
			</div>
		</section>
	);
};

export default Intro;
