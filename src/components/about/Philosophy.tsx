import image1 from "../../assets/medas.webp";
import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";

const Philosophy = () => {
	const textRef = useRef<HTMLDivElement>(null);
	const container = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const context = useContext(GlobalContext);
	const textRefs = useRef<(HTMLElement | null)[]>([]);
	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerImageRef(imageRef.current, container.current);
		}

		textRefs.current.forEach((el) => {
			if (el && context?.registerRef) {
				context.registerRef(el);
			}
		});
	}, [context]);

	const philosophy = [
		{
			title: "connection",
			description:
				"Design isn’t just about looking good—it’s about creating a genuine connection. At Studio Amaka, I strive to craft experiences that make people feel something. Whether through visuals, or intuitive design, the goal is to ensure that every interaction fosters a deep sense of connection with your audience.",
		},
		{
			title: "Timelessness",
			description:
				"I believe in designing for the long term. It’s not about chasing the latest trends—it’s about creating something that lasts. My designs are built to grow with you, staying relevant even as trends come and go. I want you to feel confident that your website will continue to support you and your audience for years to come.",
		},
		{
			title: "simplicity",
			description:
				"I strive for simplicity in design, knowing that clarity makes everything easier. I want your message to come through clearly, without distractions. By stripping away anything unnecessary, I let the essence of your brand shine. When your visitors arrive, they should instantly understand who you are and what you offer.",
		},
		{
			title: "AUTHENTICITY",
			description:
				"Your website should be a true reflection of who you are. I take the time to understand your values, your vision, and what you want to communicate with your audience. This allows me to create a design that feels authentic to you—a place that doesn’t just look good, but feels like your brand, your voice, your spirit.",
		},
	];
	return (
		<section className='w-full h-full py-32 md:px-28 px-8 bg-primary-light flex justify-center items-center xl:min-h-[100vh]'>
			<div ref={container} className='w-full flex xl:flex-row flex-col gap-16  items-stretch max-w-[1440px] h-full'>
				<div className='h-[600px] w-full overflow-hidden flex justify-center items-center'>
					{" "}
					<img
						ref={imageRef}
						src={image1}
						alt='image'
						className='h-[880px]  w-full object-cover object-center'
					/>
				</div>
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<div ref={textRef}>
						<h2 className='font-karlotte text-left leading-[100%] uppercase md:text-8xl text-5xl xxs:text-6xl mb-12'>
							studio philosophy
						</h2>
					</div>

					<ul className='grid grid-cols-1 xl:grid-cols-2  xxs:grid-cols-2 gap-10 w-full'>
						{philosophy.map((pro, index) => (
							<li
								ref={(el) => (textRefs.current[index] = el)}
								key={index}
								className='w-full flex justify-center items-center flex-col'
							>
								<h3 className='uppercase text-xs mb-2 font-suisseBold self-start'>
									0{index + 1} / {pro.title}
								</h3>
								<p className='text-xs text-justify font-suisseMedium max-w-[300px]'>
									{pro.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Philosophy;
