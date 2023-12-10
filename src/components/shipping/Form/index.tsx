import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import axiosInstance from "../../../services/apiClient";
import useCartStore, { CartItem } from "../../../store/cart";
import useUserDetailsStore, { UserDetails } from "../../../store/userDetails";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import Shipping from "../Pay/shipping";

const schema = z.object({
	email: z.string().email({ message: "The email format you entered is invalid" }),
	firstName: z.string().min(3, { message: "First Name must be at least 2 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 2 characters" }),
	companyName: z.string().min(2, { message: "Company name should not be less than 2 character" }),
	referral: z.string(),
	country: z.string().min(2, { message: "Country field is required" }),
	zipCode: z.string().min(2, { message: "Zip code is required" }),
	state: z.string().min(2, { message: "Message field is required" }),
	cityName: z.string().min(2, { message: "City Name is required" }),
	address: z.string().min(2, { message: "Your address field is required" }),
	phone: z.string().min(11, { message: "Phone number should be at least 11 characters" }),
});

interface CheckoutPayload {
	email: string;
	customerDetails: { firstName: string; lastName: string; companyName: string; advertisingChannel: string; Country: string; zipCode: string; state: string; City: string; address: string; phoneNumber: string };
	productInfo: { colour: CartItem["backgroundColor"]; productId: string; exclusivity: string }[];
}

type FormProps = {
	page: string;
	setPage: Dispatch<SetStateAction<string>>;
};

type FormData = z.infer<typeof schema>;

