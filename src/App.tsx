import { Route, Routes } from "react-router-dom";
import { About, Home, Inquire, NotFound, Services, Works } from "./pages";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./utils/ScrollToTop";
import Links from "./pages/Links";
import PackageDetail from "./pages/PackageDetail";

function App() {
	return (
		<HelmetProvider>
			{" "}
			<ScrollToTop />
			<Routes>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='services' element={<Services />} />
				<Route path='works' element={<Works />} />
				<Route path='inquire' element={<Inquire />} />
				<Route path='links' element={<Links />} />
				<Route path='links/:slug' element={<PackageDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</HelmetProvider>
	);
}

export default App;
