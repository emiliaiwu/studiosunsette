import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";


export const Incoming = () => {
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
		
			<section className='w-full h-full py-40 md:px-16 px-8 bg-primary flex justify-center items-center'>
				<div className='flex flex-col items-center text-primary-light'>
					<h2
						ref={textRef}
						style={textStyle}
						className='font-meditate text-center mb-8 leading-[100%] max-w-[800px]'
					>
						Your website isn’t just a collection of pages...
					</h2>
					<p
						ref={textRef2}
						className='font-suisse text-sm max-w-[700px] w-full sm:text-center text-justify'
					>
						It’s the first handshake with your audience. The first look into
						your soul as a brand. It should feel like stepping into a room
						that’s curated with care—where every detail, every line of text,
						every color speaks of intention. I want to create that for you—a
						site that doesn’t just look beautiful but feels welcoming, seamless,
						and true to who you are.
					</p>
				</div>
			</section>
		
	);
};
