import { useState } from "react";
import Form from "../../Form/index";
import Button from "../Button";
import Payment from "../index";

interface Props {
	email?: string;
	address?: string;
	shippingAddressDetails?: string;
	goToForm?: () => void;
	submitData: (paymentType: string) => void;
	clientSecret?: string;
	clientSecretLoading: boolean;
}



const Shipping = ({ email, shippingAddressDetails, goToForm, submitData, clientSecretLoading, clientSecret }: Props) => {
	const [showPayment, setShowPayment] = useState(false);
	const [page, setPage] = useState("shipping");
	const [showButton, setShowButton] = useState(true);

	const handleLeftButtonClick = () => {
		setPage("form");
		setShowButton(false);
	};
	const handleRightButtonClick =  () => {
		
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
								rightButtonLabel={clientSecretLoading ? "Loading..." : "continue to payment"}
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
					<Form
						page={page}
						setPage={setPage}
					/>
				</div>
			)}

			{showPayment && (
				<Payment clientSecret={clientSecret} clientSecretLoading={clientSecretLoading} submitData={submitData} />
			)}
		</>
	);
};

export default Shipping;
