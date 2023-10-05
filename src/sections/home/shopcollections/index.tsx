import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import PrintItem from "../../../components/printItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useProductStore from "../../../store/products";
import useSize from "../../../hooks/useSize";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ShopCollections = () => {
	const { products } = useProductStore();
	const [width] = useSize();
	const navigate = useNavigate();

	console.log(products);
	return (
		<section className="w-full py-[115px] lg:py-[140px] xl:py-[190px]">
			<Container>
				<motion.div
					onClick={() => navigate("/shop")}
					whileHover={{ scale: 1.02 }}
					className="cursor-pointer flex items-center justify-center  gap-[20px] group"
				>
					<TextAnimation
						text="Shop The Collection"
						className="text-[24px] lg:text-[40px] font-medium text-center text-[#A34A21]  flex gap-[10px] justify-center"
					/>
					<div
						data-aos="fade-up"
						data-aos-delay="1000"
					>
						<svg
							className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] group-hover:translate-x-[5px] group-hover:-translate-y-[5px] group-hover:scale-110 transition-all"
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="#A34A21"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 13.9881L13.5849 1.40318"
								stroke="#A34A21"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M5.1748 1L13.7855 1"
								stroke="#A34A21"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M14 9.39646L14 1.44808"
								stroke="#A34A21"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				</motion.div>

				<div className="mt-[46px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[30px]  gap-[12px] md:gap-[27px] grid">
					{products?.slice(0, width >= 768 && width < 1024 ? 3 : 4).map((product) => (
						<PrintItem
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							discountedPrice={product?.discountPrice}
							image={product.productImage[0].url}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default ShopCollections;
