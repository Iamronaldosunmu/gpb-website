import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../store/cart";
import useWishListStore from "../../../store/wishList";
import { defaultEase, interactionAnimations } from "../../../utils/framer-default-animations";

interface Props {
	id: string;
	name: string;
	price: string;
	quantity: number;
	discountPrice?: string;
	image: string;
}

const WishItem: React.FC<Props> = ({ name, id, price, discountPrice, image }) => {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	const { addToCart } = useCartStore();
	const { removeFromWishList } = useWishListStore();
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			// onMouseLeave={() => setIsHovered(false)}
			className="relative z-0 w-full  lg:max-w-[300px] shrink-0 overflow-hidden border border-[#3C3B3B] rounded-sm"
		>
			<div
				onClick={() => navigate(`/shop/${id}`)}
				className="overflow-hidden scale-[1.01]"
			>
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
					className="flex justify-center gap-x-3 items-center mt-[18px] transition-all duration-500 ease-in-out"
				>
					{/* <div className="border-[0.5px] border-black flex text-[#232323] items-center h-8">
						<button
							onClick={() => incrementQuantity(id)}
							className="py-1 px-2 border-r border-black"
						>
							+
						</button>
						<div className="h-full font-lato font-semibold px-2 py-1 text-sm sm:text-base">{quantity}</div>
						<button
							onClick={() => decrementQuantity(id)}
							className="py-1 px-2  border-l border-black"
						>
							-
						</button>
					</div> */}
					<motion.button
						{...interactionAnimations}
						onClick={() => addToCart({ id, backgroundColor: "Satisfied", exclusivity: "NO" })}
						whileHover={{ scale: 1.05 }}
						className="outline-0 text-[10px] md:text-[16px] bg-black py-1 px-[10px] md:px-[27px] xl:px-[22px] text-white"
					>
						Add To Cart
					</motion.button>
				</div>
			</motion.div>
			<motion.img
				{...interactionAnimations}
				onClick={() => removeFromWishList(id)}
				className="absolute top-5 right-3 cursor-pointer w-8 h-8 object-cover"
				src="/assets/images/delete.svg"
				alt=""
			/>
		</div>
	);
};
export default WishItem;
