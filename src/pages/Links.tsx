// import { Helmet } from "react-helmet-async";
// import img1 from "../../public/assets/rebranding.webp";
// import { Link } from "react-router";

// const Links = () => {
// 	const studioLinks = [
// 		{
// 			label: "SEE THE WEBSITE",
// 			url: "https://studiosunsette.com",
// 		},
// 		{
// 			label: "THE WEBSITE PACKAGE",
// 			url: "https://studiosunsette.com/links/website-package",
// 		},
// 		{
// 			label: "THE SHOPIFY PACKAGE",
// 			url: "https://studiosunsette.com/links/shopify-package",
// 		},
// 		{
// 			label: "INQUIRE HERE",
// 			url: "https://studiosunsette.com",
// 		},
// 	];

// 	return (
// 		<>
// 			<Helmet>
// 				<title>Links — Studio Sunsette</title>
// 				<meta
// 					name='Links'
// 					content='Boutique web studio for female led brands'
// 				/>
// 			</Helmet>

// 			<main className='md:h-[97vh] flex flex-col md:flex-row py-10 gap-16 justify-center items-center max-w-[800px] px-10 lg:px-0'>
// 				<div className='max-h-[460px] w-full h-full max-w-[400px] '>
// 					<img
// 						src={img1}
// 						alt='Studio Sunsette Website'
// 						loading='lazy'
// 						className='h-full w-full object-cover'
// 					/>
// 				</div>

// 				<div className='w-full'>
// 					<ul className='flex flex-col gap-4 w-full'>
// 						{studioLinks.map((link, index) => (
// 							<li
// 								key={index}
// 								className='md:w-[360px] border-[0.5px] border-primary flex justify-center items-center w-full'
// 							>
// 								<Link
// 									to={link.url}
// 									target='_blank'
// 									className='py-4 w-full text-center text-[10px] hover:opacity-50 transition-opacity duration-200 ease-in font-terminaDemi'
// 								>
// 									{link.label}
// 								</Link>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			</main>

// 			<footer>
// 				<p className='text-[8px] termina2 pt-10 md:pt-0 pb-1'>
// 					2025 STUDIO SUNSETTE | ALL RIGHTS RESERVED
// 				</p>
// 			</footer>
// 		</>
// 	);
// };

// export default Links;

import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../../public/assets/rebranding.webp";
import { Link } from "react-router";
import { gsap } from "gsap";

const Links = () => {
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

	const studioLinks = [
		{
			label: "SEE THE WEBSITE",
			url: "https://studiosunsette.com",
		},
		{
			label: "5-PAGE WEBSITE",
			url: "https://studiosunsette.com/links/signature-website",
		},
		{
			label: "10-PAGE WEBSITE",
			url: "https://studiosunsette.com/links/signature-luxe-website",
		},
		{
			label: "SHOPIFY LITE PACKAGE",
			url: "https://studiosunsette.com/links/shopify-lite",
		},
		{
			label: "SHOPIFY LUXE PACKAGE",
			url: "https://studiosunsette.com/links/shopify-luxe",
		},
		{
			label: "INQUIRE HERE",
			url: "https://studiosunsette.com",
		},
	];

	return (
		<>
			<Helmet>
				<title>Links — Studio Sunsette</title>
				<meta
					name='Links'
					content='Boutique web studio for female led brands'
				/>
			</Helmet>

			<main
				ref={mainRef}
				style={{ clipPath: "inset(0 100% 0 0)" }}
				className='md:h-[97vh] flex flex-col md:flex-row py-10 gap-16 justify-center items-center max-w-[800px] px-10 lg:px-0 overflow-hidden'
			>
				<div className='max-h-[460px] w-full h-full max-w-[400px]'>
					<img
						src={img1}
						alt='Studio Sunsette Website'
						loading='lazy'
						className='h-full w-full object-cover'
					/>
				</div>

				<div className='w-full'>
					<ul className='flex flex-col gap-4 w-full'>
						{studioLinks.map((link, index) => (
							<li
								key={index}
								className='md:w-[360px] border-[0.5px] border-primary flex justify-center items-center w-full'
							>
								<Link
									to={link.url}
									target='_blank'
									className='py-4 w-full text-center text-[10px] hover:opacity-50 transition-opacity duration-200 ease-in font-terminaDemi'
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</main>

			<footer>
				<p className='text-[8px] termina2 pt-10 md:pt-0 pb-1'>
					2025 STUDIO SUNSETTE | ALL RIGHTS RESERVED
				</p>
			</footer>
		</>
	);
};

export default Links;
