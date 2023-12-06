import { useEffect } from "react";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import MiniNav from "../components/shop/MiniNav";
import ProductGrid from "../components/shop/ProductGrid";
import { useProducts } from "../hooks/useProducts";
import Footer from "../sections/Footer";
import useProductStore from "../store/products";

const Shop = () => {
	const { data: productData } = useProducts();
	const { setProducts } = useProductStore();
	useEffect(() => {
		setProducts(productData);
	}, [productData]);
	return (
		<PageContainer className=" mt-[100px] lg:mt-[200px]">
			<Container>
				<div className="text-[24px] md:text-[32px] font-bold bg-white text-center lg:text-left">Shop Print</div>
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
