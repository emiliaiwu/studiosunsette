import { Link } from "react-router";

type ArrowLinkProps = {
	link: string;
	label: string;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({ link, label }) => {
	return (
		<Link
			className='overflow-hidden hover:opacity-50 transition-opacity duration-200 ease-in uppercase font-suisseMedium text-xs tracking-widest'
			to={link}
		>
			<span>{label} ⟶</span>
		</Link>
	);
};

export default ArrowLink;
