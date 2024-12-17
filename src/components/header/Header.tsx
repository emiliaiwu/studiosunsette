import { NavLink } from "react-router";

const Header = () => {
	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/services", label: "Services" },
		{ to: "/works", label: "Works" },
		{ to: "/inquire", label: "Inquire" },
	];
	return (
		<header className="flex bg-black w-full h-20">
			<nav className="w-full">
				<ul className='w-full flex flex-col justify-between bg-red-600'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<NavLink
								to={link.to}
								className='bg-red-700'
								// activeClassName='text-blue-500'
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
