import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";

export const BrandLogoImage = ({ url }: { url: string }) => {
	return (
		<img
			className="h-[40px]"
			src={url}
		/>
	);
};

const FeaturedIn = () => {
	const imageUrls = ["/assets/logos/vogue.png", "/assets/logos/elle.png", "/assets/logos/bellanaija.png", "/assets/logos/hapersbazaar.png", "/assets/logos/businessday.png"];
	return (
		<section className="w-full bg-black pt-[77px] pb-[90px]">
			<Container className="overflow-hidden relative">
				<div className=" absolute left-0 bottom-0 h-[60px] w-[60px] z-10 bg-gradient-to-l from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"></div>
				<div className=" absolute right-0 bottom-0 h-[60px] w-[60px] z-10 bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"></div>
				<TextAnimation
					text="As featured In"
					className="flex overflow-hidden justify-center space-x-[10px] text-white text-[32px] md:text-[40px] font-bold text-center"
				/>
				<div
					data-aos="fade-up"
					className="min-w-[2251.94px] scale-90 md:scale-100"
				>
					<div className="w-full flex mt-[50px] px-[40px] space-x-[80px] items-center animate-scroll ">
						{imageUrls.map((url, index) => (
							<BrandLogoImage
								key={index}
								url={url}
							/>
						))}
						{imageUrls.map((url, index) => (
							<BrandLogoImage
								key={index}
								url={url}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FeaturedIn;
