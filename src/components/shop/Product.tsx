import { useState } from "react";
import { motion } from "framer-motion";
import { defaultEase } from "../../utils/framer-default-animations";
import Like from "../like";
import { useNavigate } from "react-router-dom";

interface ProductProps {
	productName: string;
	oldPrice: number;
	newPrice: number;
	// productImage?: string;
}

const Product: React.FC<ProductProps> = ({ productName, oldPrice, newPrice }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/shop/${productName}`)}
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
					className="object-cover w-full aspect-[0.9] lg:aspect-auto lg:h-full"
					src="/assets/patterns/blue-beauty.png"
				/>
			</div>
			<motion.div
				initial={{ y: 0 }}
				animate={{
					y: isHovered ? 0 : 50,
					transition: { duration: 0.3, ease: defaultEase },
				}}
				className="px-5 h-[90px] flex flex-col justify-center text-center absolute bottom-0 w-full font-semibold text-base bg-white"
			>
				<div className="flex items-center justify-between">
					<p className="font-semibold text-[#232323]">{productName}</p>
					<div>
						<span className="font-lato">{`N${newPrice}`}</span>
						<span className="font-lato line-through text-[#5A3522] ml-2">{`N${oldPrice}`}</span>
					</div>
				</div>
				<div className="flex justify-between items-center mt-[18px] transition-all duration-500 ease-in-out">
					<button className="outline-0 bg-black py-1 px-[27px] text-white">Add To Cart</button>
					<div
						onClick={() => setIsLiked(!isLiked)}
						className="px-[11px] outline-0"
					>
						<Like liked={isLiked} />
					</div>
				</div>
			</motion.div>
		</div>
	);
};
export default Product;
