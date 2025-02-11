import { useContext, useEffect, useRef } from "react";
import mypics from "/assets/emilia iwu.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GlobalContext from "../context/GlobalContext";
import ArrowLink from "./ArrowLink";
// import ArrowLink from "./ArrowLink";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const headRef = useRef<HTMLHeadingElement>(null);
	const textRef2 = useRef<HTMLDivElement>(null);
	const textRef4 = useRef<HTMLParagraphElement>(null);
	const container = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef || context?.registerImageRef) {
			context.registerRef(textRef.current);
			context.registerRef(headRef.current);
			context.registerRef(textRef4.current);
			context.registerRef(textRef2.current);
			context.registerImageRef(imageRef.current, container.current);
		}
	}, [context]);

	const textStyle = {
		fontSize: "clamp(40px, 11vw, 80px)",
	};

	// useEffect(() => {
	// 	if (imageRef.current) {
	// 		gsap.fromTo(
	// 			imageRef.current,
	// 			{ yPercent: -30, clipPath: "inset(30% 0 30% 0)" },
	// 			{
	// 				yPercent: 30,
	// 				clipPath: "inset(0% 0 0% 0)", // Revealing top and bottom
	// 				ease: "none",

	// 				scrollTrigger: {
	// 					trigger: container.current,
	// 					start: "top bottom",
	// 					end: "bottom top",
	// 					scrub: true,
	// 				},
	// 			}
	// 		);
	// 	}
	// }, []);
	return (
		<section className='bg-primary-light w-full flex justify-center items-center z-10 h-full py-20 '>
			<div
				ref={container}
				className='h-full flex xl:flex-row flex-col-reverse justify-between items-center gap-12'
			>
				<div className='w-full h-full flex flex-col justify-center items-center sm:pt-16'>
					<div className='flex flex-col justify-between items-start h-full px-8'>
						{/* <div>
							<ArrowLink link='/about' label='about studio' />
						</div> */}

						<h1
							ref={headRef}
							style={textStyle}
							className=' uppercase font-karlotte text-primary text-left leading-[120%] mb-16'
						>
							Meet Your <br /> Web Partner
						</h1>
						<div className='text-primary'>
							{" "}
							<p
								ref={textRef}
								className='font-suisseMedium text-xs text-justify uppercase mb-6'
							>
								Hi! I'm Emilia.
							</p>
							<div className='max-w-[560px] w-full flex sm:gap-12 gap-8'>
								<div ref={textRef2} className='w-full'>
									<p className='font-suisse text-xs text-justify mb-8 sm:mb-12'>
										The founder, designer and developer behind Studio Amaka.
										I've always believed that design should be more than just
										aesthetics—it should be an experience. Through my work, I
										aim to create spaces that feel calm, purposeful, and
										meaningful.
									</p>

									<p className='font-suisse text-xs text-justify mb-4'>
										I created Studio Amaka with one goal in mind: to provide
										women with a digital space that reflects their ambition,
										their passion, and their voice. I understand the frustration
										of websites that feel chaotic or disconnected. The missed
										opportunities when visitors don’t stick around because it’s
										too much or not enough. But it doesn’t have to be that way.
										What I create is different. It’s about clarity, about
										creating something that invites rather than overwhelms.
									</p>
								</div>
								<div ref={textRef4} className='w-full'>
									<p className='font-suisse text-xs text-justify mb-6 sm:mb-12'>
										Over the years, I've learned that the best designs are the
										ones that leave room for content to breathe. I draw
										inspiration from the idea that simplicity, clarity, and
										intention are key to connecting with an audience. I don’t
										chase trends; instead, I focus on crafting designs that
										stand the test of time, designs that feel right, both
										visually and emotionally. When you work with me, you’re not
										just getting a designer—you’re getting a web partner who
										values your vision.
									</p>
									<p className='font-suisse text-xs text-justify'>
										When I’m not working on a site, you can probably find me
										creating content on YouTube or daydreaming about living in a
										cozy house on a quiet island, far away from the chaos of the
										world. Think soft interiors, ocean views, and absolutely no
										notifications.
									</p>
								</div>
							</div>
						</div>
						<div className="py-6">
							<ArrowLink link='/inquire' label="Let's work together" />
						</div>
					</div>
				</div>

				<div className='lg:h-[800px] h-screen w-full relative flex items-center justify-center overflow-y-hidden'>
					<img
						ref={imageRef}
						src={mypics}
						alt='Emilia Iwu'
						loading="lazy"
						className='lg:h-[1000px] h-[120vh] w-full object-cover'
					/>
					{/* <img
						src={mypics}
						alt='Emilia Iwu'
						className='h-[60vh] w-[420px] absolute left-0'
					/> */}
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
