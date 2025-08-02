import { Helmet } from "react-helmet-async";
// import Header from "../components/header/Header";
// import MainHero from "../components/MainHero";
// import img from "/assets/worksimage.webp";
// import { Incoming } from "../components/services/Incoming";
// import AllServices from "../components/services/AllServices";
// import CustomService from "../components/services/CustomService";
// import Works from "../components/home/Works";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
// import Cta from "../components/Cta";
// import Announcement from "../components/Announcement";


const Services = () => {
	return (
		<>
			<Helmet>
				<title>Services - Studio Sunsette</title>
				<meta
					name='Services'
					content='Explore Studio Sunsette Services. From Shopify, Squarespace to Webflow.'
				/>
			</Helmet>
			<ComingSoon/>
			{/* <Announcement />
			<Header /> */}
			{/* <main className="w-full h-full">
				<MainHero bgImage={img} text='Creating Digital Homes for Brands' />
				<Incoming />

				<AllServices />
				<CustomService />
			
				<Cta />
			</main> */}
			<Footer />
		</>
	);
};

export default Services;
