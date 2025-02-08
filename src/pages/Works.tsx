import { Helmet } from "react-helmet-async";
// import img from "../assets/worksimage.png"
// import MainHero from "../components/MainHero";
import Header from "../components/header/Header";
// import WorksDisplay from "../components/works/WorksDisplay";
// import Cta from "../components/Cta";
import Footer from "../components/Footer";
import PlaceHolderPage from "../components/PlaceHolderPage";
import Announcement from "../components/Announcement";

const Works = () => {
	return (
		<>
			<Helmet>
				<title>Works - Studio Basique</title>
				<meta
					name='description'
					content='Welcome to the home page of My Website!'
				/>
			</Helmet>
			<Announcement />
			<Header textColor="text-primary" btnColor="bg-primary" />
			<PlaceHolderPage
				text='Stay tuned—my best works are coming soon!'
				heading='WORKS'
			/>
			{/* <MainHero bgImage={img} text='Homes made with Soul & strategy' />
			<WorksDisplay />
			<Cta />
			*/}
			<Footer />
		</>
	);
};

export default Works;
