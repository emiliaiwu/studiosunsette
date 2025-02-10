import { useContext, useEffect, useRef } from "react";
import img1 from "../../assets/desklaamp.webp";
import ArrowLink from "../ArrowLink";
import GlobalContext from "../../context/GlobalContext";

const Services = () => {
	const textRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const context = useContext(GlobalContext);
	const container2 = useRef<HTMLDivElement | null>(null);
	const container = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerRef(textRef.current);
			context.registerImageRef(imageRef.current, container.current);
			context.registerImageRef(imgRef.current, container2.current);
		}
	}, [context]);

	// const bgImg1 = {
	// 	backgroundImage: `url(${img1})`,
	// 	backgroundAttachment: "fixed",
	// 	backgroundPosition: "center left",
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundSize: "50% auto",
	// 	height: "100vh",
	// 	width: "100%",
	// };
	// const bgImg2 = {
	// 	backgroundImage: `url(${img1})`,
	// 	backgroundAttachment: "scroll",
	// 	backgroundPosition: "fixed",
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundSize: "cover",
	// 	height: "100vh",
	// 	width: "100%",
	// };

	return (
		<section className=' bg-primary-light w-full h-full relative overflow-x-hidden pb-20 lg:pt-0 pt-20 '>
			<div
				ref={container}
				className='flex w-full h-full justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-10'
			>
				{/* <div style={bgImg1} className='xl:w-[50%] w-full hidden xl:flex'></div>
				<div style={bgImg2} className='xl:hidden w-full '></div> */}

				<div className='h-screen w-full relative lg:flex items-center justify-center overflow-y-hidden hidden'>
					<img
						ref={imageRef}
						src={img1}
						alt='Emilia Iwu'
						loading="lazy"
						className='h-[160%] w-full object-cover'
					/>
					{/* <img
						src={mypics}
						alt='Emilia Iwu'
						className='h-[60vh] w-[420px] absolute left-0'
					/> */}
				</div>

				<div
					ref={container2}
					className='xl:w-[100%] w-full flex justify-center items-center px-4 text-primary'
				>
					<div
						ref={textRef}
						className='max-w-[380px] w-full flex flex-col gap-5'
					>
						<ArrowLink link='/services' label='Services' />
						<div>
							<p className='text-sm text-justify font-suisse mb-3'>
								I work with a few platforms to make sure your website feels just
								right for you and what you’re building. Whether you’re starting
								fresh or reimagining an existing space, there’s something here
								that will fit your needs.
							</p>

							<p className='text-sm text-justify font-suisseBold'>
								Shopify | Squarespace | Showit | Wix | Webflow | +More
							</p>
						</div>
						<div className='h-[200px] max-w-[380px] w-full relative overflow-hidden flex justify-center items-center'>
							<img
								ref={imgRef}
								src={img1}
								className='w-full h-[400px] object-cover'
								alt='image'
							/>
						</div>
						<p className='text-sm text-justify font-suisse'>
							And if you need something completely one-of-a-kind, I can build a
							custom site from the ground up just for you.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
