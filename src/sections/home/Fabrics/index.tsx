import SectionGrid from "../../../components/sectiongrid";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Fabrics = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	return (
		<SectionGrid
			textSectionHeader="#GPBFABRICS"
			textSectionBgColor="#A12E2E"
			textSectionContent={[
				`We have over 150 different fabrics that we are able to print on digitally
      Ranging from silks to cottons, swimwear fabrics, polyesters, viscose , suede etc.`,
				`All our fabrics are pre and post treated to offer excellent wash fastness and Durability with digital printing.`,
			]}
			textSectionCtaButtonText="Clients"
			OtherSectionComponent={
				<div
					ref={container}
					className="w-full h-full overflow-hidden max-h-[500px] lg:max-h-none"
				>
					<motion.img
						style={{ scale }}
						className="w-full h-full object-cover scale-[1.005]"
						src="/assets/images/fabrics.png"
					/>
				</div>
			}
			reversed
		/>
	);
};

export default Fabrics;
