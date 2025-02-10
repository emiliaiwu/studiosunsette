import ArrowLink from "../ArrowLink";
import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";
const CustomService = () => {
	const textStyle = {
		fontSize: "clamp(30px, 10vw, 70px)",
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
		<section className='w-full h-full xxxl:pt-60 py-20 md:px-16 px-8 bg-primary-light flex justify-center items-center z-10'>
			<div className='text-primary flex flex-col items-center gap-12 bg-primary-light'>
				<h2 ref={textRef}
					style={textStyle}
					className='font-meditate text-center leading-[100%] max-w-[800px]'
				>
					Need a one-of-a-kind digital home for your brand?
				</h2>
				<p ref={textRef2} className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify mb-8'>
					I can create beautiful, custom websites that capture your
					unique style and story. Whether you're starting fresh or giving your
					online presence a much-needed glow-up, I’ll work closely with you to
					design a space that feels authentically you—elegant, inviting, and
					effortlessly functional. Let’s bring your vision to life together!
				</p>
				<ArrowLink link='/inquire' label='inquire here' />
			</div>
		</section>
	);
};

export default CustomService;
