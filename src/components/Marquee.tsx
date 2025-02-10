import gsap from 'gsap';
import { useEffect, useRef } from 'react'

const Marquee = () => {
    const firstText = useRef<HTMLDivElement | null>(null);
		const secondText = useRef<HTMLDivElement | null>(null);
		const slider = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
		  if (!firstText.current || !secondText.current || !slider.current) return;
			const textWidth = firstText.current.offsetWidth;

			gsap.fromTo(
				slider.current,
				{ x: 0 },
				{
					x: -textWidth,
					duration: 30, 
					ease: "none",
					repeat: -1,
				}
			);

			// Ensure the second text starts right after the first text
			secondText.current.style.left = `${textWidth}px`;
		}, []);

		const textStyle = {
			fontSize: "clamp(60px, 12vw, 100px)",
		};

  return (
		<section className='w-full flex flex-col justify-center items-center z-40 px-4 gap-1 overflow-hidden'>
			<div
				ref={slider}
				className='slider h-full w-full flex flex-row relative whitespace-nowrap'
			>
				<div
					ref={firstText}
					style={textStyle}
					className=' font-karlotte text-primary uppercase leading-[100%] borde-b border-white border-opacity-50 whitespace-nowrap'
				>
					sQUARESPACE • SHOPIFY • WEBFLOW • SHOWIT • WIX •&nbsp;
				</div>

				<div
					ref={secondText}
					style={textStyle}
					className='font-karlotte text-primary uppercase leading-[100%] borde-b border-white border-opacity-50 '
				>
					{" "}
					SQUARESPACE • SHOPIFY • WEBFLOW • SHOWIT • WIX •
				</div>
			</div>
		</section>
	);
}

export default Marquee