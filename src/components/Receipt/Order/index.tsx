interface Item {
	name: string;
	color: string;
	exclusivity: boolean;
	imageUrl?: string;
	price: number;
	isFree: boolean;
	shippingFee?: number;
}

const Order = ({ items }: { items: Item[] }) => {
	const subTotal = items.reduce((total, item) => total + item.price, 0);

	const totalShippingFee = items
		.filter((item) => !item.isFree)
		.reduce((total, item) => total + (item.shippingFee || 0), 0);

	const taxRate = 0.1;
	const tax = subTotal * taxRate;

	const totalCost = subTotal + totalShippingFee + tax;
	return (
		<div className="p-20">
			{items.map((item, index) => (
				<div
					key={index}
					className={`flex justify-between ${index !== items.length - 1 ? "pb-9" : ""}`}
				>
					<div className="flex">
						<div className="mr-7">
							<img
								src="/assets/images/item.png"
								alt={item.name}
								className="w-20 h-20 object-cover"
							/>
						</div>
						<div>
							<h3 className="text-base font-semibold">{item.name}</h3>
							<p className="text-xs">COLOR : {item.color}</p>
							<p className="text-xs">EXCLUSIVITY : {item.exclusivity ? "YES" : "NO"}</p>
						</div>
					</div>
					<div className="flex justify-end">
						<p className="text-sm font-semibold">N{item.price}</p>
					</div>
				</div>
			))}
			<div className="border-b mt-9 mb-7 border-b-black"></div>
			<div className="flex justify-between text-lg mb-7">
				<div>
					<p>SubTotal</p>
					<p>Shipping</p>
					<p>Tax</p>
				</div>
				<div>
					<p>N{subTotal}</p>
					<p>{totalShippingFee > 0 ? `N${totalShippingFee}` : "Free"}</p>
					<p>N{tax}</p>
				</div>
			</div>
			<div className="border-b mb-7 border-b-black"></div>
			<div className="flex justify-between text-lg">
				<div className="font-semibold">
					<p className="text-2xl font-bold">Total</p>
				</div>
				<div>
					<p>N{totalCost}</p>
				</div>
			</div>
		</div>
	);
};

export default Order;
