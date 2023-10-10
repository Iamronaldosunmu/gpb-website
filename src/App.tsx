import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";
import GetAQuote from "./pages/get-a-quote";
import Client from "./pages/clients/[id]";
import Clients from "./pages/clients";
import Shop from "./pages/shop";
import PrintDetails from "./pages/print-details";
import Cart from "./pages/cart";
import Consultation from "./pages/consultation";
import Membership from "./pages/membership";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/nav";
import Loader from "./pages/Loader";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InitData from "./components/InitData";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import PaymentStatus from "./pages/complete";
import Receipt from "./pages/receipt";
import WishList from "./pages/wish-list";

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
	const location = useLocation();
	const { pathname } = location;

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 300);
	}, [pathname]);

	const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				// refetchOnmount: false,
				cacheTime: 1000 * 60 * 60 * 24, // 24 hours
				refetchOnReconnect: false,
				retry: false,
				staleTime: twentyFourHoursInMs,
			},
		},
	});

	const persister = createSyncStoragePersister({
		storage: window.localStorage,
	});

	return (
		<PersistQueryClientProvider
			persistOptions={{ persister }}
			client={queryClient}
		>
			<InitData />
			{!routesWithoutNav.includes(router.pathname) && <Nav />}
			<AnimatePresence
				mode="wait"
				initial={true}
			>
				<Routes
					key={location.pathname}
					location={location}
				>
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
						path="/clients/:id"
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
					<Route
						path="/wish-list"
						element={<WishList />}
					/>
					<Route
						path="/consultation"
						element={<Consultation />}
					/>
					<Route
						path="/membership"
						element={<Membership />}
					/>
					<Route
						path="/complete"
						element={<PaymentStatus />}
					/>
					<Route
						path="/receipt"
						element={<Receipt />}
					/>
				</Routes>
				{/* <InitData /> */}
			</AnimatePresence>
			<ReactQueryDevtools />
		</PersistQueryClientProvider>
	);
}

export default App;
