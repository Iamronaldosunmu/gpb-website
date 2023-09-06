import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OrderSummary from "./pages/orderSummary";
// import Payment from "./components/shipping/Payment";


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
      </Routes>
      {/* <Payment/> */}
    </>
  );
}

export default App;
