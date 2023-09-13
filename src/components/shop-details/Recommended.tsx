import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Container from "../container";
import Product from "../shop/Product";

const Recommended = () => {
	const [isEnd, setIsEnd] = useState(false);
	return (
		<Container className="mt-[293px]">
			<h2 className="text-[#181818] text-[40px] font-semibold mb-[41px]">YOU MAY ALSO LIKE</h2>
			<Swiper
				onReachBeginning={() => setIsEnd(false)}
				onReachEnd={() => setIsEnd(true)}
				allowTouchMove={false}
				spaceBetween={30}
				slidesPerView={4}
			>
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<SwiperSlide key={i}>
						<Product
							productName="SHINE"
							oldPrice={80000}
							newPrice={98000}
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
		<div className="absolute w-full bottom-[180px] z-10 flex justify-between">
			<div
				aria-disabled={enabled}
				onClick={() => swiper.slidePrev()}
				className={`bg-[#fdfdfd99] p-4 left-0 none-select ${enabled && "cursor-pointer"}`}
			>
				<img
					className="w-10 h-10 object-cover"
					src="/assets/images/chevron-right.svg"
					alt=""
				/>
			</div>
			<div
				aria-disabled={!enabled}
				onClick={() => swiper.slideNext()}
				className={`bg-[#fdfdfd99] p-4 right-0 rotate-180 none-select ${!enabled && "cursor-pointer"}`}
			>
				<img
					className="w-10 h-10 object-cover"
					src="/assets/images/chevron-right.svg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Recommended;
