import { useContext, useEffect, useRef } from "react";
import img1 from "../../assets/desklaamp.webp";
import InquiryForm from "./Form";
import GlobalContext from "../../context/GlobalContext";

const InquireForm = () => {
	const context = useContext(GlobalContext);
	const container = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		if (context?.registerRef) {
			context.registerImageRef(imageRef.current, container.current);
		}
	}, [context]);

	return (
		<section className=' bg-primary-light w-full h-full flex justify-center items-center'>
			<div className='flex w-full h-full justify-between flex-col lg:flex-row lg:gap-10 gap-20 max-w-[1440px]'>
				<div className='h-screen lg:sticky top-0 w-full'>
					<div className='h-screen w-full flex items-center justify-center overflow-hidden'>
						<img
							src={img1}
							alt='Emilia Iwu'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
				
				<div className='w-full flex justify-center items-center md:px-12 px-8 lg:py-32 pb-32'>
					<InquiryForm />
				</div>
			</div>
		</section>
	);
};

export default InquireForm;
