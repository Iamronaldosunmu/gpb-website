import { useState } from "react";
import Container from "../components/container";
import Nav from "../components/nav";
import BottomFooter from "../sections/Footer/BottomFooter";
import PageContainer from "../components/PageContainer";

const Membership = () => {
	const [subscriptions] = useState([
		{
			title: "Gold Membership",
			amount: "7,500",
			benefits: ["Print & Textile Forecast", "5% Off Ready Made Print"],
		},
		{
			title: "Gold Membership",
			amount: "15,000",
			benefits: ["Print & Textile Forecast", "5% Off Ready Made Print", "First Look At Ready Made Prints"],
		},
	]);
	return (
		<PageContainer className="mt-[200px]">
			<Container className="text-center pb-[266px]">
				<div>
					<h1 className="text-[40px] font-semibold">MEMBERSHIP</h1>
					<span className="mt-4 text-2xl">Choose Your Membership Package</span>
				</div>
				<div className="mt-[222px] flex gap-x-[118px]">
					{subscriptions.map((plan) => (
						<div className="w-[529px] text-center pt-7 rounded-2xl bg-white bg-opacity-60 shadow-[0px_0px_21px_3px_#00000026]">
							<span className="text-[30px] font-semibold">{plan.title}</span>
							<div className="flex justify-center gap-x-[18px] font-bold mt-[50px]">
								<span className="text-[40px] mt-5 font-lato">₦</span>
								<span className="text-[75px] font-lato">{plan.amount}</span>
							</div>
							<p className="font-lato font-light text-base">Every Month</p>
							<button className="w-[174px] mt-12 py-3 text-[22px] text-white font-semibold bg-[#A34A21] rounded-md shadow-[0px_4px_48px_3px_#00000030]">Select</button>
							<div className="flex flex-col justify-center items-start gap-y-4 w-fit mx-auto mt-[50px] pb-[107px]">
								{plan.benefits.map((text) => (
									<div className="flex items-center gap-x-5">
										<img
											src="/assets/images/check.svg"
											alt=""
										/>
										<span className="text-[22px] font-medium">{text}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</Container>
			<Container className="mb-[251px]">
				<div className="flex justify-between items-center border-b border-black pb-7">
					<p className="text-[#FB7A7A] font-medium text-[32px]">Details</p>
					<img
						className="w-[34px] h-[34px] object-cover origin-center"
						src="/assets/images/plus.svg"
						alt=""
					/>
				</div>
				<div className="text-[#181818] text-2xl font-medium pt-[42px] pb-[54px] border-black border-b font-lato overflow-hidden">when you enroll in our subscription service, we’ll ensure your products arrive on your schedule. Simply choose your desired products and replenishment frequency, and adjust at any time.</div>
			</Container>
			<BottomFooter />
		</PageContainer>
	);
};

export default Membership;
