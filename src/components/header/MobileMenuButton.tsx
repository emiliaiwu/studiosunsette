import { useGlobalContext } from "../../context/useGlobalContext";

interface ScrollProp {
	isScrolled: boolean;
	btnColor: string;
}

const MenuButton: React.FC<ScrollProp> = ({ isScrolled, btnColor}) => {
	const { toggleMenu, isMenuOpen } = useGlobalContext();

	return (
		<div onClick={toggleMenu} className='menu group lg:hidden z-50'>
			<span
				className={`menu-span ${
					isMenuOpen ? "-translate-x-[10px]" : "translate-x-0"
				} ${isScrolled ? "bg-black" : btnColor}`}
			></span>
			<span
				className={`menu-span ${
					isMenuOpen ? "translate-x-0" : "translate-x-[-10px]"
				} ${isScrolled ? "bg-black" : btnColor} `}
			></span>
		</div>
	);
};

export default MenuButton;
