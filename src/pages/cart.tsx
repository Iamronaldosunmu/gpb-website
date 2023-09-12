import { Link } from "react-router-dom";
import Form from "../components/cart/Form";
import Container from "../components/container";
import Nav from "../components/nav";
import Recommended from "../components/shop-details/Recommended";
import MiniNav from "../components/shop/MiniNav";
import Footer from "../sections/Footer";

const Cart = () => {
	return (
		<main>
			<Nav />
			<Container className="mt-[200px]">
				<MiniNav
					classname="text-right"
					paths={["Home", "Shop Print", "Cart"]}
				/>
				<Link
					to="/shop"
					className="flex gap-x-[10px] items-center mt-[30px]"
				>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/chevron-right.svg"
						alt=""
					/>
					<span className="text-[23px] text-[#3C3B3B] font-medium">Back to Shop</span>
				</Link>
			</Container>
			<Form />
			<Recommended />
			<Footer />
		</main>
	);
};

export default Cart;
