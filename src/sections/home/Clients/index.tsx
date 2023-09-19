import SectionGrid from "../../../components/sectiongrid";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Clients = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	return (
		<SectionGrid
			textSectionContent={["In the last five years we have worked with some amazing brands, creating mind blowing prints. The best part of what we do is getting to see the final product and witnessing how it influences various industries."]}
			textSectionBgColor="#E05E5E"
			textSectionCtaButtonText="Clients"
			textSectionHeader="#GPBCLIENTS"
			OtherSectionComponent={
				<div ref={container} className="w-full h-full overflow-hidden">
					<motion.img
						style={{ scale }}
						className="w-full h-full object-cover scale-[1.005]"
						src="/assets/images/about-us-img.jpg"
					/>
				</div>
			}
		/>
	);
};

export default Clients;
