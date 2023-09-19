import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface TextAnimationProps {
	text: string;
	lineHeight: number;
	delay: number;
	className: string;
}

// const animationVariants = {
// 	initial: { y: 90, scale: 0.9 },
// 	animate: {
// 		y: 0,
// 		transition: {
// 			duration: 0.6,
// 			ease: [0.43, 0.13, 0.23, 0.96],
// 			delay: 0.2 + 0.05 * index,
// 		},
// 		scale: 1,
// 	},
// };

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className }) => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });

	useEffect(() => {
		console.log(isInView);
	}, [isInView]);
	return (
		<div
			ref={containerRef}
			className={className}
		>
			{text.split(" ").map((word, index) => {
				return (
					<div
						key={index}
						className="overflow-hidden flex "
					>
						{word.split("").map((letter: string, index: number) => {
							return (
								<motion.div
									initial={{ y: 90, scale: 0.9 }}
									animate={isInView ? {
										y: 0,
										transition: {
											duration: 1,
											ease: [0.43, 0.13, 0.23, 0.96],
											delay: 0.05 * index,
										},
										scale: 1,
									} : {}}
								>
									{letter}
								</motion.div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default TextAnimation;
