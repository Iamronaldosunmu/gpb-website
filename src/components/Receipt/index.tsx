import Nav from "../nav";
import BrowseButton from "./BrowseButton";
import Order from "./Order";
import OrderConfirmation from "./OrderConfirmation";
import SubscribeForm from "../../sections/Footer/SubscribeForm";
import DeliveryDetails from "./DeliveryDetails";
import BottomFooter from "../../sections/Footer/BottomFooter";
const items = [
	{
		name: "Item 1",
		color: "Change",
		exclusivity: true,
		imageUrl: "item1.jpg",
		price: 100000,
		isFree: true,
		shippingFee: 0,
	},
	{
		name: "Item 2",
		color: "Change",
		exclusivity: false,
		imageUrl: "item2.jpg",
		price: 15000,
		isFree: false,
		shippingFee: 5,
	},
];

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
			<div className="mx-20">
				<Nav />
				<div className="mt-[150px]">
					<div className="mb-20">
						<h2 className="text-4xl font-semibold mb-8">Payment</h2>
						<BrowseButton />
					</div>
					<div className="flex justify-center mb-10">
						<OrderConfirmation
							name="rrrrrrrrr rrreeeeeeee"
							orderNumber={10225}
						/>
					</div>
					<div className="border border-black mb-7">
						<Order items={items} />
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
			</div>
			<SubscribeForm />
			<BottomFooter />
		</>
	);
};

export default Receipt;
