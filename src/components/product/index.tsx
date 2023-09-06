import { useState } from "react";
import { motion } from "framer-motion";
import { defaultEase } from "../../utils/framer-default-animations";
import Like from "../like";

interface ProductProps {
	oldPrice?: string;
	newPrice?: string;
	productName?: string;
	// productImage?: string;
}

const Product: React.FC<ProductProps> = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="w-[282px] h-[283px] overflow-hidden relative border border-[#3C3B3B] rounded-sm cursor-pointer"
		>
			<div className="overflow-hidden scale-[1.01]">
				<motion.img
					animate={{
						scale: isHovered ? 1.1 : 1,
						transition: { duration: 0.4, ease: defaultEase },
					}}
					className="object-cover w-full h-full"
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
					<p>SHINE</p>
					<div>
						<span className="font-lato">N80,000</span>
						<span className="font-lato line-through text-[#5A3522] ml-2">N98,000</span>
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
