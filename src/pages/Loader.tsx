// // import imagesLoaded from "imagesloaded";
// import "locomotive-scroll/src/locomotive-scroll.scss";
// import { timeline } from "motion";
// import { useEffect, useRef } from "react";

import { useState } from "react";
import TextAnimation from "../components/TextAnimation";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
// import { TimelineDefinition } from "@motionone/dom/types/timeline/types";
// import { useNavigate } from "react-router-dom";

// function getSectionHeight(element: HTMLUListElement) {
// 	const { height } = element.getBoundingClientRect();
// 	const { childElementCount } = element;
// 	return height / childElementCount;
// }
// const Loader = () => {
// 	const scrollRef = useRef<HTMLDivElement | null>(null);
// 	const countRef = useRef<HTMLUListElement | null>(null);
// 	const countRef2 = useRef<HTMLUListElement | null>(null);
// 	const loaderRef = useRef<HTMLDivElement | null>(null);

// 	const titleRef = useRef<HTMLHeadingElement | null>(null);
// 	const imageRef = useRef<HTMLImageElement | null>(null);

// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		// Preload images
// 		// Promise.all([preloadImages(".grid-item-media")]).then(() => {
// 		//   if (locomotiveRef.current) {
// 		//     locomotiveRef.current.update();
// 		//   }
// 		// });
// 	}, []);

// 	useEffect(() => {
// 		if (countRef.current && countRef2.current && loaderRef.current) {
// 			const transformAmount = getSectionHeight(countRef.current);

// 			const sequence1 = new Array(3).fill("").flatMap((_, index) => [
// 				[countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
// 				[countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, { at: "-1.8" }],
// 			]) as TimelineDefinition;

// 			timeline(sequence1, {
// 				defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
// 			});
// 		}
// 	}, []);

// 	useEffect(() => {
// 		const sequence2: TimelineDefinition = [
// 			[titleRef.current, { y: 100 }, { duration: 0.5 }],
// 			[imageRef.current, { scale: 1.2 }, { at: "<", duration: 0.5 }],
// 			[countRef.current, { opacity: 0 }, { at: "<", duration: 0.5 }],
// 			[countRef2.current, { opacity: 0 }, { at: "<", duration: 0.5 }],
// 			[loaderRef.current, { y: "-100vh" }, { at: "-0.5", duration: 0.5 }],
// 			[titleRef.current, { y: 0 }, { at: "-.5", duration: 0.5 }],
// 			[imageRef.current, { scale: 1 }, { at: "<", duration: 0.5 }],
// 		] as TimelineDefinition;

// 		timeline(sequence2, {
// 			defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 7 },
// 		});

// 		setTimeout(() => navigate("/home"), 8500);
// 	}, []);

// 	return (
// 		<>
// 			<div
// 				className="loader-container"
// 				ref={loaderRef}
// 			>
// 				<div className="brand-name">#GPB</div>
// 				<div className="counter-container">
// 					<ul
// 						className="counter-list"
// 						ref={countRef}
// 					>
// 						<li>
// 							<h3>2</h3>
// 						</li>
// 						<li>
// 							<h3>4</h3>
// 						</li>
// 						<li>
// 							<h3>6</h3>
// 						</li>
// 						<li>
// 							<h3>9</h3>
// 						</li>
// 					</ul>
// 				</div>

// 				<div className="counter-container">
// 					<ul
// 						className="counter-list"
// 						ref={countRef2}
// 					>
// 						<li>
// 							<h3>3</h3>
// 						</li>
// 						<li>
// 							<h3>9</h3>
// 						</li>
// 						<li>
// 							<h3>8</h3>
// 						</li>
// 						<li>
// 							<h3>9</h3>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<div
// 				className="main-container"
// 				id="main-container"
// 				data-scroll-container
// 				ref={scrollRef}
// 			></div>
// 		</>
// 	);
// };

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
			{/* <TextAnimation
				text="#GPB"
				className="text-[48px] font-bold"
			/> */}
		</motion.div>
	);
};

export default Loader;
