import Container from "../components/container";
import MiniNav from "../components/shop/MiniNav";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../sections/Footer";

const Shop = () => {
	return (
		<main className=" mt-[100px] lg:mt-[200px]">
			{/* <Nav /> */}
			<Container>
				<div className="text-[32px] font-bold bg-white lg:pl-[73px] text-center lg:text-left">Shop Print</div>
				<MiniNav
					classname="text-center lg:text-right"
					paths={["Home", "Shop Print"]}
				/>
			</Container>
			<ProductGrid />
			<Footer />
		</main>
	);
};

export default Shop;
