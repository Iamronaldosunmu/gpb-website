import { useState } from "react";
import Button from "../Button";
import Payment from "../index";
import Form from "../../Form/index";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
	email?: string;
	address?: string;
	shippingAddressDetails?: string;
	goToForm?: () => void;
}

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const options = {
	// passing the client secret obtained in step 3
	clientSecret: "32841d6768791dc6b7cd4f763133f59a17aca0c7626ff554a3580f07129854b11fa581c9883ec1eec7f88e78cf57f2efe8b7ef6249d9b2bc1bbf6c8e42506d03617ff29d3b149533c86214ffb8b8c80b9a0bd3f370412b81738979f870d5306ce11ba5236a2551e9c5d1fc96bdbb4ccea54f27ed5f631fc7730a6ba204390284",
	// Fully customizable with appearance API.
	appearance: {
		/*...*/
	},
};

const Shipping = ({ email, shippingAddressDetails, goToForm }: Props) => {
	const [showPayment, setShowPayment] = useState(false);
	const [page, setPage] = useState("shipping");
	const [showButton, setShowButton] = useState(true);

	const handleLeftButtonClick = () => {
		setPage("form");
		setShowButton(false);
	};
	const handleRightButtonClick = () => {
		setShowPayment(true);
		setShowButton(false);
	};

	return (
		<>
			{page === "shipping" && (
				<div className="p-4 ">
					<div className=" border sm:text-sm text-xs  border-black font-semibold  mb-12 ">
						<div className="flex justify-between gap-[20px] items-center md:p-4 pt-0 m-2 mt-4">
							{" "}
							<p className="mr-3">Contact</p>
							<div className="mr-3">
								<p className="w-full break-all">{email}</p>
							</div>
							<div>
								<div
									className="cursor-pointer"
									onClick={goToForm}
								>
									change
								</div>
								<div className="border-b border-black"></div>
							</div>
						</div>

						{/* <div className="border-b border-b-black"></div>
						<div className="flex gap-[20px] md:p-4 pt-0 m-2 justify-between items-center">
							<p className="mr-2 whitespace-nowrap">ship to</p>
							<p className="mr-2 text-center">{address}</p>
							<div>
								<div
									className="cursor-pointer"
									onClick={goToForm}
								>
									change
								</div>
								<div className="border-b border-black"></div>
							</div>
						</div> */}
					</div>
					<div className="md:mb-20">
						<h2 className="text-2xl pb-5 mb-2 font-bold">Shipping Method</h2>
						<div className="border border-black pt-4 md:pt-7 md:px-7 px-3 h-[5rem]">{shippingAddressDetails}</div>
					</div>
					<div>
						{showButton && (
							<Button
								leftButtonLabel="return to information"
								rightButtonLabel="continue to payment"
								onLeftButtonClick={handleLeftButtonClick}
								onRightButtonClick={handleRightButtonClick}
								className=""
							></Button>
						)}
					</div>
				</div>
			)}
			{page === "form" && (
				<div>
					<Form />
				</div>
			)}

			{showPayment && <Payment />}
		</>
	);
};

export default Shipping;
