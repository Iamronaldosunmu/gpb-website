import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../components/container";
import WishItem from "../components/wish-list/WishItem";
import Footer from "../sections/Footer";
import useProductStore from "../store/products";
import useWishListStore from "../store/wishList";
import { child, container, interactionAnimations } from "../utils/framer-default-animations";

const WishList = () => {
	const { wishList, saveWishList } = useWishListStore();
	const { products } = useProductStore();
	const [page, setPage] = useState(1);

	useEffect(() => {
		saveWishList();
	}, [wishList]);

	return (
		<>
			<Container className="mt-[100px] lg:mt-[200px]">
				{/* <h1 className="text-[32px] font-bold bg-white lg:pl-[73px] text-center lg:text-left">Shop Prints</h1> */}
				<div className="mt-[100px]">
					<div className="border-black border-b pb-[30px] text-center">
						<h2 className="text-[32px] font-semibold">My WishList</h2>
						<p className="text-2xl mt-5">View favorite products you’ve saved to your wishlist.</p>
					</div>
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 md:gap-x-[50px] lg:gap-x-[30px] gap-y-[40px] md:gap-y-[80px] lg:gap-y-[116px] mt-[51px] mb-[110px] grid-size"
					>
						{wishList.slice(0, page * 8).map((item, index) => (
							<motion.div variants={child}>
								<WishItem
									key={index}
									id={item.id}
									name={products?.find((product) => product.id === item.id)?.name || ""}
									price={products?.find((product) => product.id === item.id)?.price || "0"}
									discountPrice={products?.find((product) => product.id === item.id)?.discountPrice || "0"}
									image={products?.find((product) => product.id === item.id)?.productImage ? products?.find((product) => product.id === item.id)?.productImage[0].url as string : ""}
									quantity={item.quantity}
								/>
							</motion.div>
						))}
					</motion.div>
					{wishList.length == 0 && (
						<div className="w-full h-[100px] flex items-center justify-center text-2xl md:text-3xl lg:text-4xl">
							<p>No Items in your Wishlist</p>
						</div>
					)}
					{wishList?.length > page * 8 && (
						<motion.div
							onClick={() => setPage(page + 1)}
							{...interactionAnimations}
							className="flex w-full justify-center"
						>
							<button className="text-[#5A3522] w-[210px] border-2 border-[#5A3522] py-4 px-[49px] text-xl font-medium">Load More</button>
						</motion.div>
					)}
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default WishList;
