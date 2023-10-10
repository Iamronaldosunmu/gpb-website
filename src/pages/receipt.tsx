import Nav from "../components/nav";
import BrowseButton from "../components/Receipt/BrowseButton";
import Order from "../components/Receipt/Order";
import OrderConfirmation from "../components/Receipt/OrderConfirmation";
import SubscribeForm from "../sections/Footer/SubscribeForm";
import Container from "../components/container";

const Receipt = () => {
	

	return (
		<>
			<Container className="mt-[100px] lg:mt-[250px]">
				<Nav />
				<div className="mt-[150px]">
					<div className="mb-20 text-center lg:text-left">
						<h2 className="text-4xl font-semibold mb-8">Payment Successful!</h2>
						<BrowseButton />
					</div>
					<div className="flex justify-center mb-10">
						<OrderConfirmation
						// name="rrrrrrrrr rrreeeeeeee"
						// orderNumber={10225}
						/>
					</div>
					<div className=" mb-7 ">
						<div className="">
							<Order />
						</div>
					</div>
					{/* <div className="lg:border border-black">
						<DeliveryDetails
							billingAddress={billingAddress}
							deliveryAddress={deliveryAddress}
							paymentMethod={paymentMethod}
						/>
					</div> */}
					<div className="flex justify-center">
						<BrowseButton />
					</div>
				</div>
			</Container>
			<SubscribeForm />
			{/* <BottomFooter /> */}
		</>
	);
};

export default Receipt;
