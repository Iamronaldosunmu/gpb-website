import Container from "../../../components/container";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { useNavigate } from "react-router-dom";
import ParallaxImage from "../../../components/ParallaxImage";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<section className="relative mt-[90px] lg:mt-[169px] md:flex ">
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
						className="bg-white p-[10px] px-[20px] md:px-[30px] text-[14px] md:text-[16px] flex items-center gap-[15px] rounded-full"
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
		</section>
	);
};

export default Hero;
