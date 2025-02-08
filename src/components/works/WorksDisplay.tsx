import { useState } from "react";
import { works, WorksProp } from "../../db/db";
import WorksCard from "../home/WorksCard";

const WorksDisplay = () => {
	const [activeList, setActiveList] = useState<string>("all");
	const [list, setList] = useState<WorksProp[]>(works);

	const handleClick = (item: string) => {
		if (item === "squarespace") {
			setActiveList("squarespace");
			setList(works.filter((work) => work.serviceType === "squarespace"));
		} else if (item === "wix") {
			setActiveList("wix");
			setList(works.filter((work) => work.serviceType === "wix"));
		} else if (item === "shopify") {
			setActiveList("shopify");
			setList(works.filter((work) => work.serviceType === "shopify"));
		} else if (item === "webflow") {
			setActiveList("webflow");
			setList(works.filter((work) => work.serviceType === "webflow"));
		} else if (item === "showit") {
			setActiveList("showit");
			setList(works.filter((work) => work.serviceType === "showit"));
		} else if (item === "custom") {
			setActiveList("custom");
			setList(works.filter((work) => work.serviceType === "custom"));
		} else if (item === "all") {
			setActiveList("all");
			setList(works);
		}
	};

	const buttons: string[] = [
		"all",
		"squarespace",
		"shopify",
		"wix",
		"webflow",
		"showit",
		"custom",
	];

	return (
		<section className=' w-full bg-primary-light min-h-[100vh] pb-36 pt-20 flex flex-col lg:justify-start justify-center items-center'>
			<div className='sticky top-0 z-30 lg:h-[100px] h-[50px] w-full bg-primary-light'></div>
			<div className='w-full flex lg:flex-row flex-col justify-between items-center lg:items-start lg:gap-16 px-8 max-w-[1440px] '>
				<div className='sticky top-[40px] lg:h-[400px] h-[100px] bg-primary-light z-30'> 
					<ul className='flex lg:flex-col flex-row gap-4 lg:w-[160px] w-[300px] flex-wrap  justify-between'>
						{buttons.map((btn, index) => (
							<li
								key={index}
								className={`font-suisseBold text-sm uppercase text-primary ${
									activeList === btn ? "opacity-100" : "opacity-50"
								}`}
							>
								<button
									className='uppercase text-sm'
									onClick={() => {
										handleClick(btn);
									}}
								>
									{btn}
								</button>
							</li>
						))}
					</ul>
				</div>{" "}
				<div className='w-full flex justify-center items-center'>
					<ul className='w-full grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 lg:justify-between justify-center items-center'>
						{list.length === 0 ? (
							<li className='flex justify-center items-center font-suisse text-base text-primary'>
								<p>No works found.</p>
							</li>
						) : (
							list.map(({ url, client, serviceType, image }, index) => (
								<li key={index} className='flex justify-center items-center'>
									<WorksCard
										url={url}
										client={client}
										serviceType={serviceType}
										image={image}
									/>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default WorksDisplay;
