import { useEffect, useRef } from "react";
import Nav from "../components/nav";
import BottomFooter from "../sections/Footer/BottomFooter";
import SubscribeForm from "../sections/Footer/SubscribeForm";
import Clients from "../sections/home/Clients";
import Fabrics from "../sections/home/Fabrics";
import FeaturedIn, { BrandLogoImage } from "../sections/home/FeaturedIn";
import AboutUs from "../sections/home/aboutus";
import Features from "../sections/home/features";
import Hero from "../sections/home/hero";
import ShopCollections from "../sections/home/shopcollections";
import Testimonial from "../sections/home/testimonials";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";


const Home: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	// const [locomotiveRef] = useLocomotiveScroll({
	//   ref: scrollRef,
	//   smooth: true,
	//   smoothMobile: true
	// })

	return (
		<main
			data-scroll-container
			ref={scrollRef}
		>
			<Nav />
			<Hero />
			<ShopCollections />
			<AboutUs />
			<Features />
			<Fabrics />
			<Clients />
			<Testimonial />
			<FeaturedIn />
			<SubscribeForm />
			<BottomFooter />
		</main>
	);
};

export default Home;
