import { Link, useParams } from "react-router";
import { packages } from "../db/db";
import img1 from "../../public/assets/rebranding.webp"

const PackageDetail = () => {
	const { slug } = useParams<{ slug?: string }>();

	const content = packages.find((item) => item.slug === slug);

	if (!content) {
		return;
	}

	return (
		<section className='w-full h-full flex justify-center items-start lg:gap-40 md:gap-20 relative'>
			<div className='lg:w-1/2 md:w-[30%] md:flex hidden'></div>
			<div className='md:h-[100vh] lg:w-1/2 md:w-[40%] fixed top-0 left-0 md:flex hidden'>
				<img
					src={img1}
					alt='Studio Sunsette Website'
					loading='lazy'
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='md:w-1/2 w-full px-10 md:px-0 flex justify-center items-start flex-col gap-10 py-24'>
				<div className='text-2xl absolute top-4'>
					<Link
						to={"/links"}
						target='_blank'
						className='hover:opacity-50 transition-opacity duration-200 ease-in'
					>
						←
					</Link>
				</div>
				<div className='w-full'>
					<h1 className='font-terminaBold text-sm uppercase mb-4'>
						{content.packageTitle}
					</h1>
					<p className='text-sm max-w-[400px]'>{content.description}</p>
				</div>

				<div>
					<h2 className='font-terminaBold text-[10px] uppercase mb-2'>
						Timeline:{" "}
					</h2>
					<p className='text-sm'>{content.timeline}</p>
				</div>

				<div>
					<h2 className='font-terminaBold text-[10px] uppercase mb-2'>
						Inclusions
					</h2>{" "}
					<ul>
						{content.deliverables.map((item, index) => (
							<li key={index} className='text-sm leading-loose'>
								{" "}
								+ {item}{" "}
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className='font-terminaBold text-[10px] uppercase mb-2'>
						Investment
					</h2>
					<ul>
						{content.investment.map((item, index) => (
							<li key={index} className='text-sm leading-loose'>
								{" "}
								{item}{" "}
							</li>
						))}
					</ul>
				</div>
				<div className='border-[0.5px] border-primary px-6 h-8 inline-flex justify-center items-center font-terminaDemi'>
					<Link
						to={"/links"}
						target='_blank'
						className='hover:opacity-50 transition-opacity duration-200 ease-in text-[10px] uppercase'
					>
						Want this? inquire here
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PackageDetail;
