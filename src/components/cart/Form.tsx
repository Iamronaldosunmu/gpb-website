import { Product } from "../../store/products";
import useColourOptionsStore, { ColourOptions } from "../../store/colorOptions";
import { useForm } from "react-hook-form";
import useCartStore from "../../store/cart";
import useProductStore from "../../store/products";
import Container from "../container";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";
import { interactionAnimations } from "../../utils/framer-default-animations";
import { motion } from "framer-motion";

const Form = () => {
	const options = ["Nigeria", "Columbia", "United Kingdom"];
	const { register } = useForm();
	const { cart } = useCartStore();
	const { products } = useProductStore();
	const navigate = useNavigate();
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
		const productArray = cart.map((item) => products?.find((product) => product.id == item.id));
		let price = 0;
		for (const product of productArray) {
			price += getProductPriceInCart(product as Product);
		}
		return price.toLocaleString();
		// .reduce((accumulator, product) => accumulator + parseInt(product.price));
	};
	getSubTotal();

	return (
		<Container className="mt-[80px] xl:mt-[105px] mb-6">
			<div className="flex flex-col lg:flex-row  gap-[70px] xl:gap-x-[127px]">
				<CartList getProductPriceInCart={getProductPriceInCart} />
				<div className="w-full lg:max-w-[365px] xl:max-w-[500px] mt-3">
					<h2 className="font-semibold text-[32px] xl:text-[36px] mb-[12px]">Order Summary</h2>
					<hr className="border-black" />
					<div className="flex w-full justify-between items-center mt-6">
						<span className="text-[26px] xl:text-[32px] font-medium">Subtotal</span>
						<span className="text-[22px] zl:text-2xl font-lato font-semibold price">{`₦${getSubTotal()}`}</span>
					</div>
					<div className="text-[18px] xl:text-xl font-medium overflow-hidden mt-8 xl:mt-10">
						<label
							htmlFor="colour"
							className="block text-[#3C3B3B] font-semibold font-lato"
						>
							Country
						</label>
						<div className="select">
							<select
								id="colour"
								className="mt-[22px] py-[9px] px-4 border border-[#181818] w-full"
								{...register("country", { required: true })}
							>
								{options.map((option) => (
									<option
										key={option}
										value={option}
									>
										{option}
									</option>
								))}
							</select>
						</div>
						<p className="text-[#FB7A7A] text-center text-[18px] xl:text-[22px] font-bold mt-6">your order qualifies for free shipping</p>
						<hr className="border-black mt-[45px] xl:mt-[60px]" />
					</div>
					<div className="flex justify-between items-center mt-[34px] xl:mt-[54px]">
						<span className="text-[19px] xl:text-[22px] font-bold ">estimated total:</span>
						<span className="text-[22px] xl:text-2xl font-semibold font-lato price">{`₦${getSubTotal()}`}</span>
					</div>
					<p className="text-[#3C3B3B] text-center font-lato text-[16px] xl:text-2xl mt-[20px] xl:mt-[26px]">shipping & discounts calculated at checkout</p>
					<div className="mt-8 xl:mt-10">
						<motion.button
							{...interactionAnimations}
							disabled={getSubTotal() == "0"}
							type="submit"
							onClick={() => navigate("/order-summary")}
							className="w-full text-[22px] xl:text-2xl font-semibold tracking-wide outline-0 bg-black py-[14px] xl:py-[18px] text-white disabled:opacity-70 transition-all"
						>
							Check Out
						</motion.button>
						<div className="mt-8 flex justify-center items-center gap-x-3">
							<img
								className="w-[22px] h-[25px] scale-[0.9] xl:scale-100 object-cover"
								src="/assets/images/lock.svg"
								alt=""
							/>
							<span className="font-semibold text-[20px] xl:text-2xl">Secure Checkout</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Form;
