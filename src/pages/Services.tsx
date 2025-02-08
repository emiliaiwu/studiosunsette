import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import MainHero from "../components/MainHero";
import img from "../assets/worksimage.png";
import { Incoming } from "../components/services/Incoming";
import AllServices from "../components/services/AllServices";
import CustomService from "../components/services/CustomService";
// import Works from "../components/home/Works";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Announcement from "../components/Announcement";


const Services = () => {
	return (
		<>
			<Helmet>
				<title>Services - Studio Basique</title>
				<meta
					name='description'
					content='Explore Studio Amaka Services. From Shopify, Squarespace to Webflow.'
				/>
			</Helmet>
			<Announcement />
			<Header />
			<main>
				<MainHero bgImage={img} text='Creating Digital Homes for Brands' />
				<Incoming />

				<AllServices />
				<CustomService />
				{/* <Works /> */}
				<Cta />
			</main>
			<Footer />
		</>
	);
};

export default Services;
