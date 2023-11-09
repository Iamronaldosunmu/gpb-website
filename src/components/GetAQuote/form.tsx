import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	subject: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	const onSubmit = () => {
		reset();
	};

	return (
		<div className="p-5 pt-10 w-full ">
			<form
				className="flex flex-col"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					type="text"
					{...register("name")}
					placeholder="Name"
					name="name"
					className="border-b mb-8 outline-none border-b-[gray] pb-3"
				/>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}
				<input
					type="text"
					{...register("email")}
					placeholder="Email"
					name="email"
					className="border-b mb-8 outline-transparent border-b-[gray] pb-3"
				/>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}
				<input
					type="text"
					placeholder="Subject"
					{...register("subject")}
					name="subject"
					className="border-b mb-8 outline-transparent border-b-[gray] pb-3"
				/>
				{errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
				<textarea
					name="message"
					placeholder="Type your message here"
					className="mt-5  pb-[140px] border-b outline-transparent border-b-[gray]"
				></textarea>
				<div className="flex justify-center mt-10">
					<button className="px-16 py-3 text-2xl text-white bg-black">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
