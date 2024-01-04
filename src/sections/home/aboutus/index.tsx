import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionGrid from "../../../components/sectiongrid";
import useHomepageImagesStore from "../../../store/homepageImages";

const AboutUs = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	const { homePageImages } = useHomepageImagesStore();

	return (
		<SectionGrid
			textSectionBgColor="#A12E2E"
			textSectionHeader="Learn Our Story"
			textSectionContent={["Grapes pattern bank is a design and media agency that offers surface  pattern and design printing services "]}
			textSectionCtaButtonText="READ MORE"
			buttonPath="/about-us"
			OtherSectionComponent={
				<div
					ref={container}
					className="w-full h-full overflow-hidden max-h-[500px] lg:max-h-none"
				>
					<motion.img
						style={{ scale }}
						className="w-full h-full object-cover scale-[1.005]"
						src={homePageImages?.learnOurStorySection?.url}
					/>
				</div>
			}
		/>
	);
};
export default AboutUs;
