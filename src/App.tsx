import { BrowserRouter, Route, Routes } from "react-router";
import { About, Home, Inquire, NotFound, Services, Works } from "./pages";
import { HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				{" "}
				<Routes>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='services' element={<Services />} />
					<Route path='works' element={<Works />} />
					<Route path='inquire' element={<Inquire />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
