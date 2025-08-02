import img from "/assets/mila.webp";
import { Helmet } from "react-helmet-async";
import MainHero from "../components/MainHero";
import Header from "../components/header/Header";
import Intro from "../components/inquire/Intro";
import Footer from "../components/Footer";
import InquireForm from "../components/inquire/InquireForm";


const Inquire = () => {
	return (
		<>
			<Helmet>
				<title>Inquire - Studio Sunsette</title>
				<meta name='Inquire' content='Studio Sunsette Service Inquiry Page' />
			</Helmet>
			
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
