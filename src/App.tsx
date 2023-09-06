import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import GetAQuote from "./pages/get-a-quote";
import Clients from "./pages/clients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="/clients/:name" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
