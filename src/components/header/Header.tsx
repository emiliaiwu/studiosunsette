import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/useGlobalContext";
import MenuButton from "./MobileMenuButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type TextProp = {
	textColor?: string;
	btnColor?: string;
};

const Header: React.FC<TextProp> = ({
	textColor = "text-primary-light",
	btnColor = "bg-white",
}) => {
	const navLinks = [
		{ to: "/about", label: "About" },
		{ to: "/services", label: "Services" },
		{ to: "/", label: "studio ÁmÁkÁ" },
		{ to: "/works", label: "Works" },
		{ to: "/inquire", label: "Inquire" },
	];

	const navLink = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/services", label: "Services" },
		{ to: "/works", label: "Works" },
		{ to: "/inquire", label: "Inquire" },
	];

	const { isMenuOpen, toggleMenu } = useGlobalContext();

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = ""; 
		}

		return () => {
			document.body.style.overflow = ""; 
		};
	}, [isMenuOpen]);

	const menuRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		if (menuRef.current) {
			tl.current = gsap.timeline({ paused: true }).fromTo(
				menuRef.current,
				{ opacity: 0, display: "none" },
				{
					opacity: 1,
					display: "flex",
					duration: 0.6,
					ease: "power3.inOut",
				}
			);
		}

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);

	useEffect(() => {
		if (tl.current) {
			if (isMenuOpen) {
				tl.current.play();
			} else {
				tl.current.reverse();
			}
		}
	}, [isMenuOpen]);

	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`flex w-full lg:h-20 h-16 font-suisseMedium ${
				!isScrolled
					? `bg-transparent ${textColor}`
					: "bg-primary-light text-primary-dark"
			} z-50 top-7 fixed max-w-[1920px]`}
		>
			<nav className='w-full md:px-12 px-4 flex justify-between items-center h-full relative'>
				<div className='w-full flex flex-row justify-between items-center lg:hidden'>
					<Link to={"/"} className='text-2xl font-karlotte uppercase block'>
						STUDIO AMAKA
					</Link>
					<MenuButton isScrolled={isScrolled} btnColor={btnColor} />
				</div>

				<div
					style={{ display: "none" }}
					ref={menuRef}
					className={` 
						
					 h-screen bg-primary-light w-screen absolute top-1 left-0 flex flex-col gap-40 lg:hidden `}
				>
					<div className='w-full flex flex-row justify-between items-center lg:hidden h-16 md:px-12 px-4 pr-8'>
						<Link
							to={"/"}
							className='text-2xl font-karlotte uppercase z-50 block text-primary'
						>
							STUDIO AMAKA
						</Link>
						<MenuButton isScrolled={isScrolled} btnColor={"bg-primary"} />
					</div>
					<ul
						className={` 
						
					 flex flex-col justify-center items-center gap-8 justify-self-center`}
					>
						{navLink.map((link, index) => (
							<li
								onClick={toggleMenu}
								key={index}
								className={
									"text-sm uppercase font-suisseMedium text-primary text-center hover:opacity-50 duration-200 ease-in transition-opacity"
								}
							>
								<NavLink
									to={link.to}
									className={({ isActive }) =>
										isActive
											? "active flex items-center gap-1"
											: "flex items-center gap-1"
									}
								>
									{({ isActive }) => (
										<>
											<div
												className={`w-[6px] h-[6px] rounded-full ${
													isActive ? "bg-primary" : "bg-transparent"
												}`}
											></div>
											{link.label}
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<ul className='w-full hidden lg:flex flex-row justify-between items-center'>
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={
								index !== 2
									? "text-xs uppercase hover:opacity-50 duration-200 ease-in transition-opacity "
									: "text-2xl font-karlotte uppercase text-center hover:opacity-50 duration-200 ease-in transition-opacity"
							}
						>
							<NavLink
								to={link.to}
								className={({ isActive }) =>
									isActive
										? "active flex items-center gap-1"
										: "flex items-center gap-1"
								}
							>
								{({ isActive }) => (
									<>
										{index !== 2 && (
											<div
												className={`w-[6px] h-[6px] rounded-full ${
													isActive && !isScrolled
														? "bg-primary-light"
														: "bg-transparent"
												}`}
											></div>
										)}
										{link.label}
									</>
								)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
