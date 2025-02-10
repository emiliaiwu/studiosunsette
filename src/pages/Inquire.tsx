import img from "../assets/mila.webp";
import { Helmet } from "react-helmet-async";
import MainHero from "../components/MainHero";
import Header from "../components/header/Header";
import Intro from "../components/inquire/Intro";
import Footer from "../components/Footer";
import InquireForm from "../components/inquire/InquireForm";
import Announcement from "../components/Announcement";

const Inquire = () => {
	return (
		<>
			<Helmet>
				<title>Inquire - Studio Amaka</title>
				<meta name='description' content='Studio Amaka Service Inquiry Page' />
			</Helmet>
			<Announcement />
			<Header />
			<main className='w-full flex justify-center items-center flex-col'>
				<MainHero bgImage={img} text=' Your Dream site IS ONE EMAIL AWAY' />
				<Intro />
				<InquireForm />
			</main>
			<Footer />
		</>
	);
};

export default Inquire;
