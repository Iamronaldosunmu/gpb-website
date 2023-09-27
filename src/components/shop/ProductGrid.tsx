import { useState } from "react";
import useProductStore from "../../store/products";
import Container from "../container";
import Product from "./Product";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";

const ProductGrid = () => {
	const { products } = useProductStore();
	const [page, setPage] = useState(1);
	return (
		<Container className="mt-[61px] mb-[59px]">
			<div className="flex self-end w-full justify-between items-center">
				<div className="font-medium text-[12px] md:text-[18px] md:text-[23px] space-x-2 relative inline-flex items-center">
					<span className="relative bottom-[3px] ">{products?.length}</span>
					<span className="">Products</span>
				</div>
				<div className="flex items-center justify-center py-2 md:py-4 px-3 border border-[#181818] gap-x-1">
					<span className="text-[12px] md:text-[18px] md:text-xl font-medium">Sort by: featured </span>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/chevron-down.svg"
						alt=""
					/>
				</div>
			</div>
			<section className="grid grid-cols-2 gap-x-[12px] lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 md:gap-x-[50px] lg:gap-x-[30px] gap-y-[20px] md:gap-y-[80px] lg:gap-y-[116px] mt-[51px] mb-[110px] grid-size">
				{products?.slice(0, page * 8).map((product, index) => (
					<Product
						key={index}
						id={product.id}
						name={product.name}
						price={product.price}
						discountPrice={product?.discountPrice}
						image={product.productImage[0].url}
					/>
				))}
			</section>
			{products?.length > page * 8 && (
				<motion.div
					onClick={() => setPage(page + 1)}
					{...interactionAnimations}
					className="flex w-full justify-center"
				>
					<button className="text-[#5A3522] w-[210px] border-2 border-[#5A3522] py-4 px-[49px] text-xl font-medium">Load More</button>
				</motion.div>
			)}
		</Container>
	);
};

export default ProductGrid;
