import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxImageProps {
	src: string;
	containerClassName?: string;
	imageClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, containerClassName, imageClassName }) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
	return (
		<div
			ref={container}
			className={"w-full h-full overflow-hidden " + containerClassName}
		>
			<motion.img
				style={{ scale }}
				className={"w-full h-full object-cover scale-[1.005] " + imageClassName}
				src={src}
			/>
		</div>
	);
};

export default ParallaxImage;
