import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Like from "../components/like";
import Nav from "../components/nav";
import Form from "../components/shop-details/Form";
import Information from "../components/shop-details/Information";
import PreviewProduct from "../components/shop-details/PreviewProduct";
import Recommended from "../components/shop-details/Recommended";
import MiniNav from "../components/shop/MiniNav";
import Footer from "../sections/Footer";

const PrintDetails = () => {
	// Fetch Data by id and put Product name into Mininav
	const [liked, setLiked] = useState(false);


	return (
		<main>
			<Nav />
			<Container className="mt-[100px] lg:mt-[200px]">
				<div className="text-center md:text-left text-[24px] md:text-[32px] font-bold bg-white lg:pl-[73px]">Print Details</div>
				<Link
					to="/shop"
					className="flex gap-[7px] md:gap-x-[10px] items-center mt-[13px] lg:mt-[116px]"
				>
					<img
						className="md:w-6 md:h-6 w-[20px] h-[20px] object-cover"
						src="/assets/images/chevron-right.svg"
						alt=""
					/>
					<span className="text-[14px] lg:text-[23px] text-[#3C3B3B] font-medium">Back to Shop</span>
				</Link>
			</Container>
			<Container className="mt-[124px] gap-x-[77px] items-start hidden lg:flex">
				<PreviewProduct />
				<div className="w-full max-w-[502px]">
					<MiniNav paths={["Home", "Shop Print", "Shine"]} />
					<Form />
					<Information
						title="Details"
						body="Once you purchase this print you purchase all its available colour variations. Visualizations for one colour variation will be shared with you to help you choose your preferred scale. When you decide on a scale, your print is then Re-adjusted and sent to your mail. If it happens that you fall in love with more than one scaling option, we're happy to offer each scale variation to you for ₦5000/$15/£10."
					/>
					<Information
						title="Print information"
						body="We have over 150 fabrics we can digitally print on, from swimwear fabrics to cottons, polyester, silk, jersey, scuba, velvet silk, chiffon and even suede. Contact us if you are interested in transfering this amazing work of art on any fabric of your choice. Our MOQ is 10 yards per design. Please note that we only send out PDF, TIFF or JPEG formats."
					/>
				</div>
			</Container>
			{/* Styles for the mobile section */}
			<Container className="block lg:hidden">
				<div className="w-full max-w-full overflow-x-scroll pr-[20px] mt-[30px] pb-[20px]">
					<section className="pr-[20px] md:px-[40px] flex ">
						{["/assets/patterns/purple-hallow.png", "/assets/patterns/purple-hallow.png", "/assets/patterns/purple-hallow.png", "/assets/patterns/purple-hallow.png"].map((image) => (
							<img
								src={image}
								className="min-w-[160px] mr-[18px] h-[160px] w-[160px]"
							/>
						))}
						<div className="min-w-[2px]"></div>
					</section>
				</div>
				<div className="hidden lg:flex justify-between items-center">
					<p className="text-[24px] font-semibold uppercase">Shine</p>
					<p className="price inline-flex gap-[10px]">
						<span>N80,000</span>
						<span className="line-through">N90,000</span>
					</p>
				</div>
				<div className="flex flex-col gap-[24px]">
					<div className="text-xl w-full font-medium overflow-hidden">
						<label
							htmlFor="colour"
							className="block text-[#3C3B3B] font-semibold font-lato text-[14px]"
						>
							COLOUR : Satisfied
						</label>
						<div className="select">
							<select
								id="colour"
								className="mt-[10px] py-[9px] px-4 border border-[#181818] w-full text-[14px]"
							>
								{["options"].map((option) => (
									<option
										key={option}
										value={option}
									>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="text-xl w-full font-medium overflow-hidden">
						<label
							htmlFor="colour"
							className="block text-[#3C3B3B] font-semibold font-lato text-[14px]"
						>
							COLOUR : Satisfied
						</label>
						<div className="select">
							<select
								id="colour"
								className="mt-[10px] py-[9px] px-4 border border-[#181818] w-full text-[14px]"
							>
								{["options"].map((option) => (
									<option
										key={option}
										value={option}
									>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="flex mt-[24px] items-center gap-[21px]">
					<button
						onClick={() => {}}
						type="submit"
						className="w-full text-[16px] lg:text-2xl font-semibold outline-0 bg-black py-[10px] md:py-[18px] text-white"
					>
						Add To Cart
					</button>
					<span
						className="scale-[0.8]"
						onClick={() => setLiked(!liked)}
					>
						<Like liked={liked} />
					</span>
				</div>
				<div>
					<Information
						title="Details"
						body="Once you purchase this print you purchase all its available colour variations. Visualizations for one colour variation will be shared with you to help you choose your preferred scale. When you decide on a scale, your print is then Re-adjusted and sent to your mail. If it happens that you fall in love with more than one scaling option, we're happy to offer each scale variation to you for ₦5000/$15/£10."
					/>
					<Information
						title="Details"
						body="Once you purchase this print you purchase all its available colour variations. Visualizations for one colour variation will be shared with you to help you choose your preferred scale. When you decide on a scale, your print is then Re-adjusted and sent to your mail. If it happens that you fall in love with more than one scaling option, we're happy to offer each scale variation to you for ₦5000/$15/£10."
					/>
				</div>
			</Container>
			<Recommended />
			<Footer />
		</main>
	);
};

export default PrintDetails;
