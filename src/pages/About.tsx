import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import MainHero from "../components/MainHero";
import about from "/assets/aboutimage.webp";
import AboutText from "../components/about/About";
import BoldText from "../components/about/BoldText";
import Philosophy from "../components/about/Philosophy";
import AboutMe from "../components/AboutMe";
import Process from "../components/Process";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About — Studio Amaka</title>
				<meta
					name='description'
					content='Studio Amaka is a full-service studio specializing in web design & development'
				/>
			</Helmet>
			<Announcement />
			<Header />
			<main className='w-full flex justify-center items-center flex-col'>
				<MainHero bgImage={about} text='FROM The Heart Behind the studio' />
				<AboutText />
				<BoldText />
				<Philosophy />

				<AboutMe />
				<Process />
				<Cta />
			</main>
			<Footer />
		</>
	);
};

export default About;
