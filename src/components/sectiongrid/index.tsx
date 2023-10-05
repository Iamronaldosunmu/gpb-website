import { useNavigate } from "react-router-dom";
import useSize from "../../hooks/useSize";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";

interface SectionGridProps {
	textSectionBgColor: string;
	textSectionHeader: string;
	textSectionContent: string[];
	textSectionCtaButtonText: string;
	reversed?: boolean;
	OtherSectionComponent: JSX.Element;
	buttonPath: string;
}

const SectionGrid: React.FC<SectionGridProps> = ({ textSectionHeader, textSectionBgColor, textSectionContent, textSectionCtaButtonText, reversed, OtherSectionComponent, buttonPath }) => {
	const [width] = useSize();
	const navigate = useNavigate();
	return (
		<section className="w-full lg:grid grid-cols-1 lg:grid-cols-2 xl:min-h-[640px] grid-flow-dense">
			<article
				style={{
					backgroundColor: textSectionBgColor,
					gridColumnStart: reversed ? 2 : 1,
					justifyContent: width < 1023 ? "center" : reversed ? "flex-end" : "flex-start",
				}}
				className="w-full h-full flex items-center  py-[100px] xl:py-[130px] "
			>
				<div
					style={width < 1023 ? {} : reversed ? { paddingRight: width >= 1023 && width < 1280 ? 40 : "calc((100vw - 1220px)/2)" } : { paddingLeft: width >= 1023 && width < 1280 ? 40 : "calc((100vw - 1220px)/2)" }}
					className="flex flex-col items-center lg:items-start gap-[36px] text-white px-[40px]"
				>
					<h2
						data-aos="zoom-in"
						data-aos-duration="400"
						className="text-[30px] lg:text-[40px] xl:text-[48px] font-bold text-center lg:text-left "
					>
						{textSectionHeader}
					</h2>

					{textSectionContent.map((item: string) => (
						<p
							data-aos="zoom-in"
							data-aos-duration="400"
							className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] max-w-[500px] text-center lg:text-left"
						>
							{item}
						</p>
					))}

					<motion.button
						{...interactionAnimations}
						onClick={() => navigate(buttonPath)}
						data-aos="zoom-in"
						className={`text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] py-[18px] px-[35px] border w-fit  transition-all duration-300 hover:text-[${textSectionBgColor}] uppercase`}
					>
						{textSectionCtaButtonText}
					</motion.button>
				</div>
			</article>

			{OtherSectionComponent}
		</section>
	);
};

export default SectionGrid;
