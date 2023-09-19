import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";
import GetAQuote from "./pages/get-a-quote";
import Client from "./pages/clients/[name]";
import Clients from "./pages/clients";
import Shop from "./pages/shop";
import PrintDetails from "./pages/print-details";
import Cart from "./pages/cart";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/nav";
import Loader from "./pages/Loader";

function App() {
	useEffect(() => {
		AOS.init({ once: true });
	}, []);
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
	const routesWithoutNav = ["/"];
	const router = useLocation();
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<AnimatePresence
			mode="wait"
			initial={true}
		>
			{!routesWithoutNav.includes(router.pathname) && <Nav />}
			<Routes>
				<Route
					path="/"
					element={<Loader />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
				<Route
					path="/order-summary"
					element={<OrderSummary />}
				/>
				<Route
					path="/get-a-quote"
					element={<GetAQuote />}
				/>
				<Route
					path="/clients/:name"
					element={<Client />}
				/>
				<Route
					path="/clients"
					element={<Clients />}
				/>
				<Route
					path="/shop"
					element={<Shop />}
				/>
				<Route
					path="/shop/:id"
					element={<PrintDetails />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
			</Routes>
			<div></div>
		</AnimatePresence>
	);
}

export default App;
