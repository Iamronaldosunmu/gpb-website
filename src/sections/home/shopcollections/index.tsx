import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import PrintItem from "../../../components/printItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const SwiperNav = () => {
// 	const swiper = useSwiper();
// 	return (
// 		<>
// 			<img
// 				onClick={() => swiper.slidePrev()}
// 				src="/assets/images/left-arrow-icon.svg"
// 				className="absolute top-[50%] -translate-y-[50%] left-0"
// 			/>
// 			<img
// 				onClick={() => swiper.slideNext()}
// 				src="/assets/images/right-arrow-icon.svg"
// 				className="absolute top-[50%] -translate-y-[50%] right-0"
// 			/>
// 		</>
// 	);
// };

const ShopCollections = () => {
	
	return (
		<section className="w-full py-[115px] lg:py-[140px] xl:py-[190px]">
			<Container>
				<TextAnimation
					text="Shop The Collection"
					className="text-[24px] lg:text-[40px] font-medium text-center text-[#A34A21]  flex gap-[10px] justify-center"
				/>

				<div className="mt-[46px] hidden grid-cols-4 gap-[27px] lg:grid">
					<PrintItem />
					<PrintItem />
					<PrintItem />
					<PrintItem />
				</div>

				<div className="">
					{/* <SwiperNav /> */}
					{/* <Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						className="max-w-[calc(100%-100px)] mt-[46px] "
						slidesPerView={2}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{[1, 2, 3, 4].map((print) => (
							<SwiperSlide>
								<PrintItem />
							</SwiperSlide>
						))}
				
					</Swiper> */}
				</div>
			</Container>
		</section>
	);
};

export default ShopCollections;
