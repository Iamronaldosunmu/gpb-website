import SectionGrid from "../../../components/sectiongrid";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import useHomepageImagesStore from "../../../store/homepageImages";

const Clients = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const { homePageImages } = useHomepageImagesStore();
	return (
		<SectionGrid
			textSectionContent={["In the last five years we have worked with some amazing brands, creating mind blowing prints. The best part of what we do is getting to see the final product and witnessing how it influences various industries."]}
			textSectionBgColor="#AC94f4"
			textSectionCtaButtonText="Clients"
			buttonPath="/clients"
			textSectionHeader="#GPBCLIENTS"
			OtherSectionComponent={
				<div
					ref={container}
					className="w-full h-full overflow-hidden"
				>
					<motion.img
						style={{ scale }}
						className="w-full h-full object-cover scale-[1.005]"
						src={homePageImages?.gpbClientsSection?.url}
					/>
				</div>
			}
		/>
	);
};

export default Clients;
