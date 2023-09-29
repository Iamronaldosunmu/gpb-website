import { motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
	title: string;
	body: React.ReactNode[];
}

const MobileDeliveryDetails: FC<Props> = ({ title, body }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<motion.div
			animate={{ height: isActive ? "100%" : "30px" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			onClick={() => setIsActive((prev) => !prev)}
			className="w-full mt-[51px] cursor-pointer overflow-hidden border-b border-black"
		>
			<div className="flex justify-between items-center">
				<p className="text-[#FB7A7A] font-medium text-xl">{title}</p>
				<img
					className="w-[14px] h-[14px] object-cover origin-center transition-transform duration-300 hover:rotate-90"
					src="/assets/images/plus.svg"
					alt=""
				/>
			</div>
			<div className={`text-[#181818] font-medium py-7`}>{body}</div>
		</motion.div>
	);
};

export default MobileDeliveryDetails;
