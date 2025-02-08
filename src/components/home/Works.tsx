import { works } from "../../db/db";
import ArrowLink from "../ArrowLink";
import WorksCard from "./WorksCard";

const Works = () => {
	return (
		<section className=' w-full py-28 bg-primary-light flex justify-center items-center'>
			<div className='flex w-full lg:gap-20 gap-4 justify-between items-center h-full px-8'>
				<div className='lg:h-[140px] md:flex hidden font-suisse uppercase text-sm tracking-widest text-center rotate-90 whitespace-nowrap'>
					Featured Works
				</div>

				<div className='flex flex-col gap-20'>
					<div>
						<ArrowLink link='/works' label='works' />
					</div>
					<div>
						<ul className='w-full flex flex-row items-start gap-8 overflow-x-auto'>
							{works.map(({ url, client, serviceType, image }, index) => (
								<li key={index} className=''>
									{" "}
									<WorksCard
										url={url}
										client={client}
										serviceType={serviceType}
										image={image}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
