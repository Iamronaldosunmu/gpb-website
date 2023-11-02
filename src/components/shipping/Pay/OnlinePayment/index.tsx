import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";

//@ts-ignore
const OnlinePaymentForm = ({ setStripe, setElements }) => {
	const stripe = useStripe();
	const elements = useElements();
	useEffect(() => {
		setStripe(stripe);
		setElements(elements);
	}, [stripe, elements]);
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
