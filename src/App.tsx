import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import ShopPrint from "./pages/shop-print";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop-print" element={<ShopPrint/>} />
      </Routes>
    </>
  );
}

export default App;
