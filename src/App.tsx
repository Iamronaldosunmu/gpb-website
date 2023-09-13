import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
      <div>
      </div>
    </>
  );
}


export default App;
