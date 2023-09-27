import { FC, useState } from "react";
import useCartStore from "../../store/cart";
import useProductStore from "../../store/products";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";

interface Props {}

const PreviewProduct: FC<Props> = () => {
	const { cart } = useCartStore();
	const { products } = useProductStore();
	const { id } = useParams();
	const product = products?.find((product) => product.id == id);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="flex gap-x-[33px]">
			<div className="flex flex-col justify-end items-center space-y-[31px]">
				{product?.productImage.map((image, index) => (
					<div className="relative">
						<motion.img
							{...interactionAnimations}
							key={index}
							className="w-[71px] h-[68px] object-cover cursor-pointer rounded-[4px]"
							src={image.url}
							alt=""
							onClick={() => setSelectedIndex(index)}
						/>
						{selectedIndex == index && (
							<motion.div
								layoutId="active-pill"
								className="absolute w-[81px] h-[78px] -top-[5px] -left-[5px]  bg-black  z-10 p-[5px] border-[2px] border-black bg-transparent rounded-[4px]"
							></motion.div>
						)}
					</div>
				))}
			</div>
			<div className="w-[489px] h-[622px] relative">
				{product?.productImage.map((path, index) => (
					<>
						<motion.img
							animate={{ opacity: selectedIndex == index ? 1 : 0, transition: { duration: 0.3 } }}
							className="w-full h-full object-cover absolute"
							src={product?.productImage[index].url}
							alt=""
						/>
					</>
				))}
			</div>
		</div>
	);
};

export default PreviewProduct;
