import { Link } from "react-router-dom";
import Form from "../components/cart/Form";
import Container from "../components/container";
import Nav from "../components/nav";
import Recommended from "../components/shop-details/Recommended";
import MiniNav from "../components/shop/MiniNav";
import Footer from "../sections/Footer";
import useProductStore from "../store/products";
import PageContainer from "../components/PageContainer";

const Cart = () => {

	return (
		<PageContainer>
			<Nav />
			<Container className="mt-[100px] lg:mt-[200px]">
				<MiniNav
					classname="text-right"
					paths={["Home", "Shop Print", "Cart"]}
				/>
				<Link
					to="/shop"
					className="flex gap-[7px] md:gap-x-[10px] items-center mt-[13px] lg:mt-[116px]"
				>
					<img
						className="md:w-6 md:h-6 w-[20px] h-[20px] object-cover"
						src="/assets/images/chevron-right.svg"
						alt=""
					/>
					<span className="text-[14px] lg:text-[23px] text-[#3C3B3B] font-medium">Back to Shop</span>
				</Link>
			</Container>
			<Form />
			<Recommended />
			<Footer />
		</PageContainer>
	);
};

export default Cart;
