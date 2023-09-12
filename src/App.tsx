import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Shop from "./pages/shop";
import PrintDetails from "./pages/print-details";
import Cart from "./pages/cart";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
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
		</>
	);
}

export default App;
