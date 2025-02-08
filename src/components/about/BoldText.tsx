import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";

const BoldText = () => {
	const textStyle = {
		fontSize: "clamp(50px, 12vw, 130px)",
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
		<section className='w-full py-32 bg-primary flex justify-center items-center lg:min-h-[100vh]'>
			<div className='max-w-[1440px] w-full text-white sticky top-0'>
				<div className='w-full flex lg:flex-row flex-col justify-between sm:items-start items-center gap-16 px-6 lg:px-0'>
					{" "}
					<h1 ref={textRef}
						style={textStyle}
						className=' uppercase font-karlotte text-white text-center leading-[110%] pb-4'
					>
						SIMPLICITY IS MY SIGNATURE, INTENTION IS MY FOUNDATIOn.
					</h1>
				</div>
			</div>
		</section>
	);
};

export default BoldText;
