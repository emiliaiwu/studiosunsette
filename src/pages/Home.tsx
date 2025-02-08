import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import BoldText from "../components/home/BoldText";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Services from "../components/home/Services";
// import Works from "../components/home/Works";
// import Process from "../components/Process";
import About from "../components/home/About";
import IntroAnimation from "../components/animation/IntroAnimation";
// import Marquee from "../components/Marquee";
import Announcement from "../components/Announcement";

const Home = () => {
	// const [showIntro, setShowIntro] = useState<boolean>(true);

	// useEffect(() => {
	// 	const introState = sessionStorage.getItem("showIntro");
	// 	if (introState === "false") {
	// 		setShowIntro(false);
	// 	}
	// }, []);

	// const handleIntroEnd = () => {
	// 	sessionStorage.setItem("showIntro", "false");
	// 	setShowIntro(false);
	// };

	return (
		<>
			<Helmet>
				<title>Home — Studio Amaka</title>
				<meta
					name='description'
					content='Boutique web studio for female led brands'
				/>
			</Helmet>
			<Announcement />
			<Header />
			<main>
				<IntroAnimation />
				<Hero />
				<Intro />
				<BoldText />
				<About />
				<Services />
				{/* <Works /> */}
				{/* <Process /> */}
				<AboutMe />
				<Cta />
			</main>

			<Footer />
		</>
	);
};

export default Home;
