import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";


const AboutText = () => {
const textRef = useRef<HTMLHeadingElement>(null);

const context = useContext(GlobalContext);

useEffect(() => {
	if (context?.registerRef) {
		context.registerRef(textRef.current);
		
	}
}, [context]);



	return (
		
			<section className='w-full h-full md:px-28 px-8 bg-primary-light flex justify-center items-center py-20 '>
				<div
					ref={textRef}
					className='text-primary flex justify-between items-start w-full gap-16 max-w-[1440px]'
				>
					<h2 className='font-suisseBold text-center mb-4 leading-[100%] uppercase text-sm'>
						about
					</h2>
					<p className='font-suisse text-sm max-w-[600px] w-full text-justify'>
						Studio Amaka is a boutique space dedicated to creating websites
						that feel like home—calm, elegant, and perfectly attuned to the
						brands they represent. I believe that a website is more than just a
						digital necessity. It’s where your brand lives, where your story is
						told, and where your audience connects deeply with you. Studio
						Amaka is rooted in the idea of simplicity, crafting designs that
						feel intentional and timeless, free from clutter or distractions.
					</p>
				</div>
			</section>
		
	);
};

export default AboutText;
