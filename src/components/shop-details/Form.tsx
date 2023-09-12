import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Like from "../like";

const Form = () => {
	const options = ["Satisfied", "Jason", "Ronald", ""];
	const [isLiked, setIsLiked] = useState(false);

	const schema = z
		.object({
			colour: z.string().nonempty({ message: "Colour is Required" }),
			exclusivity: z.string().nonempty({ message: "Exclusivity is Required" }),
		})
		.required();

	type FormData = z.infer<typeof schema>;

	// Validate all Fields not Just one
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<div>
			<div className="mt-4 flex items-center">
				<span className="text-[#232323] text-[32px] font-semibold mr-9">SHINE</span>
				<div>
					<span className="text-[#080808] font-semibold font-lato mr-2">N80,000</span>
					<span className="text-[#BE3F00] font-semibold line-through font-lato">N98,700</span>
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
						COLOUR : Satisfied
					</label>
					<div className="select">
						<select
							id="colour"
							className="mt-[22px] py-[9px] px-4 border border-[#181818] w-full"
							{...register("colour", { required: true })}
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
					{errors.colour && <p className="text-red-500 mt-1">{errors.colour.message}</p>}
				</div>
				<div className="text-xl font-medium">
					<label
						htmlFor="colour"
						className="block text-[#3C3B3B] font-semibold font-lato"
					>
						EXCLUSIVITY : Satisfied
					</label>
					<div className="select">
						<select
							id="exclusivity"
							className="mt-[22px] py-[9px] px-4 border border-[#181818] w-full"
							{...register("exclusivity", { required: true })}
						>
							{options.map((option) => (
								<option value={option}>{option}</option>
							))}
						</select>
					</div>
					{errors.exclusivity && <p className="text-red-500 mt-1"> {errors.colour && <p className="text-red-500 mt-1">{errors.exclusivity.message}</p>}</p>}
				</div>
				<div className="w-full flex items-center gap-x-[18px]">
					<button
						type="submit"
						className="w-full text-2xl font-semibold outline-0 bg-black py-[18px] text-white"
					>
						Add To Cart
					</button>
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
