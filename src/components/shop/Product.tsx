import { useState } from "react";
import { motion } from "framer-motion";
import { defaultEase, interactionAnimations } from "../../utils/framer-default-animations";
import Like from "../like";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cart";

interface ProductProps {
	price: string;
	discountPrice?: string;
	image: string;
	name: string;
	id: string;
}

const Product: React.FC<ProductProps> = ({ name, id, price, discountPrice, image }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const navigate = useNavigate();
	const { addToCart } = useCartStore();
	return (
		<div
			onClick={() => navigate(`/shop/${id}`)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative z-0 w-full  lg:max-w-[300px] shrink-0 overflow-hidden border border-[#3C3B3B] rounded-sm"
		>
			<div className="overflow-hidden scale-[1.01]">
				<motion.img
					animate={{
						scale: isHovered ? 1.1 : 1,
						transition: { duration: 0.4, ease: defaultEase },
					}}
					className="object-cover w-full aspect-[0.9] lg:aspect-[0.8] lg:h-full cursor-pointer"
					src={image || "/assets/patterns/blue-beauty.png"}
				/>
			</div>
			<motion.div
				initial={{ y: 0 }}
				animate={{
					y: isHovered ? 0 : 50,
					transition: { duration: 0.3, ease: defaultEase },
				}}
				className="px-[10px] md:px-5 h-[90px] flex flex-col justify-center text-center absolute bottom-0 w-full font-semibold text-base bg-white text-[10px] md:text-[16px]"
			>
				<div className="flex text-[10px] md:text-[16px] items-center justify-between flex-wrap">
					<p className="font-semibold text-[#232323]">{name}</p>
					<div className="flex">
						<p className="price">N{discountPrice ? parseInt(discountPrice)?.toLocaleString() : parseInt(price)?.toLocaleString()}</p>
						{discountPrice && <p className="hidden md:inline-block font-lato line-through text-[#5A3522] ml-2">N{parseInt(price)?.toLocaleString()}</p>}
						{/* <span className="font-lato">{`N${newPrice}`}</span>
						<span className="hidden md:inline-block font-lato line-through text-[#5A3522] ml-2">{`N${oldPrice}`}</span> */}
					</div>
				</div>
				<div
					onClick={(e) => e.stopPropagation()}
					className="flex justify-between items-center mt-[18px] transition-all duration-500 ease-in-out"
				>
					<motion.button
						{...interactionAnimations}
						onClick={() => addToCart({ id, backgroundColor: "SATISFIED", exclusivity: "NO" })}
						whileHover={{ scale: 1.05 }}
						className="outline-0 text-[10px] md:text-[16px] bg-black py-1 px-[10px] md:px-[27px] text-white"
					>
						Add To Cart
					</motion.button>
					<div
						onClick={() => setIsLiked(!isLiked)}
						className="px-[11px] outline-0 scale-80 md:scale-100"
					>
						<Like liked={isLiked} />
					</div>
				</div>
			</motion.div>
		</div>
	);
};
export default Product;
