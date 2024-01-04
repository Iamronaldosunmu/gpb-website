import { Link, useParams } from "react-router-dom";
import Container from "../components/container";
import Form from "../components/shop-details/Form";
import Information from "../components/shop-details/Information";
import PreviewProduct from "../components/shop-details/PreviewProduct";
import Recommended from "../components/shop-details/Recommended";
import MiniNav from "../components/shop/MiniNav";
import Footer from "../sections/Footer";
import useProductStore from "../store/products";

const PrintDetails = () => {
	// Fetch Data by id and put Product name into Mininav
	const { id } = useParams();
	const { products } = useProductStore();
	const product = products?.find((product) => product.id == id);

	return (
		<main>
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
					{product?.description && (
						<Information
							title="Description"
							body={product?.description}
						/>
					)}
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
						{product?.productImage?.map((image) => (
							<img
								src={image.url}
								className="min-w-[160px] mr-[18px] h-[160px] w-[160px]"
							/>
						))}
						<div className="min-w-[2px]"></div>
					</section>
				</div>
				<Form />
			</Container>
			<Recommended />
			<Footer />
		</main>
	);
};

export default PrintDetails;