const Form = ({ page, setPage }: FormProps) => {
	// const [page, setPage] = useState("form");
	const { userDetails, setUserDetails } = useUserDetailsStore();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	const [formData, setFormData] = useState<FormData>({
		email: "",
		firstName: "",
		lastName: "",
		companyName: "",
		referral: "",
		country: "",
		zipCode: "",
		state: "",
		cityName: "",
		address: "",
		phone: "",
	});

	const [saveInfo, setSaveInfo] = useState(!!localStorage.getItem("userDetails"));
	const { cart } = useCartStore();

	const checkout = async (data: CheckoutPayload) => {
		const res = await axiosInstance.post("/orders", data);
		return res.data;
	};

	const [clientSecret, setClientSecret] = useState("");

	const generateClientSecret = useMutation(checkout, {
		// onSuccess: (data) => {
		// 	setClientSecret(data.clientSecret);
		// },
	});

	useEffect(() => {
		reset(userDetails);
	}, [page]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	const handleFormSubmit = async (data: FieldValues) => {
		setFormData((prevData) => ({
			...prevData,
			...data,
		}));

		setUserDetails(data as UserDetails);

		if (saveInfo) {
			localStorage.setItem("userDetails", JSON.stringify(data));
		} else {
			localStorage.removeItem("userDetails");
		}

		if (isValid) {
			// reset();
			setPage("shipping");
		}
	};

	const submitData = async (paymentType: 'card' | 'bank transfer') => {
		const payload = {
			email: formData.email,
			customerDetails: {
				firstName: formData.firstName,
				lastName: formData.lastName,
				companyName: formData.companyName,
				advertisingChannel: formData.referral,
				Country: formData.country,
				zipCode: formData.zipCode,
				state: formData.state,
				City: formData.cityName,
				address: formData.address,
				phoneNumber: formData.phone,
			},
			paymentType: paymentType,
			productInfo: cart?.map((item) => ({
				colour: item.backgroundColor,
				productId: item.id,
				exclusivity: item.exclusivity == "YES" ? "true" : "false",
			})),
		};

		const result = await generateClientSecret.mutateAsync(payload);
		setClientSecret(result.clientSecret);
	};

	return (
		<div>
			{page === "form" && (
				<form
					onSubmit={handleSubmit(handleFormSubmit)}
					className="p-4 pb-0 text-sm"
				>
					<div className="flex justify-between  mb-5 pb-1">
						<h2 className="font-bold text-2xl">Contact</h2>
						<div className="flex">
							<label
								htmlFor="login"
								className="text-sm"
							>
								Have an account?{" "}
								<input
									id="login"
									className="text-#F7B797 hover:cursor-pointer "
									type="button"
									value="login"
								/>
							</label>
						</div>
					</div>
					<div className="mb-6 pb-4">
						<label
							htmlFor="email"
							className="block mb-2"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							{...register("email")}
							className="w-full border border-black py-2 px-3 outline-none"
						/>
						{errors.email && <p className="text-red-500">{errors.email.message}</p>}
					</div>
					<div>
						<h2 className="text-2xl mb-3 font-semibold">Customer Details</h2>
						<div className="mb-7 pb-7">
							<label
								htmlFor="firstName"
								className="block mb-2"
							>
								First Name
							</label>
							<input
								id="firstName"
								type="text"
								{...register("firstName")}
								className="w-full border py-2 px-3 border-black outline-none"
							/>
							{errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
						</div>
						<div className="mb-7 pb-7">
							<label
								htmlFor="lastName"
								className="block mb-2"
							>
								Last Name
							</label>
							<input
								id="lastName"
								type="text"
								{...register("lastName")}
								className="w-full border py-2 px-3 border-black outline-none"
							/>
							{errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
						</div>
						<div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
							<div className="mb-7 pb-7 mr-2 flex-grow">
								<label
									htmlFor="companyName"
									className="block mb-2"
								>
									Company's Name
								</label>
								<input
									id="companyName"
									type="text"
									{...register("companyName")}
									className="w-full border py-2 px-3 border-black outline-none"
								/>
								{errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
							</div>
							<div className="mb-7 pb-7 flex-shrink-0 flex-grow">
								<label
									htmlFor="referral"
									className="block mb-2"
								>
									How did you hear about us?
								</label>
								<input
									id="referral"
									type="text"
									{...register("referral")}
									className="w-full border py-2 px-3 border-black outline-none"
								/>
								{errors.referral && <p className="text-red-500">{errors.referral.message}</p>}
							</div>
						</div>
					</div>
					<div className="mb-7 pb-7">
						<label
							htmlFor="country"
							className="block mb-2"
						>
							Country
						</label>
						<select
							id="country"
							{...register("country")}
							className="w-full border py-2 px-3 border-black "
						>
							<option value=""></option>
							<option value="usa">United States</option>
							<option value="canada">Canada</option>
							<option value="uk">United Kingdom</option>
							<option value="nigeria">Nigeria</option>
							{/* {omo and so on and so forth} */}
						</select>
						{errors.country && <p className="text-red-500">{errors.country.message}</p>}
					</div>
					<div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
						<div className="mb-7 pb-7 mr-2 flex-shrink-0 flex-grow">
							<label
								htmlFor="zipCode"
								className="block mb-2"
							>
								Zip Code
							</label>
							<input
								id="zipCode"
								type="number"
								{...register("zipCode")}
								className="w-full border py-2 px-3 border-black outline-none"
							/>
							{errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
						</div>
						<div className="mb-7 pb-6 flex-grow">
							<label
								htmlFor="state"
								className="block mb-2"
							>
								State
							</label>
							<input
								id="state"
								type="text"
								{...register("state")}
								className="w-full border  py-2 px-3 border-black outline-none"
							/>
							{errors.state && <p className="text-red-500">{errors.state.message}</p>}
						</div>
					</div>
					<div className="mb-7 pb-6">
						<label
							htmlFor="cityName"
							className="block mb-2"
						>
							City
						</label>
						<input
							id="cityName"
							type="text"
							{...register("cityName")}
							className="w-full border  py-2 px-3 border-black outline-none"
						/>
						{errors.cityName && <p className="text-red-500">{errors.cityName.message}</p>}
					</div>
					<div className="mb-7 pb-6">
						<label
							htmlFor="address"
							className="block mb-2"
						>
							Address
						</label>
						<input
							id="address"
							type="text"
							{...register("address")}
							className="w-full border  py-2 px-3 border-black outline-none"
						/>
						{errors.address && <p className="text-red-500">{errors.address.message}</p>}
					</div>
					<div className="mb-7 pb-7">
						<label
							htmlFor="phone"
							className="block mb-2"
						>
							Phone Number
						</label>
						<input
							id="phone"
							type="text"
							{...register("phone")}
							className="w-full border  py-2 px-3 border-black outline-none"
						/>
						{errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
					</div>
					<div className="mb-10">
						<label className="inline-flex items-center">
							<motion.input
								{...interactionAnimations}
								type="checkbox"
								checked={saveInfo}
								onChange={(e) => setSaveInfo(e.target.checked)}
								className="form-checkbox focus:ring-black-900 checked:bg-black-900 h-6 w-6 cursor-pointer"
							/>
							<span className="ml-2">Save this information for next time</span>
						</label>
					</div>
					<div className="flex justify-end">
						<button
							// type="submit"
							className="bg-black text-white px-9 sm:w-1/2 w-full text-sm py-2 text-center hover: cursor-pointer hover:scale-105 transform transition-transform"
						>
							{generateClientSecret.isLoading ? "Loading... " : "continue to shipping"}
						</button>
					</div>
				</form>
			)}

			{page === "shipping" && (
				<Shipping
					goToForm={() => setPage("form")}
					email={formData.email}
					address={formData.address}
					submitData={submitData}
					clientSecret={clientSecret}
					clientSecretLoading={generateClientSecret.isLoading}
					shippingAddressDetails="The items will be delivered digitally via email"
				/>
			)}
		</div>
	);
};

export default Form;
