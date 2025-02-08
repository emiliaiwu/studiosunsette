type PlaceHolderProp = {
	heading: string;
	text: string;
};

const PlaceHolderPage: React.FC<PlaceHolderProp> = ({ heading, text }) => {
	return (
		<div className='h-screen w-full overflow-hidden relative bg-primary-light'>
			<div className='w-full h-full flex justify-center items-center inset-0 absolute'>
				<div className='flex flex-col gap-4 text-primary items-center md:pt-16 pt-8'>
					<h1
						className='font-karlotte text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-[0.4em] text-center
'
					>
						{heading}
					</h1>
					<p className='font-suisse text-right w-full lg:mr-24 mr-12 lg:text-sm text-xs'>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PlaceHolderPage;
