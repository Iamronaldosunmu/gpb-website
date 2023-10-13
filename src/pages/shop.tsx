import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import MiniNav from "../components/shop/MiniNav";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../sections/Footer";

const Shop = () => {
	return (
		<PageContainer className=" mt-[100px] lg:mt-[200px]">
			<Container>
				<div className="text-[24px] md:text-[32px] font-bold bg-white lg:pl-[73px] text-center lg:text-left">Shop Print</div>
				<MiniNav
					classname="text-center lg:text-right"
					paths={["Home", "Shop Print"]}
				/>
			</Container>
			<ProductGrid />
			<Footer />
		</PageContainer>
	);
};

export default Shop;
