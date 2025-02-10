import { useLayoutEffect, useRef } from "react";
import mada from "../../assets/desssk.webp";
import { services } from "../../db/db";
import Service from "./Service";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllServices = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const imageStackRefs = useRef<(HTMLLIElement | null)[]>([]);

	useLayoutEffect(() => {
		if (!sectionRef.current || imageStackRefs.current.length === 0) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				pin: sectionRef.current,
				start: "top top",
				end: "+=" + window.innerHeight * imageStackRefs.current.length,
				scrub: true,
			},
		});

		imageStackRefs.current.forEach((image, index) => {
			if (index === 0) {
				tl.to(image, { yPercent: -100, duration: 1 }, "step" + index);
			} else {
				tl.to(
					image,
					{ yPercent: -160, opacity: 1, duration: 1 },
					"step" + index
				);
			}
		});

		ScrollTrigger.refresh();

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className='bg-primary-light w-full h-full'>
			<div className="hidden lg:block">
				<div ref={sectionRef} className=''>
					<ul className='flex flex-col relative'>
						{services.map((service, index) => (
							<li
								ref={(el) => (imageStackRefs.current[index] = el)}
								key={index}
								className='service-item absolute inset-0 h-screen w-screen'
								style={{
									zIndex: services.length - index,
								}}
							>
								<Service image={mada} service={service} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='lg:hidden'>
				<ul className='flex flex-col relative'>
					{services.map((service, index) => (
						<li
							key={index}
							className='service-item'
							style={{
								zIndex: services.length - index,
							}}
						>
							<Service image={mada} service={service} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default AllServices;
