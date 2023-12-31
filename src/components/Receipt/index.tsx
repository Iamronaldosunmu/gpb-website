import BottomFooter from "../../sections/Footer/BottomFooter";
import SubscribeForm from "../../sections/Footer/SubscribeForm";
import Container from "../container";
import Nav from "../nav";
import BrowseButton from "./BrowseButton";
import DeliveryDetails from "./DeliveryDetails";
import Order from "./Order";
import OrderConfirmation from "./OrderConfirmation";

const deliveryAddress = {
	name: "John Doe",
	address: "plot 1, isheri north  02587549",
	productNumber: 12345,
	duration: "2 days",
};

const billingAddress = {
	name: "Jane Doe",
	address: "1234 plot 2, isheri north",
	productNumber: 54321,
	duration: "3 days",
};

const paymentMethod = "Credit Card";

const Receipt = () => {

	return (
		<>
			<Container className="mt-[100px] lg:mt-[250px]">
				<Nav />
				<div className="mt-[150px]">
					<div className="mb-20">
						<h2 className="text-4xl font-semibold mb-8">Payment Successful!</h2>
						<BrowseButton />
					</div>
					<div className="flex justify-center mb-10">
						<OrderConfirmation
							// name=""
							// orderNumber={10225}
						/>
					</div>
					<div className="lg:border border-black mb-7">
						<Order />
					</div>
					<div className="border border-black">
						<DeliveryDetails
							billingAddress={billingAddress}
							deliveryAddress={deliveryAddress}
							paymentMethod={paymentMethod}
						/>
					</div>
                    <div className="flex justify-center">
                    <BrowseButton />

                    </div>

				</div>
			</Container>
			<SubscribeForm />
			<BottomFooter />
		</>
	);
};

export default Receipt;
