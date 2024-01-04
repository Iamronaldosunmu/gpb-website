import { useEffect, useState } from "react";
import useProductStore from "../../store/products";
import Container from "../container";
import Product from "./Product";
import { motion } from "framer-motion";
import { child, container, interactionAnimations } from "../../utils/framer-default-animations";

const ProductGrid = () => {
	const { products } = useProductStore();
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const [hasSearchResults, setHasSearchResults] = useState(products?.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))?.slice(0, page * 8).length > 0);
	useEffect(() => {
		setHasSearchResults(products?.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))?.slice(0, page * 8).length > 0);
	}, [products, searchValue]);
	return (
		<Container className="mt-[61px] mb-[59px]">
			<div className="flex self-end w-full justify-between items-center">
				<div className="font-medium text-[12px] md:text-[18px] md:text-[23px] space-x-2 relative inline-flex">
					<span className="relative bottom-[3px] ">{products?.length}</span>
					<span className="">Prints</span>
				</div>
				<div className="flex items-center  py-[6px] md:py-4 px-3 border border-[#181818] gap-x-1 w-[50%]">
					<img
						className="w-[20px] h-[20px] object-cover"
						src="/assets/images/search.svg"
						alt=""
					/>
					<input
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search Print By Name..."
						className="focus:outline-none w-full bg-transparent border-0"
					/>
				</div>
			</div>
			<motion.section
				variants={container}
				initial="hidden"
				animate="show"
				className="grid grid-cols-2 gap-[12px] lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 md:gap-x-[50px] lg:gap-x-[30px] gap-y-[20px] md:gap-y-[80px] lg:gap-y-[116px] mt-[51px] mb-[110px] grid-size"
			>
				{products
					?.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
					?.slice(0, page * 8)
					.map((product, index) => (
						<>
							<motion.div variants={child}>
								<Product
									key={index}
									id={product.id}
									name={product.name}
									price={product.price}
									discountPrice={product?.discountPrice}
									image={product.productImage ? product.productImage[0].url : ""}
								/>
							</motion.div>
						</>
					))}
			</motion.section>
			{!hasSearchResults && products?.length > 0 && (
				<motion.div
					{...interactionAnimations}
					className="flex w-full justify-center"
				>
					<p className="text-[#5A3522] w-[300px] py-4 px-[49px] text-xl font-medium">No Results Found</p>
				</motion.div>
			)}
			{products?.filter((product) => product?.name.toLowerCase().includes(searchValue.toLowerCase())).length > page * 8 && (
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
