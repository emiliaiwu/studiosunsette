import { useContext, useEffect, useRef } from "react";
import GlobalContext from "../context/GlobalContext";

const Process = () => {
	const textRefs = useRef<(HTMLElement | null)[]>([]);
	
	const headRef = useRef<HTMLHeadingElement>(null);
	const context = useContext(GlobalContext);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(headRef.current);
		}
		textRefs.current.forEach((el) => {
			if (el && context?.registerRef) {
				context.registerRef(el);
			}
		});

		// headRefs.current.forEach((el) => {
		// 	if (el && context?.registerTextRef) {
		// 		context.registerTextRef(el);
		// 	}
		// });
	}, [context]);

	const process = [
		{
			title: "discovery",
			description:
				"The journey begins with you sharing your story. Through a detailed inquiry form, you’ll tell me all about your brand—what drives you, your goals, and the vision you have for your website. This is where you can go deep, sharing the essence of what makes your work meaningful and the impact you want to create. From there, I’ll take the time to understand everything you’ve shared. This step ensures I’m aligned on your vision, creating a solid foundation for the site we’ll build together.",
		},
		{
			title: "design direction",
			description:
				"With your vision in focus, I’ll start shaping the look and feel of your website. This phase is where ideas become tangible. I’ll present a design direction that reflects your style and speaks to your audience, combining clean, minimalist aesthetics with intentional details. You’ll have the opportunity to provide feedback as we refine the visuals together, ensuring every element feels authentic and aligned with your goals. This is where your digital presence begins to take form.",
		},
		{
			title: "development",
			description:
				"Once the design is finalized, I bring it to life. Using the platform of your choice—whether it’s Squarespace, Shopify, or custom—I’ll develop a website that not only looks beautiful but also functions seamlessly. Every interaction, every transition, and every detail will be carefully crafted to ensure an intuitive and engaging user experience. I’ll keep you updated throughout this phase, so you’ll see your vision transform into a fully functional space ready to work for your brand.",
		},
		{
			title: "delivery",
			description:
				"The final phase is where everything comes together. Your website is tested, refined, and prepared for launch. I’ll walk you through every detail, ensuring you feel confident managing your new digital space. But it doesn’t end there. I provide one month of aftercare to ensure a smooth transition. During this time, I’ll be available to answer any questions, make minor adjustments, and help you settle into your new online home with ease. Your online home is waiting. Let us bring it to life.",
		},
	];

	return (
		<section className='bg-primary py-40 w-full flex justify-center items-center'>
			<div className='text-primary-light font-suisse max-w-[1280px] w-full'>
				<h2 ref={headRef} className='text-sm uppercase mb-20 text-center'>
					The Process
				</h2>
				<ul className='grid xl:grid-cols-4 grid-cols-1 xxs:grid-cols-2 gap-10 px-10'>
					{process.map((pro, index) => (
						<li
							ref={(el) => (textRefs.current[index] = el)}
							key={index}
							className='w-full'
						>
							<h3
							
								className='uppercase text-xs mb-2'
							>
								0{index + 1} / {pro.title}
							</h3>
							<p className='text-xs text-justify'>{pro.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Process;
