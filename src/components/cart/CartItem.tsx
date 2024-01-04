import { ChangeEvent, FC } from "react";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";
import { Product } from "../../store/products";
import { useNavigate } from "react-router-dom";

interface Props {
	id: string;
	productName: string;
	backgroundColor: string;
	exclusivity: string;
	checked: boolean;
	removeItem: () => void;
	selectItem: (e: ChangeEvent<HTMLInputElement>) => void;
	image: string;
	product: Product;
	getProductPriceInCart: (product: Product) => number;
}

const CartItem: FC<Props> = ({ id, productName, backgroundColor, exclusivity, checked, removeItem, selectItem, image, product, getProductPriceInCart }) => {
	console.log(getProductPriceInCart(product));
	const navigate = useNavigate();
	return (
		<div
			key={id}
			className="relative flex gap-x-[9px] md:gap-x-[30px] w-full h-[150px] md:h-[190px] items-center border border-[#181818] rounded-lg px-[15px] md:px-7 py-8"
		>
			<motion.input
				{...interactionAnimations}
				onChange={selectItem}
				checked={checked}
				className="w-[17px] h-[17px] md:w-[30px] md:h-[30px] cursor-pointer"
				type="checkbox"
			/>
			<div className="w-[70px] h-[70px]  md:w-[120px] md:h-[125px] overflow-hidden rounded">
				<img
					className="w-full h-full object-cover"
					src={image}
					alt=""
				/>
			</div>
			<div className="flex flex-col gap-y-[2px] md:gap-y-[10px] text-[12px] md:text-[16px]">
				<h3
					onClick={() => navigate(`/shop/${id}`)}
					className="text-[16px] lg:text-[26px] xl:text-[32px] font-semibold hover:cursor-pointer hover:underline"
				>
					{productName}
				</h3>
				<p>COLOUR : {backgroundColor}</p>
				<p>EXCLUSIVITY: {exclusivity}</p>
				<div className="flex">
					<p className="font-lato font-semibold price">{`₦${getProductPriceInCart(product)?.toLocaleString()}`}</p>
					{/* {oldPrice && <p className="font-lato font-semibold line-through text-[#5A3522] ml-2 price">{`₦${Number(oldPrice).toLocaleString()}`}</p>} */}
				</div>
			</div>
			<button
				onClick={removeItem}
				className="absolute text-[12px] md:text-[16px] self-start right-0 underline underline-offset-8 font-semibold mr-10"
			>
				remove
			</button>
		</div>
	);
};

export default CartItem;
