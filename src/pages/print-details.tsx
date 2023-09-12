import { Link } from "react-router-dom";
import Container from "../components/container";
import Form from "../components/shop-details/Form";
import Information from "../components/shop-details/Information";
import PreviewProduct from "../components/shop-details/PreviewProduct";
import Recommended from "../components/shop-details/Recommended";
import Footer from "../sections/Footer";
import Nav from "../components/nav";
import MiniNav from "../components/shop/MiniNav";

const PrintDetails = () => {
	// Fetch Data by id and put Product name into Mininav
	return (
		<main>
			<Nav />
			<Container className="mt-[200px]">
				<div className="text-[32px] font-bold bg-white pl-[73px]">Print Details</div>
				<Link
					to="/shop"
					className="flex gap-x-[10px] items-center mt-[116px]"
				>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/chevron-right.svg"
						alt=""
					/>
					<span className="text-[23px] text-[#3C3B3B] font-medium">Back to Shop</span>
				</Link>
			</Container>
			<Container className="flex mt-[124px] gap-x-[77px] items-start">
				<PreviewProduct prints={["purple-hallow.png", "purple-hallow.png", "purple-hallow.png", "purple-hallow.png"]} />
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
			<Recommended />
			<Footer />
		</main>
	);
};

export default PrintDetails;
