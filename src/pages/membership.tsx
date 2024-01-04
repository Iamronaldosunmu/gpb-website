import { useState } from "react";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import BottomFooter from "../sections/Footer/BottomFooter";
import Information from "../components/shop-details/Information";

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
			<Container className="text-center mb-[150px] lg:mb-[200px] xl:mb-[266px]">
				<div>
					<h1 className="text-4xl md:text-[40px] font-semibold">MEMBERSHIP</h1>
					<p className="mt-4 text-xl md:text-2xl">Choose Your Membership Package</p>
				</div>
				<div className="mt-20 md:mt-[150px] xl:mt-[222px] flex flex-col md:flex-row gap-y-20 gap-x-10 lg:space-x-[100px] mx-5 sm:mx-20 md:mx-0">
					{subscriptions.map((plan) => (
						<div className="w-full px-3 sm:px-12 flex flex-col items-center pt-7 rounded-2xl bg-white bg-opacity-60 shadow-[0px_0px_21px_3px_#00000026] justify-self-center">
							<span className="text-xl sm:text-[30px] font-semibold">{plan.title}</span>
							<div className="flex justify-center gap-x-3 md:space-x-[18px] font-bold mt-3 md:mt-10 lg:mt-[50px]">
								<span className="text-[28px] lg:text-[40px] mt-5 font-lato">₦</span>
								<span className="text-[48px] lg:text-[75px] font-lato">{plan.amount}</span>
							</div>
							<p className="font-lato font-medium text-base">Every Month</p>
							<button className="w-[174px] mt-8 sm:mt-12 py-3 text-lg sm:text-[22px] text-white font-semibold bg-[#A34A21] rounded-md shadow-[0px_4px_48px_3px_#00000030]">Select</button>
							<div className="w-full flex flex-col justify-center items-center md:items-start gap-y-4 mt-[50px] pb-10 lg:pb-20 xl:pb-[107px]">
								{plan.benefits.map((text) => (
									<div className="flex items-center gap-x-3 xl:gap-x-5">
										<img
											className="w-5 h-4 lg:w-6 lg:h-5"
											src="/assets/images/check.svg"
											alt=""
										/>
										<span className="text-lg md:text-2xl xl:text-[22px] font-medium w-fit">{text}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</Container>
			<Container className="mb-[200px] lg:mb-[251px]">
				<Information
					title="Details"
					body={"when you enroll in our subscription service, we’ll ensure your products arrive on your schedule. Simply choose your desired products and replenishment frequency, and adjust at any time."}
				/>
			</Container>
			<BottomFooter />
		</PageContainer>
	);
};

export default Membership;
