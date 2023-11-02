import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import useCartStore from "../../../store/cart";
import useOrderStore from "../../../store/order";
import Button from "./Button";
import OfflinePayment from "./OfflinePayment";
import OnlinePaymentForm from "./OnlinePayment";
import OrderReview from "./OrderReview";
import { Stripe, loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51NsMsRBCo90vBq7i6bIjf5DE8ITOGlPLpIzYcjHXGUbiVU0rzsiAuYKbnpfKIUNgElOXJ1vQrTNE55DKMoyoXeGK00qCc1RHki");

interface PaymentProps {
	clientSecret?: string;
	clientSecretLoading: boolean;
	submitData: () => void;
}
const Payment = ({ clientSecret, clientSecretLoading, submitData }: PaymentProps) => {
	const [selectedPayment, setSelectedPayment] = useState("");
	const [showPayment, setShowPayment] = useState(true);
	const [showButton, setShowButton] = useState(true);
	const [showReview, setShowReview] = useState(false);
	const { setOrder } = useOrderStore();
	const { cart } = useCartStore();

	const [stripe, setStripe] = useState<Stripe>();
	const [elements, setElements] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	//@ts-ignore
	const handleSelectedPayment = async (event: any) => {
		setSelectedPayment(event.target.value);
		if (event.target.value == "online" && !clientSecret) {
			await submitData()
		}
	};

	const handleLeftButtonClick = () => {
		setShowPayment(false);
	};

	const handleRightButtonClick = () => {
		setShowReview(true);
		setShowButton(false);
	};

	//@ts-ignore
	const handleFormSubmit = async (event: any) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setLoading(true);
		setOrder(cart);
		const { error } = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			confirmParams: {
				return_url: `${window.location.origin}/receipt`,
			},
		});
		setLoading(false);

		if (error) {
			// This point will only be reached if there is an immediate error when
			// confirming the payment. Show error to your customer (for example, payment
			// details incomplete)
			setErrorMessage(error?.message as string);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};

	return (
		<>
			{showPayment && (
				<div className="w-full p-4">
					<div className="w-full my-8">
						<h2 className="font-semibold md:text-3xl text-2xl mb-9 ">Payment</h2>
						<div className="border border-black text-xs font-semibold">
							<div className="flex p-2 m-2 justify-between ">
								<div>
									<input
										id="onlinePayment"
										type="radio"
										className="mr-2"
										value="online"
										name="paymentOption"
										checked={selectedPayment === "online"}
										onChange={handleSelectedPayment}
									/>
									<label htmlFor="onlinePayment">Credit/debit cards</label>
								</div>
								<div className="mx-2">
									<img
										src="/assets/images/online.png"
										alt=""
										className="w-20 sm:w-full object-fit h-full "
									/>
								</div>
							</div>
							<div className="border-b border-b-black m-2"></div>
							<div className="flex m-2 p-2 justify-between">
								<div>
									<input
										type="radio"
										id="offlinePayment"
										className="mr-2"
										value="offline"
										name="paymentOption"
										checked={selectedPayment === "offline"}
										onChange={handleSelectedPayment}
									/>
									<label htmlFor="offlinePayment">Offline Payment</label>
								</div>
								<div className="mx-2">
									<img
										src="/assets/images/offline.png "
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<form
				onSubmit={handleFormSubmit}
				className="w-full"
			>
				{selectedPayment === "online" && clientSecret && (
					<Elements
						stripe={stripePromise}
						options={{
							// passing the client secret obtained in step 3
							clientSecret,
							// Fully customizablFe with appearance API.
							appearance: {
								/*...*/
							},
						}}
					>
						<OnlinePaymentForm setStripe={setStripe} setElements={setElements} />
					</Elements>
				)}
				{clientSecretLoading && <div className="w-full p-4">
				<div className="rounded-lg border mb-8 bg-gray-200  sm:p-5 py-10 text-sm">
					Loading Stripe...
				</div>
			</div>}
				{errorMessage && <div className="text-red-600 text-[14px]">{errorMessage}</div>}
				{selectedPayment === "offline" && <OfflinePayment />}
				{showButton && (
					<Button
						leftButtonLabel="return to shipping"
						rightButtonLabel="Review Order"
						onLeftButtonClick={handleLeftButtonClick}
						onRightButtonClick={handleRightButtonClick}
						className=""
					></Button>
				)}
				{showReview && (
					<OrderReview
						stripe={stripe}
						loading={loading}
						submitForm={() => console.log("submit form")}
						leftButtonClick={() => handleLeftButtonClick()}
					/>
				)}
			</form>
		</>
	);
};

export default Payment;
