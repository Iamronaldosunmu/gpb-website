import { PopupButton } from "react-calendly";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import TextContainer from "../components/textcontainer";
import BottomFooter from "../sections/Footer/BottomFooter";

const Consultation = () => {
	return (
		<PageContainer className="mt-[200px]">
			<Container className="text-center flex flex-col justify-center items-center mb-[253px]">
				<h1 className="text-[48px] font-semibold">Consultation</h1>
				<TextContainer className="mt-4">
					<p className="text-[#000000D1] text-[24px] font-medium">A session for clients who are not sure on themes, fabrics & colours</p>
				</TextContainer>
				<div className="flex items-center py-[6px] mt-8 px-5 border border-black rounded-[142px] gap-x-2 w-[223px]">
					<img
						className="w-[34px] h-[34px] object-cover"
						src="/assets/images/video.png"
						alt=""
					/>
					<span className="text-xl">Available online</span>
				</div>
				<div className="grid grid-cols-3 mt-9 border border-black text-2xl font-semibold w-[500px] h-[130px]">
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
				<PopupButton
					url="https://calendly.com/infogpb/gpb-consultation?hide_gdpr_banner=1"
					rootElement={document.getElementById("root") as HTMLElement}
					text="Schedule"
					className="py-[25px] mt-8 bg-[#BE3F00] w-[500px] text-white text-[28px] font-semibold"
				/>
			</Container>
			<Container className="border-y border-black pt-14 pb-[81px]">
				<h2 className="text-[32px] font-semibold">Service Description</h2>
				<p className="text-[22px] opacity-90 mt-7 xl:max-w-[850px]">This is a 1-on-1 session for clients who are not quite sure on what themes, colours or fabrics they want to explore for their collection, clients who don't quite know how to put a mood board together. We help guide and discover what they might like, assist with their mood board, offer advice based on trend forecast.</p>
			</Container>
			<Container className="mt-[110px] mb-[185px] text-[24px] flex flex-col gap-y-2 text-left">
				<h3>Contact Details</h3>
				<p>info@grapespatternbank.com</p>
				<p>The rock drive, Lekki phase 1, Lagos state, NGA</p>
			</Container>
			<BottomFooter />
		</PageContainer>
	);
};

export default Consultation;
