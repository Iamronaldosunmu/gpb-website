interface Props {
	name: string;
	orderNumber: number;
}

const OrderConfirmation = ({ name, orderNumber }: Props) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className=" flex  justify-center items-center">
				<p className="text-xl lg:text-3xl font-semibold text-center">Thank you, {name}</p>
			</div>
			<p className="text-md lg:text-lg text-center">You'll receive a confirmation email soon</p>
				<p className="text-sm">Order number: {orderNumber}</p>

		</div>
	);
};

export default OrderConfirmation;
