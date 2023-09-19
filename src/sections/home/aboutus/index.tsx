import { useScroll, useTransform } from "framer-motion";
import SectionGrid from "../../../components/sectiongrid";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	return (
		<SectionGrid
			textSectionBgColor="#A12E2E"
			textSectionHeader="Learn Our Story"
			textSectionContent={["Grapes pattern bank is a design and media agency that offers surface  pattern and design printing services "]}
			textSectionCtaButtonText="READ MORE"
			OtherSectionComponent={
				<div
					ref={container}
					className="w-full h-full overflow-hidden max-h-[500px] lg:max-h-none"
				>
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
export default AboutUs;
