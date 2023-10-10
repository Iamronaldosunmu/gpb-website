import { useEffect } from "react";
import useCartStore from "../../../store/cart";
import useProductStore from "../../../store/products";
import useOrderStore from "../../../store/order";

const Order = () => {
	const { cart, clearCart } = useCartStore();

	const { order } = useOrderStore();
	const { products } = useProductStore();

	const subTotal = order.reduce((total, item) => total + (parseInt((products?.find((product) => product.id === item.id)?.discountPrice as string) || "") || parseInt(products?.find((product) => product.id === item.id)?.price as string)), 0);

	const taxRate = 0;
	const tax = subTotal * taxRate;

	const totalCost = subTotal + tax;

	useEffect(() => {
		setTimeout(() => {
			clearCart();
		}, 1000);
	}, []);

	return (
		<div className="lg:p-20 lg:border lg:border-black rounded-lg lg:rounded-none">
			{order.map((item, index) => (
				<div
					key={index}
					className={`flex justify-between border border-black rounded-lg mb-3 lg:pb-0 lg:mb-0 sm:p-10 p-5 lg:px-0  lg:border-none ${index !== cart.length - 1 ? "pb-9" : ""}`}
				>
					<div className="flex">
						<div className="mr-2 lg:mr-7">
							<img
								src={products?.find((product) => product.id === item.id)?.productImage ? products?.find((product) => product.id === item.id)?.productImage[0].url : ""}
								alt={products?.find((product) => product.id === item.id)?.name}
								className="sm:w-20 sm:h-20 w-16 h-16 object-cover rounded-md lg:rounded-none"
							/>
						</div>
						<div>
							<h3 className="text-base font-semibold uppercase">{products?.find((product) => product.id === item.id)?.name}</h3>
							<p className="text-xs">COLOR : {item.backgroundColor}</p>
							<p className="text-xs">EXCLUSIVITY : {item.exclusivity ? "YES" : "NO"}</p>
							<p className="text-sm font-semibold lg:hidden">₦{parseInt((products?.find((product) => product.id === item.id)?.discountPrice as string) || (products?.find((product) => product.id === item.id)?.price as string)).toLocaleString()}</p>
						</div>
					</div>
					<div className="flex justify-end relative">
						<p className="text-sm font-semibold hidden lg:block">₦{parseInt((products?.find((product) => product.id === item.id)?.discountPrice as string) || (products?.find((product) => product.id === item.id)?.price as string)).toLocaleString()}</p>
					</div>
				</div>
			))}

			<h2 className="mt-20 lg:hidden text-2xl font-semibold">Order summary</h2>
			<div className="border-b lg:mt-9 mt-2 mb-7 border-b-black"></div>
			<div className="flex justify-between text-lg mb-7">
				<div>
					<p>SubTotal</p>
					<p>Tax</p>
				</div>
				<div>
					<p>₦{subTotal.toLocaleString()}</p>
					<p>₦{tax.toLocaleString()}</p>
				</div>
			</div>
			<div className="border-b mb-7 border-b-black"></div>
			<div className="flex justify-between text-lg">
				<div className="font-semibold">
					<p className="text-2xl font-bold">Total:</p>
				</div>
				<div>
					<p>₦{totalCost.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Order;
