import img1 from "../../assets/desklaamp.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";
gsap.registerPlugin(ScrollTrigger);

const BoldText = () => {
	const textStyle = {
		fontSize: "clamp(50px, 12vw, 100px)",
	};

	const container = useRef<HTMLDivElement | null>(null);
	const container2 = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const imageRef2 = useRef<HTMLImageElement | null>(null);

	// const bgImg1 = {
	// 	backgroundImage: `url(${img1})`,
	// 	backgroundAttachment: "fixed",
	// 	backgroundPosition: "center",
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundSize: "50% auto",
	// 	height: "100%",
	// 	width: "100%",
	// };

	// useEffect(() => {
	// 	if (imageRef.current) {
	// 		gsap.fromTo(
	// 			imageRef.current,
	// 			{
	// 				yPercent: -30,
	// 			},
	// 			{
	// 				yPercent: 30,
	// 				scrollTrigger: {
	// 					trigger: container.current, // Trigger element
	// 					start: "top bottom", // Start when container enters the viewport
	// 					end: "bottom top", // End when container leaves the viewport
	// 					scrub: true, // Smooth scroll-linked animation
	// 				},
	// 			}
	// 		);
	// 	}

	// 	if (imageRef2.current) {
	// 		gsap.fromTo(
	// 			imageRef2.current,
	// 			{
	// 				yPercent: -30,
	// 			},
	// 			{
	// 				yPercent: 30,

	// 				scrollTrigger: {
	// 					trigger: container2.current,
	// 					start: "top bottom",
	// 					end: "bottom top",
	// 					scrub: true,
	// 					// markers: true,
	// 				},
	// 			}
	// 		);
	// 	}
	// }, []);

	const textRef = useRef<HTMLElement>(null);
	const textRef2 = useRef<HTMLDivElement>(null);
	const textRef3 = useRef<HTMLHeadingElement>(null);
	const textRef4 = useRef<HTMLParagraphElement>(null);
	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerRef(textRef2.current);
			context.registerRef(textRef3.current);
			context.registerRef(textRef4.current);
			context.registerImageRef(imageRef.current, container.current);
			context.registerImageRef(imageRef2.current, container2.current);
		}
	}, [context]);

	return (
		<section className='w-full bg-primary-light relative flex justify-center items-center py-40'>
			<div className='w-full flex flex-col justify-between items-center gap-8 h-full max-w-[1400px]'>
				<div
					ref={container}
					className='w-full relative flex lg:flex-row flex-col-reverse justify-between sm:items-start items-center gap-16 px-6 lg:px-0'
				>
					{" "}
					<div className='flex flex-col items-start xl:pl-10 z-20 w-full'>
						<h2
							ref={textRef}
							style={textStyle}
							className=' uppercase font-karlotte text-primary text-left leading-[120%] pb-4 xl:max-w-[700px] max-w-[600px] w-full'
						>
							Building more than just websites
						</h2>
						<p
							ref={textRef2}
							className='font-suisse text-sm max-w-[580px] text-primary text-left'
						>
							When you partner with Studio Amaka, you gain more than a
							website. You gain a space that works tirelessly for your brand,
							exuding quiet confidence and making every interaction meaningful.
							It tells your story, invites people to engage, and drives results.
						</p>{" "}
					</div>
					{/* <div className='h-[460px] self-center overflow-hidden xl:h-[460px] xl:max-w-[400px] max-w-[300px] w-full lg:absolute xl:right-20 right-10 xl:top-20 top-48 relative flex items-center justify-center'>
						<img
							// ref={imageRe}
							src={img1}
							className='w-full h-[700px] object-cover'
							alt='image'
						/>

					</div> */}
					<div
						
						className='overflow-hidden h-[360px] lg:h-[460px] lg:max-w-[400px] w-full lg:absolute xl:right-20 right-0 top-48 lg:top-20 flex justify-center items-center'
					>
						<img
							ref={imageRef}
							src={img1}
							className='w-full h-[700px] object-cover'
							alt='image'
						/>
					</div>
				</div>

				<p
					style={textStyle}
					className='font-karlotte text-center text-primary py-8'
				>
					{" "}
					—{" "}
				</p>

				<div className='w-full relative flex lg:flex-row flex-col-reverse justify-end sm:items-end lg:items-start items-center gap-16 px-6 lg:px-0'>
					{" "}
					<div
						ref={container2}
						className='overflow-hidden h-[360px] lg:h-[460px] lg:max-w-[400px] w-full lg:absolute lg:left-8 xl:left-20 left-0 bottom-48 lg:bottom-20 flex justify-center items-center'
					>
						<img
							ref={imageRef2}
							src={img1}
							className='w-full h-[700px] object-cover'
							alt='image'
						/>
					</div>
					<div className='flex flex-col items-end xl:pr-10 w-full'>
						<h2
							ref={textRef3}
							style={textStyle}
							className=' uppercase  font-karlotte text-primary text-right leading-[120%] pb-4 md:pl-10 max-w-[700px] xl:max-w-[800px]'
						>
							Creating homes for your brands
						</h2>
						<p
							ref={textRef4}
							className='font-suisse text-sm max-w-[580px] text-primary text-right w-full block'
						>
							A well-crafted digital home gives your brand more than just a
							presence—it provides a platform for growth, connection, and
							lasting impact. It’s where your audience discovers who you are,
							trusts what you stand for, and takes action that drives your
							success.
						</p>{" "}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BoldText;
