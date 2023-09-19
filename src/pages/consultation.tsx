import { useState } from "react";
import Container from "../components/container";
import Nav from "../components/nav";
import TextContainer from "../components/textcontainer";
import BottomFooter from "../sections/Footer/BottomFooter";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { motion } from "framer-motion";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Consultation = () => {
	const [page, setPage] = useState("hero");
	const [isOpen, setIsOpen] = useState(false);
	const [isAvailable, setIsAvailable] = useState(false);
	const [date, setDate] = useState<Value>(new Date());
	return (
		<div className="mt-[200px]">
			<Nav />
			{page === "hero" && (
				<>
					<Container className="text-center flex flex-col justify-center items-center my-[253px]">
						<h1 className="text-[64px] font-semibold">Consultation</h1>
						<TextContainer className="mt-4">
							<p className="text-[#000000D1] text-[32px] font-medium">A session for clients who are not sure on themes, fabrics & colours</p>
						</TextContainer>
						<div className="flex items-center py-[6px] mt-8 px-5 border border-black rounded-[142px] gap-x-2 w-[223px]">
							<img
								className="w-[34px] h-[34px] object-cover"
								src="/assets/images/video.png"
								alt=""
							/>
							<span className="text-xl">Available online</span>
						</div>
						<div className="grid grid-cols-3 mt-9 border border-black text-2xl font-semibold w-[500px] h-[162px]">
							<div className="flex justify-center items-center border-r border-black h-full">
								<span>45 minutes</span>
							</div>
							<div className="flex justify-center items-center border-r border-black h-full">
								<span>₦20,000</span>
							</div>
							<div className="flex justify-center items-center">
								<span>online</span>
							</div>
						</div>
						<button
							onClick={() => setPage("book")}
							className="py-[30px] mt-8 bg-[#BE3F00] w-[500px] text-white text-[32px] font-semibold"
						>
							Checkout
						</button>
					</Container>
					<Container className="border-y border-black pt-14 pb-[81px]">
						<h2 className="text-[40px] font-semibold">Service Description</h2>
						<p className="text-[32px] opacity-90 mt-7">This is a 1-on-1 session for clients who are not quite sure on what themes, colours or fabrics they want to explore for their collection, clients who don't quite know how to put a mood board together. We help guide and discover what they might like, assist with their mood board, offer advice based on trend forecast.</p>
					</Container>
					<Container className="mt-[110px] mb-[185px] text-[32px] flex flex-col gap-y-2 text-left">
						<h3>Contact Details</h3>
						<p>info@grapespatternbank.com</p>
						<p>The rock drive, Lekki phase 1,Lagos state., NGA</p>
					</Container>
				</>
			)}

			{page === "book" && (
				<>
					<Container className="text-center flex flex-col justify-center items-center my-[253px]">
						<h1 className="text-[64px] font-semibold">Consultation</h1>
						<p className="text-[#000000D1] mt-4 text-[32px] font-medium">Check out our availability and book the date and time that works for you</p>
					</Container>
					<Container className="mb-[373px] flex gap-x-[134px] justify-between">
						<div className="max-w-[801px] w-full">
							<div className="flex justify-between text-2xl border-b border-b-black pb-4">
								<p>Select a Date and Time</p>
								<p>West Africa Standard Time (WAT)</p>
							</div>
							<div className="mt-5 flex gap-x-[113px] justify-between">
								<Calendar
									onChange={(value) => {
										setIsAvailable(false);
										setDate(value);
									}}
								/>
								<div className="my-auto">
									<p className="text-[#3C3B3B] text-2xl">{date?.toString().slice(0, 15)}</p>
									{!isAvailable && <p className="text-[#3C3B3B] text-2xl mt-1">No availability</p>}
									{isAvailable ? (
										<div className="w-full flex mt-9 gap-10">
											{["10:45", "13:25"].map((time, index) => (
												<button
													key={index}
													className="text-center text-2xl font-medium py-[14px] px-[60px] border border-black focus:bg-[#F2D9D8DE]"
												>
													{time}
												</button>
											))}
										</div>
									) : (
										<button
											onClick={() => setIsAvailable((prev) => !prev)}
											className="py-6 mt-10 bg-[#A34A21] w-[416px] text-white text-2xl font-semibold"
										>
											Check for Availability
										</button>
									)}
								</div>
							</div>
						</div>
						<div className="w-[300px]">
							<div className="flex justify-between items-center">
								<span className="text-2xl">Service Details</span>
								<img
									className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300 cursor-pointer`}
									onClick={() => setIsOpen((prev) => !prev)}
									src="/assets/images/chevron-up.svg"
									alt=""
								/>
							</div>
							<div className="flex items-center py-[6px] mt-8 px-5 border border-black rounded-[142px] gap-x-2 w-[223px]">
								<img
									className="w-[34px] h-[34px] object-cover"
									src="/assets/images/video.png"
									alt=""
								/>
								<span className="text-xl">Available online</span>
							</div>
							<div>
								<p className="text-2xl uppercase mt-7">Consultation</p>
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: isOpen ? 160 : 0 }}
									className="mt-4 text-2xl text-[#3C3B3B] mb-8 overflow-hidden"
								>
									<p className="mb-7">Tuesday, 22 August at 10:45</p>
									<p>online</p>
									<p>Staff member #1</p>
									<p>45 minutes</p>
								</motion.div>
								<p className="text-[#3C3B3B] text-[22px] mt-1 pb-4 border-b border-b-black">₦20,000 | Part of a plan</p>
								<button className="mt-5 w-full py-6 bg-[#00000091] text-white text-2xl">Next</button>
							</div>
						</div>
					</Container>
				</>
			)}
			<BottomFooter />
		</div>
	);
};

export default Consultation;
