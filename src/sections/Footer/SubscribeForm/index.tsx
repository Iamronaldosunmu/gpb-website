import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Container from "../../../components/container";
import axiosInstance from "../../../services/apiClient";

interface EmailNewsletterPayload {
	data: {
		email: string;
	};
}

const SubscribeForm = () => {
	const [finalMessage, setFinalMessage] = useState("");

	const newsletterValidationSchema = z.object({
		email: z.string().min(1, { message: "Please Enter A Valid Email Address" }).email({ message: "Please Enter A Valid Email Address" }),
	});

	type NewsletterValidationSchema = z.infer<typeof newsletterValidationSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewsletterValidationSchema>({
		resolver: zodResolver(newsletterValidationSchema),
	});

	const onSubscribe = (data: EmailNewsletterPayload["data"]) => {

		subscribeToNewsletterMutation.mutate(
			{ data: { email: data.email } },
			{
				onSuccess: () => {
					setFinalMessage("Thanks For Subscribibng!");
				},
				onError: (error) => {
					if ((error as any).response.status === 400) {
						setFinalMessage("You Are Already In The Loop!");
					}
				},
			}
		);
	};

	const subscribeToNewsletter = async (data: EmailNewsletterPayload) => {
		const res = await axiosInstance.post("/mailing-lists", data);
		return res.data;
	};

	const subscribeToNewsletterMutation = useMutation(subscribeToNewsletter);

	return (
		<Container className="py-[100px] md:py-[200px] flex flex-col items-center">
			<h2 className="text-[30px] md:text-[34px] xl:text-[40px] font-semibold">Subscribe Form</h2>
			<p className="text-[20px] lg:text-[22px] xl:text-[24px] font-semibold">Stay up to date</p>
			<AnimatePresence mode="wait">
				<>
					{!finalMessage && (
						<motion.form
							exit={{ opacity: 0 }}
							onSubmit={handleSubmit(onSubscribe)}
							className="w-full max-w-[1000px] mx-auto flex flex-col gap-[60px] mt-[64px]"
						>
							<div>
								<input
									{...register("email")}
									placeholder="Email"
									className="w-full py-[10px] lg:py-[20px] focus:outline-none placeholder:text-[16px] text-[26px] lg:placeholder:text-[22px] xl:placeholder:text-[24px] placeholder:opacity-[0.87] lg:text-[28px] xl:text-[32px] border-b border-black"
								/>
								<p className="text-[red]">{errors.email?.message}</p>
							</div>
							<button
								className="w-full text-center text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] py-[12px] lg:py-[15px] xl:py-[18px] bg-black text-white"
								type="submit"
							>
								{subscribeToNewsletterMutation.isLoading ? (
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { duration: 0.3 } }}
										exit={{ opacity: 0 }}
									>
										Keeping You Up To Date...
									</motion.span>
								) : (
									<motion.span
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 0.95, transition: { duration: 0.3 } }}
									>
										Submit
									</motion.span>
								)}
							</button>
						</motion.form>
					)}
					{finalMessage && (
						<motion.p
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
							className="text-[30px] mt-[64px] text-center font-semibold"
						>
							{finalMessage}
						</motion.p>
					)}
				</>
			</AnimatePresence>
		</Container>
	);
};

export default SubscribeForm;
