import { PaymentElement } from "@stripe/react-stripe-js";

const OnlinePaymentForm = () => {
	return (
		<>
			<div className="w-full p-4">
				<div className="rounded-lg border mb-8 bg-gray-200  sm:p-5 py-10 text-sm">
					<PaymentElement />
				</div>
			</div>
		</>
	);
};

export default OnlinePaymentForm;
