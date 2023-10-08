import Container from "../components/container";
import Cart from "../components/shipping/Cart";
import Form from "../components/shipping/Form";
import Nav from "../components/shipping/Nav";
import BottomFooter from "../sections/Footer/BottomFooter";

const OrderSummary: React.FC = () => {
	return (
		<>
			<Container className="mt-[200px] w-full">
				<Nav />{" "}
			</Container>
			<Container className="mb-[5rem] mt-6 ">
				<div className="grid md:grid-cols-2 gap-4 mr-9">
					<div className="cols-span-1">{<Form />}</div>

					<div className="cols-span 1 h-full ml-9">
						{" "}
						<Cart />
					</div>
				</div>
			</Container>
			<BottomFooter />
		</>
	);
};

export default OrderSummary;
