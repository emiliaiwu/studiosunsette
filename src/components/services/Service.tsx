import { useState } from "react";
import ArrowLink from "../ArrowLink";

type ServiceProp = {
	image: string;
	serviceType: string;
	deliverables: string[];
	description: string;
	exclusions: string[];
	timeline: string;
	extras: string[];
};

const Service = ({
	image,
	service,
}: {
	image: string;
	service: ServiceProp;
}) => {
	const [activeList, setActiveList] = useState<string>("deliverables");
	const [list, setList] = useState<string[]>(service.deliverables);

	const handleClick = (item: string) => {
		if (item === "deliverables") {
			setActiveList("deliverables");
			setList(service.deliverables);
		} else if (item === "extras") {
			setActiveList("extras");
			setList(service.extras);
		} else if (item === "investment") {
			setActiveList("investment");
			setList(service.exclusions);
		}
	};

	return (
		<div className='bg-primary-light flex lg:flex-row flex-col w-full justify-center items-start min-h-screen max-h-[1100px]'>
			<div className='min-h-screen max-h-[1100px] h-[400px] lg:w-1/2 w-full lg:sticky top-0 self-stretch hidden lg:flex'>
				<img
					src={image}
					alt='service image'
					loading="lazy"
					className='h-full w-full object-cover serviceImage'
				/>
			</div>
			<div className='lg:w-1/2 w-full px-8 flex items-start justify-center h-full pt-20 pb-10 self-center bg-primary-light'>
				<div className='max-w-[800px] h-full flex flex-col justify-between'>
					<div className='flex flex-row justify-between items-center w-full'>
						{/* <p className='font-suisseBold text-xs uppercase'>
							service #{index + 1}
						</p> */}
						<p className='font-suisseBold text-xs uppercase mb-8'>
							Timeline:{" "}
							<span className='font-suisseMedium'>{service.timeline}</span>
						</p>
					</div>
					<div className='flex flex-col gap-12 w-full'>
						<div>
							<h2 className='font-meditate text-3xl mb-4 uppercase'>
								{service.serviceType}
							</h2>
							<p className='font-suisse text-sm text-justify max-w-[480px] w-full'>
								{service.description}
							</p>
						</div>
						<div className='flex flex-col justify-between items-start gap-6 w-full'>
							{" "}
							<div className='uppercase font-suisseBold text-sm flex flex-row items-center justify-between w-full'>
								<button
									onClick={() => handleClick("deliverables")}
									className={`text-primary border-black flex items-center gap-1 uppercase ${
										activeList === "deliverables" ? "opacity-100" : "opacity-50"
									}`}
								>
									{activeList === "deliverables" && (
										<span className='block w-[6px] h-[6px] bg-black rounded-full'></span>
									)}{" "}
									Deliverables
								</button>

								<button
									onClick={() => handleClick("extras")}
									className={`text-primary border-black flex items-center gap-1 uppercase ${
										activeList === "extras" ? "opacity-100" : "opacity-50"
									}`}
								>
									{activeList === "extras" && (
										<span className='block w-[6px] h-[6px] bg-black rounded-full'></span>
									)}{" "}
									Extras
								</button>
								<button
									onClick={() => handleClick("investment")}
									className={`text-primary border-black flex items-center gap-1 uppercase ${
										activeList === "investment" ? "opacity-100" : "opacity-50"
									}`}
								>
									{activeList === "investment" && (
										<span className='block w-[6px] h-[6px] bg-black rounded-full'></span>
									)}{" "}
									Investment
								</button>
							</div>
							<ul className=' font-suisse flex flex-col gap-[6px] text-sm h-[260px]'>
								{list.map((item, index) => (
									<li key={index} className='flex flex-row items-center gap-2'>
										<span className='block w-[4px] h-[4px] bg-black rounded-full'></span>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='w-full'>
						<div className='text-white bg-primary py-2 px-6 inline-block'>
							<ArrowLink link='/inquire' label='inquire here' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
