import { useForm } from "react-hook-form";
import Container from "../container";
import CartList from "./CartList";

const Form = () => {
	const options = ["Nigeria", "Columbia", "United Kingdom"];
	const { register } = useForm();
	return (
		<Container className="mt-[105px] mb-6">
			<div className="flex gap-x-[127px]">
				<CartList />
				<div className="w-full max-w-[500px] mt-3">
					<h2 className="font-semibold text-[36px]">Order Summary</h2>
					<hr className="border-black" />
					<div className="flex w-full justify-between items-center mt-6">
						<span className="text-[32px] font-medium">Subtotal</span>
						<span className="text-2xl font-lato font-semibold">N80,000</span>
					</div>
					<div className="text-xl font-medium overflow-hidden mt-10">
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
						<p className="text-[#FB7A7A] text-center text-[22px] font-bold mt-6">your order qualifies for free shipping</p>
						<hr className="border-black mt-[60px]" />
					</div>
					<div className="flex justify-between items-center mt-[54px]">
						<span className="text-[22px] font-bold ">estimated total:</span>
						<span className="text-2xl font-semibold font-lato">N80,000</span>
					</div>
					<p className="text-[#3C3B3B] text-center font-lato text-2xl mt-[26px]">shipping & discounts calculated at checkout</p>
					<div className="mt-10">
						<button
							type="submit"
							className="w-full text-2xl font-semibold tracking-wide outline-0 bg-black py-[18px] text-white"
						>
							CheckOut
						</button>
						<div className="mt-8 flex justify-center items-center gap-x-3">
							<img
								className="w-[22px] h-[25px] object-cover"
								src="/assets/images/lock.svg"
								alt=""
							/>
							<span className="font-semibold text-2xl">Secure Checkout</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Form;
