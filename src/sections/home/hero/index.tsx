import Container from "../../../components/container";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { useNavigate } from "react-router-dom";
// import ParallaxImage from "../../../components/ParallaxImage";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useHomepageImagesStore from "../../../store/homepageImages";

const Hero = () => {
	const navigate = useNavigate();
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	const { homePageImages } = useHomepageImagesStore();
	// setHomePageImages(homepageImagesData);
	// saveHomepageImages();
	console.log(homePageImages);
	return (
		<>
			{/* <section className="relative mt-[90px] lg:mt-[169px] md:flex ">
				<ParallaxImage
					containerClassName="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] h-[600px] object-cover "
					src="/assets/images/banner.webp"
				/>
				<ParallaxImage
					containerClassName="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] h-[600px] object-cover hidden md:block"
					src="/assets/images/banner.webp"
				/>
				<ParallaxImage
					containerClassName="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] h-[600px] object-cover0 hidden lg:block"
					src="/assets/images/banner.webp"
				/>

				<div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[60.21%] to-[rgba(0,0,0,0.78)] z-10"></div>
				<div className="absolute bottom-[28px] z-10 left-0 right-0">
					<Container className="z-10">
						<motion.button
							{...interactionAnimations}
							whileTap={{ scale: 0.98 }}
							className="bg-white p-[10px] px-[20px] md:px-[30px] text-[14px] md:text-[16px] flex items-center space-x-[15px] rounded-full"
						>
							<span
								onClick={() => navigate("/shop")}
								className="font-semibold"
							>
								SHOP NOW
							</span>
							<img
								className="w-[14px] md:w-[16px]"
								src="/assets/images/arrow.svg"
							/>
						</motion.button>
					</Container>
				</div>
			</section> */}
			<div
				className="embla overflow-hidden max-w-[1260px] lg:pb-20 md:pb-10 pb-10 md:max-w-[1220px] mx-auto w-full rounded-[15px] relative mt-[90px] lg:mt-[169px]"
				ref={emblaRef}
			>
				<div className="embla__container  rounded-[8px] hidden lg:flex h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
					{homePageImages?.banner?.desktop.map((image) => (
						<div className="embla__slide flex-[0_0_100%] px-[10px] rounded-[10px] overflow-hidden relative">
							<img
								src={image.url}
								className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover hidden lg:block rounded-[10px]"
							/>
							<div className="absolute top-0 left-[10px] right-[10px] bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[60.21%] to-[rgba(0,0,0,0.78)] z-10 rounded-[15px]"></div>
							<div className="absolute bottom-[28px] z-10 left-[10px] right-[10px]">
								<Container className="z-10">
									<motion.button
										{...interactionAnimations}
										whileTap={{ scale: 0.98 }}
										className="bg-white p-[10px] px-[20px] md:px-[30px] text-[14px] md:text-[16px] flex items-center space-x-[15px] rounded-full"
									>
										<span
											onClick={() => navigate("/shop")}
											className="font-semibold"
										>
											SHOP NOW
										</span>
										<img
											className="w-[14px] md:w-[16px]"
											src="/assets/images/arrow.svg"
										/>
									</motion.button>
								</Container>
							</div>
						</div>
					))}
				</div>
				<div className="embla__container flex rounded-[8px] h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] lg:hidden">
					{homePageImages?.banner?.mobile.map((image) => (
						<div className="embla__slide flex-[0_0_100%] px-[10px] rounded-[10px] overflow-hidden relative">
							<img
								src={image.url}
								className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover lg:hidden rounded-[10px]"
							/>
							<div className="absolute top-0 left-[10px] right-[10px] bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[60.21%] to-[rgba(0,0,0,0.78)] z-10 rounded-[15px]"></div>
							<div className="absolute bottom-[28px] z-10 left-[10px] right-[10px]">
								<Container className="z-10">
									<motion.button
										{...interactionAnimations}
										whileTap={{ scale: 0.98 }}
										className="bg-white p-[10px] px-[20px] md:px-[30px] text-[14px] md:text-[16px] flex items-center space-x-[15px] rounded-full"
									>
										<span
											onClick={() => navigate("/shop")}
											className="font-semibold"
										>
											SHOP NOW
										</span>
										<img
											className="w-[14px] md:w-[16px]"
											src="/assets/images/arrow.svg"
										/>
									</motion.button>
								</Container>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Hero;
