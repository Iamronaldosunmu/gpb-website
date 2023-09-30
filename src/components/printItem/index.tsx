import { useState } from "react";
import { motion } from "framer-motion";
import { defaultEase } from "../../utils/framer-default-animations";
import Like from "../like";
import { useNavigate } from "react-router";

interface PrintItemProps {
	name: string;
	price: string;
	discountedPrice?: string;
	image: string;
	id: string;
}

const PrintItem: React.FC<PrintItemProps> = ({ name, price, discountedPrice, image, id }) => {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	return (
		<div
			data-aos="zoom-in"
			className="w-full"
		>
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="overflow-hidden w-full aspect-square"
			>
				<div className="overflow-hidden h-full">
					<motion.img
						animate={{
							scale: isHovered ? 1.1 : 1,
							transition: { duration: 0.4, ease: defaultEase },
						}}
						className="w-full object-cover aspect-square"
						src={image || "/assets/patterns/blue-beauty.png"}
					/>
				</div>
				<motion.div
					onClick={() => navigate(`/shop/${id}`)}
					initial={{ y: 0 }}
					animate={{
						y: isHovered ? -42 : 0,
						transition: { duration: 0.3, ease: defaultEase },
					}}
					whileHover={{ scale: 1.07 }}
					whileTap={{ scale: 1 }}
					className=" cursor-pointer w-full h-[42px] bg-[rgba(255,255,255,0.7)] flex items-center justify-center font-bold text-[20px]"
				>
					QUICK VIEW
				</motion.div>
			</div>
			<div className="mt-[8px] md:mt-[16px] flex justify-between items-center">
				<div className="text-[13px] md:text-[16px] font-semibold">
					<p>{name}</p>
					<div className="flex gap-[7px]">
						<p className="price">N{discountedPrice ? parseInt(discountedPrice)?.toLocaleString() : parseInt(price)?.toLocaleString()}</p>
						{discountedPrice && <p className="line-through price">N{parseInt(price)?.toLocaleString()}</p>}
					</div>
				</div>
				<div className="px-[11px] outline-0 scale-90 md:scale-100">
					<Like id={id} />
				</div>
			</div>
		</div>
	);
};
export default PrintItem;
