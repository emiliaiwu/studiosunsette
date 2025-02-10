import { Link } from "react-router";

const Footer = () => {
	// const textStyle = {
	// 	fontSize: "clamp(60px, 11vw, 160px)",
	// };

	const socialMediaPlatforms = [
		{
			label: "Instagram",
			url: "https://www.instagram.com/studioamaka.co/",
		},
		{
			label: "Threads",
			url: "https://www.threads.net/studioamaka.co",
		},
		{
			label: "TikTok",
			url: "https://www.tiktok.com/@studioamaka.co",
		},
		{
			label: "Pinterest",
			url: "https://www.pinterest.com/studioamaka",
		},
	];
	return (
		<footer className='bg-primary pt-28 pb-16 w-full flex justify-center items-end lg:px-16 px-8 relative max-w-[1920px]'>
			<div className='text-white w-full flex flex-col justify-center items-start gap-12 '>
				<div className='w-full flex lg:flex-row flex-col gap-16 justify-between items-start'>
					<div>
						<h1 className='font-karlotte text-white sm:text-8xl text-7xl uppercase leading-[100%] mb-8'>
							Studio ÁMÁKÁ
						</h1>
						<p className='font-suisse text-sm max-w-[420px] w-full sm:text-left text-justify'>
							An intentionally run full-service web studio specializing in quiet
							designs that speak volumns. Made for female-led brands and
							businesses.
						</p>
					</div>
					<div className='font-suisse text-sm flex flex-col gap-8 items-start'>
						<div className='flex flex-col'>
							<p>Contact―</p>
							<a
								href='mailto:hello@studioamaka.co'
								className='hover:opacity-50 transition-opacity duration-200 ease-in block'
							>
								hello@studioamaka.co
							</a>
						</div>
						<div className='flex flex-col'>
							<p>Follow―</p>
							<ul className='flex flex-row'>
								{socialMediaPlatforms.map((social, index) => (
									<li key={index}>
										<Link
											to={social.url}
											target='_blank'
											className='hover:opacity-50 transition-opacity duration-200 ease-in'
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
						<div className='flex flex-col'>
							<p>Site Credits―</p>
							<p>Designed & Developed by Emilia Iwu</p>
						</div>
					</div>
				</div>
				<div className='uppercase w-full border-t border-primary-light pt-12 border-opacity-50 flex flex-row justify-between items-center'>
					<p className='text-xs font-suisse '>Terms & Conditions</p>
					<p className='text-xs font-suisse text-center'>©2025 STUDIO ÁMÁKÁ</p>
					<p className='text-xs font-suisse text-right'>Privacy Policy</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
