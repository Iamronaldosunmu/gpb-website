import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Like from "../like";
import useProductStore from "../../store/products";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";
import useCartStore from "../../store/cart";

const Form = () => {
	const colorOptions = ["SATISFIED", "Change", "2 Changes", "3 Changes"];
	const exclusivityOptions = ["NO", "YES"];
	const [isLiked, setIsLiked] = useState(false);
	const { products } = useProductStore();
	const { id } = useParams();
	const product = products?.find((product) => product.id == id);
	const { addToCart, cart } = useCartStore();

	const schema = z
		.object({
			colour: z.string().nonempty({ message: "Colour is Required" }),
			exclusivity: z.string().nonempty({ message: "Exclusivity is Required" }),
		})
		.required();

	type FormData = {colour: "SATISFIED" | "Change" | "2 Changes" | "3 Changes", exclusivity: "YES" | "NO"};

	// Validate all Fields not Just one
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset, 
		watch
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	useEffect(() => {
		const cartItem = cart.find((item) => item.id == product?.id);
		if (cartItem) reset({ colour: cartItem.backgroundColor, exclusivity: cartItem.exclusivity })
		else
		reset({colour: "SATISFIED", exclusivity: "NO"})
	}, [reset])
	const colour = watch("colour");
	const exclusivity = watch("exclusivity");

	const onSubmit = (data: FormData) => {
		addToCart({id: product?.id as string, backgroundColor: data.colour, exclusivity: data.exclusivity })
	};
	const { price, discountPrice } = product || { price: "", discountPrice: "" };
	return (
		<div>
			<div className="mt-4 flex items-center">
				<span className="text-[#232323] text-[32px] font-semibold mr-9">{product?.name}</span>
				<div>
					{/* <p className="price">N{discountPrice ? parseInt(discountPrice)?.toLocaleString() : parseInt(price)?.toLocaleString()}</p>
					{discountPrice && <p className="hidden md:inline-block font-lato line-through text-[#5A3522] ml-2">N{parseInt(price)?.toLocaleString()}</p>} */}
					<span className="text-[#080808] font-semibold font-lato mr-2 price">N{discountPrice ? parseInt(discountPrice)?.toLocaleString() : parseInt(price)?.toLocaleString()}</span>
					{discountPrice && <span className="text-[#BE3F00] font-semibold line-through font-lato price">N{discountPrice ? parseInt(discountPrice)?.toLocaleString() : parseInt(price)?.toLocaleString()}</span>}
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-[61px] flex flex-col justify-center gap-y-[51px] w-full"
			>
				<div className="text-xl w-full font-medium overflow-hidden">
					<label
						htmlFor="colour"
						className="block text-[#3C3B3B] font-semibold font-lato"
					>
						COLOUR : {colour}
					</label>
					<div className="select">
						<select
							id="colour"
							className="mt-[22px] py-[9px] px-4 border border-[#181818] w-full"
							{...register("colour", { required: true })}
						>
							{colorOptions.map((option) => (
								<option
									key={option}
									value={option}
								>
									{option}
								</option>
							))}
						</select>
					</div>
					{errors.colour && <p className="text-red-500 mt-1">{errors.colour.message}</p>}
				</div>
				<div className="text-xl font-medium">
					<label
						htmlFor="colour"
						className="block text-[#3C3B3B] font-semibold font-lato"
					>
						EXCLUSIVITY : {exclusivity}
					</label>
					<div className="select">
						<select
							id="exclusivity"
							className="mt-[22px] py-[9px] px-4 border border-[#181818] w-full"
							{...register("exclusivity", { required: true })}
						>
							{exclusivityOptions.map((option) => (
								<option value={option}>{option == "NO" ? option : "YES - Would Be Taken Off The Site After Purchase"}</option>
							))}
						</select>
					</div>
					{errors.exclusivity && <p className="text-red-500 mt-1"> {errors.colour && <p className="text-red-500 mt-1">{errors.exclusivity.message}</p>}</p>}
				</div>
				<div className="w-full flex items-center gap-x-[18px]">
					<motion.button 
						{...interactionAnimations}
						whileHover={{ scale: 1.02 }}
						whileTap={{scale:0.96}}
						type="submit"
						className="w-full text-2xl font-semibold outline-0 bg-black py-[18px] text-white"
					>
						Add To Cart
					</motion.button>
					<div
						onClick={() => setIsLiked(!isLiked)}
						className="px-[11px] outline-0"
					>
						<Like liked={isLiked} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
