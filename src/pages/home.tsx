import Nav from "../components/nav";
import BottomFooter from "../sections/Footer/BottomFooter";
import SubscribeForm from "../sections/Footer/SubscribeForm";
import Clients from "../sections/home/Clients";
import Fabrics from "../sections/home/Fabrics";
import FeaturedIn from "../sections/home/FeaturedIn";
import AboutUs from "../sections/home/aboutus";
import Features from "../sections/home/features";
import Hero from "../sections/home/hero";
import ShopCollections from "../sections/home/shopcollections";

const Home: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <ShopCollections />
      <AboutUs />
      <Features />
      <Fabrics />
      <Clients />
      <FeaturedIn />
      <SubscribeForm />
      <BottomFooter />
    </main>
  );
};

export default Home;
