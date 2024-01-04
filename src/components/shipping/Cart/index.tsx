import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCartStore from "../../../store/cart";
import useProductStore, { Product } from "../../../store/products";
import { Link } from "react-router-dom";
import useColourOptionsStore, { ColourOptions } from "../../../store/colorOptions";

const Cart = ({ closeModal }: { closeModal?: (arg: boolean) => void }) => {
	const { cart } = useCartStore();
	const { products } = useProductStore();
	const { colourOptions } = useColourOptionsStore();

	const getProductPriceInCart = (product: Product) => {
		const cartItem = cart?.find((item) => {
			return item?.id == product?.id;
		});
		const { price, discountPrice } = product || { price: "", discountPrice: "" };
		const initialPrice = discountPrice ? parseInt(discountPrice) : parseInt(price);
		const colourOptionToTextMapping: Record<string, string> = {
			Satisfied: "satisfied",
			Change: "change",
			"2 Changes": "changes2",
			"3 Changes": "changes3",
		};
		let addition = 0;

		if (colourOptions) {
			if (cartItem?.exclusivity == "YES") {
				addition = parseInt(colourOptions["exclusivity"]);
			}
			addition += parseInt(colourOptions[colourOptionToTextMapping[cartItem?.backgroundColor as string] as keyof ColourOptions]);
			// console.log(addition)
		}
		return initialPrice + addition;
	};

	const getSubTotal = () => {
		const productArray = cart.map((item) => products?.find((product) => product.id === item.id));
		let price = 0;
		for (const product of productArray) {
			price += getProductPriceInCart(product as Product);
		}
		return price;
	};
	const subTotal = getSubTotal();
	const totalShippingFee = 0;

	const totalCost = subTotal + totalShippingFee;

	return (
		<div className="flex h-full ">
			<div className="bg-red-100 flex-grow p-6 px-9 max-w-md  mt-4">
				<div className="flex justify-end pt-8 mt-10 md:mt-0">
					<button
						className="lg:hidden"
						onClick={() => closeModal?.(false)}
					>
						X
					</button>
				</div>
				<div className="flex justify-between mb-1 mt-6  ">
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
							className="grid grid-cols-3 pb-9 "
						>
							<div className="w-2/3 flex col-span-2">
								<img
									src={products?.find((product: Product) => product.id === item.id)?.productImage ? products?.find((product: Product) => product.id === item.id)?.productImage[0].url : ""}
									alt={products?.find((product: Product) => product.id === item.id)?.name || ""}
									className="w-20 h-20 object-cover flex-shrink-0 sm:mr-5 mr-2"
								/>
								<div className="flex-shrink-0">
									<h3 className="text-base font-semibold">{products?.find((product: Product) => product.id === item.id)?.name || ""}</h3>
									<p className="text-xs">COLOR : {item.backgroundColor}</p>
									<p className="text-xs">EXCLUSIVITY : {item.exclusivity ? "YES" : "NO"}</p>
								</div>
							</div>

							<div className="flex flex-shrink justify-end">
								<p className="text-sm font-semibold price">₦{getProductPriceInCart(products?.find((product: Product) => product.id === item.id) as Product).toLocaleString()}</p>
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
						{/* <p>Tax</p> */}
					</div>
					<div>
						<p>₦{subTotal.toLocaleString()}</p>
						<p>{totalShippingFee > 0 ? `N${totalShippingFee}` : "Free"}</p>
						{/* <p>₦{tax.toLocaleString()}</p> */}
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
