import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";

const Intro = () => {
	const textStyle = {
		fontSize: "clamp(40px, 8vw, 60px)",
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
		<section className='w-full h-full md:px-16 px-8 bg-primary-light flex justify-center items-center pt-40'>
			<div className='text-primary flex flex-col justify-center items-center gap-12'>
				<div className='overflow-y-clip w-full h-full'>
					<h2
						ref={textRef}
						style={textStyle}
						className='font-meditate text-center leading-[100%] max-w-[800px] overflow-hidden h-full'
					>
						Where Intentional brands and businesses meet websites crafted with
						soul and strategy.
					</h2>
				</div>
				<p
					ref={textRef2}
					className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify'
				>
					Whether you're seeking a stunning Squarespace website, a
					high-converting Shopify store for your brand, a creative Showit
					website for your photography business, or a fully custom-built
					solution, Studio Amaka has you covered. Here, it’s all about crafting
					quiet websites that speak volumes. I specialize in intentional design
					that captures the heart of your brand while celebrating the elegance
					of simplicity and clarity.
				</p>
				{/* <h2
					style={textStyle}
					className='font-meditate text-center mb-8 leading-[100%]'
				>
					A quiet kind of studio.
				</h2>
				<p className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify'>
					Studio Basique is a boutique space dedicated to creating websites that
					feel like home—calm, elegant, and perfectly attuned to the brands they
					represent. I believe that a website is more than just a digital
					necessity. It’s where your brand lives, where your story is told, and
					where your audience connects deeply with you. Studio Basique is rooted
					in the idea of simplicity, crafting designs that feel intentional and
					timeless, free from clutter or distractions.
				</p> */}
			</div>
		</section>
	);
};

export default Intro;
