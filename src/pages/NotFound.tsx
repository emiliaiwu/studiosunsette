import { Helmet } from "react-helmet-async";
// import Header from "../components/header/Header";
// import PlaceHolderPage from "../components/PlaceHolderPage";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";


const NotFound = () => {
	return (
		<div className='w-full h-full'>
			<Helmet>
				<title>404 Page - Studio Amaka</title>
				<meta name='description' content='This page is missing' />
			</Helmet>
			<ComingSoon/>
			{/* <Header textColor='text-primary' btnColor='bg-primary' />
			<PlaceHolderPage text='Oops! Page Not Found!' heading='404' /> */}
			<Footer />
		</div>
	);
};

export default NotFound;
