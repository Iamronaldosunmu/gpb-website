import { useState, ChangeEvent } from "react";
import OnlinePaymentForm from "./OnlinePayment";
import OfflinePayment from "./OfflinePayment";
import Button from "./Button";
import OrderReview from "./OrderReview";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import useOrderStore from "../../../store/order";
import useCartStore from "../../../store/cart";

const Payment = () => {
	const [selectedPayment, setSelectedPayment] = useState("");
	const [showPayment, setShowPayment] = useState(true);
	const [showButton, setShowButton] = useState(true);
	const [showReview, setShowReview] = useState(false);
	const { setOrder } = useOrderStore();
	const { cart } = useCartStore();

	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSelectedPayment = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedPayment(event.target.value);
	};

	const handleLeftButtonClick = () => {
		setShowPayment(false);
	};

	const handleRightButtonClick = () => {
		setShowReview(true);
		setShowButton(false);
	};

	const handleFormSubmit = async (event) => {
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
			setErrorMessage(error.message);
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
				{selectedPayment === "online" && <OnlinePaymentForm />}
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
