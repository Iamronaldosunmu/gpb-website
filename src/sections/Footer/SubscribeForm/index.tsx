import { FormEvent } from "react";
import Container from "../../../components/container";

const SubscribeForm = () => {
	const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Container className="py-[100px] md:py-[200px] flex flex-col items-center">
			<h2 className="text-[30px] md:text-[34px] xl:text-[40px] font-semibold">Subscribe Form</h2>
			<p className="text-[20px] lg:text-[22px] xl:text-[24px] font-semibold">Stay up to date</p>

			<form
				onSubmit={onSubscribe}
				className="w-full max-w-[1000px] mx-auto flex flex-col gap-[60px] mt-[64px]"
			>
				<input
					placeholder="Email"
					className="w-full py-[10px] lg:py-[20px] focus:outline-none placeholder:text-[16px] text-[26px] lg:placeholder:text-[22px] xl:placeholder:text-[24px] placeholder:opacity-[0.87] lg:text-[28px] xl:text-[32px] border-b border-black"
				/>
				<button
					className="w-full text-center text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] py-[12px] lg:py-[15px] xl:py-[18px] bg-black text-white"
					type="submit"
				>
					Submit
				</button>
			</form>
		</Container>
	);
};

export default SubscribeForm;
