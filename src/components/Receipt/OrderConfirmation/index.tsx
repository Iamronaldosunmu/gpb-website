interface Props {
	name: string;
	orderNumber: number;
}

const OrderConfirmation = ({ name, orderNumber }: Props) => {
	return (
		<div className="flex flex-col items-center">
			<p className="text-3xl font-semibold">Thank you, {name}</p>
			<p className="text-1xl">You'll receive a confirmation email soon</p>
			<div className="flex">
				<p className="text-sm">Order number: {orderNumber}</p>
			</div>
		</div>
	);
};

export default OrderConfirmation;
