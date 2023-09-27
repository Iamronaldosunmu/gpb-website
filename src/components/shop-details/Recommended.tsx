import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Container from "../container";
import Product from "../shop/Product";
import useSize from "../../hooks/useSize";
import useProductStore from "../../store/products";
import useCartStore from "../../store/cart";

const Recommended = () => {
	const [isEnd, setIsEnd] = useState(false);
	const [width] = useSize()
	const { products } = useProductStore();
	const { cart } = useCartStore();
	const getRecommendedItems = () => {
		const itemsInCart : string[] = []
		for (let cartItem of cart) {
			itemsInCart.push(cartItem.id)
		}
		const recommendedItems = products?.filter(product => !itemsInCart.includes(product.id))
		return recommendedItems;
	}

	return (
		<Container className="mt-[50px] md:mt-[150px] lg:mt-[293px]">
			<h2 className="text-[#181818] mt-[24px] md:text-[40px] font-semibold mb-[20px] md:mb-[41px]">YOU MAY ALSO LIKE</h2>
			<Swiper
				onReachBeginning={() => setIsEnd(false)}
				onReachEnd={() => setIsEnd(true)}
				allowTouchMove={false}
				spaceBetween={width > 767 ? (width > 1024 ? 30 : 20) : 15}
				slidesPerView={width > 500 ? (width > 1024 ? 4 : 3) : 2}
			>
				{getRecommendedItems()?.slice(0,6).map((item ,i) => (
					<SwiperSlide key={i}>
						<Product
							name={item.name}
							discountPrice={item.discountPrice}
							image={item.productImage[0].url}
							id={item.id}
							price={item.price}
						/>
					</SwiperSlide>
				))}
				<SwiperNav enabled={isEnd} />
			</Swiper>
		</Container>
	);
};

const SwiperNav = ({ enabled }: { enabled: boolean }) => {
	const swiper = useSwiper();
	return (
		<div className="absolute w-full bottom-[50%] translate-y-[50%] z-10 flex justify-between">
			<div
				aria-disabled={enabled}
				onClick={() => swiper.slidePrev()}
				className={`bg-[#fdfdfd99] p-[4px] md:p-[10px] lg:p-4 left-0 none-select ${enabled && "cursor-pointer"}`}
			>
				<img
					className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-10 lg:h-10 object-cover"
					src="/assets/images/chevron-right.svg"
					alt=""
				/>
			</div>
			<div
				aria-disabled={!enabled}
				onClick={() => swiper.slideNext()}
				className={`bg-[#fdfdfd99] p-[4px] md:p-[10px] lg:p-4 right-0 rotate-180 none-select ${!enabled && "cursor-pointer"}`}
			>
				<img
					className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-10 lg:h-10 object-cover"
					src="/assets/images/chevron-right.svg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Recommended;
