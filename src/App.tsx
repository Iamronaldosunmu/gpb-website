import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";
import GetAQuote from "./pages/get-a-quote";
import Client from "./pages/clients/[name]";
import Clients from "./pages/clients";
import Shop from "./pages/shop";
import PrintDetails from "./pages/print-details";
import Cart from "./pages/cart";
import Receipt from "./components/Receipt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="/clients/:name" element={<Client />} />
        <Route path="/clients" element={<Clients />} />
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
        <Route path="/Receipt" element={<Receipt />} />

      </Routes>

    </>
  );
}


export default App;
