import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";
import GetAQuote from "./pages/get-a-quote";
import Client from "./pages/clients/[name]";
import Clients from "./pages/clients";

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
      </Routes>
      <div>
      </div>
    </>
  );
}


export default App;
