import { useState } from "react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const Loader = () => {
	const [finished, setFinished] = useState(false)
	const navigate = useNavigate()
	return (
		<motion.div onAnimationComplete={() => navigate("/home") } animate={finished ? {opacity: 0} : {}} className="bg-[#AF9E7F] text-[#3d5549] fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center text-[54px] font-bold">
			<motion.div>
				{"#GPB".split(" ").map((word, index) => {
					return (
						<div
							key={index}
							className="overflow-hidden flex "
						>
							{word.split("").map((letter: string, index: number) => {
								return (
									<motion.div
										onAnimationComplete={index == 2 ? () => setTimeout(() => {
											setFinished(true)
										}, 2000) : () => {}}
										initial={{ y: 90, scale: 0.9 }}
										animate={{
											y: 0,
											transition: {
												duration: 1.3,
												ease: [0.43, 0.13, 0.23, 0.96],
												delay: 0.1 * index,
											},
											scale: 1,
										}}
									>
										{letter}
									</motion.div>
								);
							})}
						</div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Loader;
