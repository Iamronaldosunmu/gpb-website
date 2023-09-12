import Container from "../components/container";
import Nav from "../components/nav";
import MiniNav from "../components/shop/MiniNav";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../sections/Footer";

const Shop = () => {
	return (
		<main className="mt-[200px]">
			<Nav />
			<Container>
				<div className="text-[32px] font-bold bg-white pl-[73px]">Shop Print</div>
				<MiniNav
					classname="text-right"
					paths={["Home", "Shop Print"]}
				/>
			</Container>
			<ProductGrid />
			<Footer />
		</main>
	);
};

export default Shop;
