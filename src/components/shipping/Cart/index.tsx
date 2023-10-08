import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "../../../store/cart";
import { Link } from "react-router-dom";
import useProductStore, { Product } from "../../../store/products";

const Cart = () => {
	const { cart } = useCartStore();
	const { products } = useProductStore();
	const getSubTotal = () => {
		const productArray = cart.map((item) => products?.find((product) => product.id === item.id));
		let price = 0;
		for (const product of productArray) {
			price += parseInt(product?.discountPrice ? product.discountPrice! : (product?.price as string));
		}
		return price;
	};
	const subTotal = getSubTotal();
	const totalShippingFee = 0;
	const taxRate = 0.1;
	const tax = subTotal * taxRate;

	const totalCost = subTotal + totalShippingFee + tax;

	return (
		<div className="flex h-full ">
			<div className="bg-red-100 flex-grow p-6 px-9 max-w-md lg:max-w-none  mt-4">
				<div className="flex justify-between items-center mb-1 mt-6  ">
					<h2 className="text-2xl font-semibold">Order Summary</h2>
					<Link
						className="underline mx-4"
						to="/cart"
					>
						Edit cart
					</Link>
				</div>
				<div className="border-b border-b-black mb-12"></div>
				<div>
					{cart.map((item, index) => (
						<div
							key={index}
							className="flex pb-9 "
						>
							<div className="w-1/3 ">
								<img
									src={products?.find((product: Product) => product.id === item.id)?.productImage[0].url || ""}
									alt={products?.find((product: Product) => product.id === item.id)?.name || ""}
									className="w-20 h-20 object-cover"
								/>
							</div>
							<div className="w-3/4">
								<h3 className="text-base font-semibold">{products?.find((product: Product) => product.id === item.id)?.name || ""}</h3>
								<p className="text-xs">COLOR : {item.backgroundColor}</p>
								<p className="text-xs">EXCLUSIVITY : {item.exclusivity}</p>
							</div>
							<div>
								<p className="text-sm font-semibold price">₦{parseInt(products?.find((product: Product) => product.id === item.id)?.discountPrice || (products?.find((product: Product) => product.id === item.id)?.price as string)).toLocaleString()}</p>
							</div>
						</div>
					))}
				</div>
				<div className="mb-7 flex items-center">
					<input
						id="apply"
						className="flex-grow py-3 px-3 mr-1 focus:border-none text-xs h-12 outline-none"
						placeholder="Enter gift code or voucher"
						type="text"
					/>
					<button className="bg-black text-white px-5 py-3 text-center hover:cursor-pointer h-12">Apply</button>
				</div>

				<div className="border-b mt-9 mb-7 border-b-black"></div>
				<div className="flex justify-between text-lg mb-7 font-semibold">
					<div>
						<p>SubTotal</p>
						<p>Shipping</p>
						<p>Tax</p>
					</div>
					<div>
						<p>₦{subTotal.toLocaleString()}</p>
						<p>{totalShippingFee > 0 ? `₦${totalShippingFee}` : "Free"}</p>
						<p>₦{tax.toLocaleString()}</p>
					</div>
				</div>
				<div className="border-b mb-7 border-b-black"></div>
				<div className="flex justify-between text-lg mb-[3rem]  font-semibold">
					<div>
						<p className="text-2xl font-bold">Total</p>
					</div>
					<div>
						<p>₦{totalCost.toLocaleString()}</p>
					</div>
				</div>
				<div className="flex justify-center">
					<p className="font-bold text-lg">
						<span className="mr-1">
							<FontAwesomeIcon icon={faLock} />
						</span>
						Secure Checkout
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
