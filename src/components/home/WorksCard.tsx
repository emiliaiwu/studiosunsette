import { Link } from "react-router";
import { WorksProp } from "../../type/types";

const WorksCard: React.FC<WorksProp> = ({
	image,
	client,
	url,
	serviceType,
}) => {
	return (
		<div className='max-w-[300px] min-w-[280px] w-full'>
			<div className='w-full h-[360px] flex justify-center items-center relative bg-primary'>
				<img
					src={image}
					className='w-full h-full opacity-80 '
					alt='work image'
				/>
				<div className='w-20 h-20 border rounded-full flex justify-center items-center absolute'>
					<Link target='_blank' to={url} className='-rotate-45 text-white'>
						⟶
					</Link>
				</div>
			</div>

			<div>
				<div className='flex flex-row justify-between items-center mb-4 mt-2'>
					<h2 className='font-meditate text-lg'>{client}</h2>
					<p className='uppercase text-xs font-suisseMedium'>{serviceType}</p>
				</div>
				<p className=' text-[13px] font-suisse text-justify'>
					Created a chic and minimalist website for their jewelry line. Built a
					seamless online store for their handcrafted candles.
				</p>
			</div>
		</div>
	);
};

export default WorksCard;
