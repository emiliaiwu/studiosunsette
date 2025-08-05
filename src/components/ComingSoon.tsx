import { Link } from "react-router";
import InquireForm from "./inquire/InquireForm";
import img1 from "../../public/assets/rebranding.webp"
import { useEffect, useRef } from "react";
import gsap from "gsap";


const ComingSoon = () => {

const socialMediaPlatforms = [
	{
		label: "Instagram",
		url: "https://www.instagram.com/studiosunsette/",
	},
	{
		label: "Threads",
		url: "https://www.threads.net/studiosunsette",
	},
	{
		label: "TikTok",
		url: "https://www.tiktok.com/@studiosunsette",
	},
	{
		label: "Pinterest",
		url: "https://www.pinterest.com/studiosunsette",
	},
];

const mainRef = useRef(null);

useEffect(() => {
	gsap.fromTo(
		mainRef.current,
		{
			clipPath: "inset(0 100% 0 0)", // fully hidden from right
		},
		{
			clipPath: "inset(0 0% 0 0)", // fully visible
			duration: 3,
			ease: "power4.inOut",
		}
	);
}, []);


	return (
		<div
			ref={mainRef}
			style={{ clipPath: "inset(0 100% 0 0)" }}
			className='min-h-[100vh] flex flex-col justify-center items-center w-full lg:pt-28 pt-20 md:pt-24'
		>
			<div className='flex flex-col max-w-[900px] w-full md:gap-20 px-10 lg:px-0 lg:flex-row justify-center items-center'>
				<div className='w-full h-full'>
					<img
						src={img1}
						alt='Studio Sunsette Website'
						loading='lazy'
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='flex flex-col justify-between py-10 gap-10 max-w-[400px] w-full'>
					<div>
						<div className='flex-col justify-center items-center'>
							{" "}
							<h1 className='mb-4 termina uppercase text-sm'>
								A Refreshed Presence, Coming Soon
							</h1>
							<div>
								<p className='text-[13px] mb-4'>
									I'm in the process of rebranding, a considered refinement of
									how I bring stories to life through design. This isn’t just a
									refreshed look, but a deeper expression of the values that
									guide my approach: clarity, intention, and meaningful design
									that resonates.
								</p>
								<p className='text-[13px] mb-8'>
									While the website is being updated, the studio remains open.
									I'm continuing to work closely with clients to shape brands
									and build websites. If you'd like to connect about a potential
									project, please fill out the inquiry form below. I’ll follow
									up within two business days.
								</p>
							</div>
						</div>

						<div className='border-[0.5px] border-primary px-6 h-8 inline-flex justify-center items-center'>
							<Link
								to={"/links"}
								target='_blank'
								className='hover:opacity-50 transition-opacity duration-200 ease-in text-xs'
							>
								Explore Links
							</Link>
						</div>
					</div>

					<div>
						<div className='flex flex-col text-sm mb-4'>
							<p className='termina uppercase text-[10px]'>Contact―</p>
							<a
								href='mailto:hello@studioamaka.co'
								className='hover:opacity-50 transition-opacity duration-200 ease-in block text-xs'
							>
								hello@studiosunsette.com
							</a>
						</div>
						<div className='flex flex-col text-sm'>
							<p className='termina uppercase text-[10px]'>Follow―</p>
							<ul className='flex flex-row'>
								{socialMediaPlatforms.map((social, index) => (
									<li key={index}>
										<Link
											to={social.url}
											target='_blank'
											className='hover:opacity-50 transition-opacity duration-200 ease-in text-xs'
										>
											{social.label}
										</Link>
										{index !== socialMediaPlatforms.length - 1 && (
											<span className='mx-2'>|</span>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-[1000px] w-full'>
				<InquireForm />
			</div>

			<p className='text-[8px] termina2 pb-1'>
				2025 STUDIO SUNSETTE | ALL RIGHTS RESERVED
			</p>
		</div>
	);
};

export default ComingSoon;
