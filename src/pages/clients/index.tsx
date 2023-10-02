import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClientImage from "../../components/ClientImage";
import Title from "../../components/Title";
import Container from "../../components/container";
import Nav from "../../components/nav";
import PageContainer from "../../components/PageContainer";

const Clients = () => {
	const clients = [
		{
			image: "/assets/images/allpeace.png",
			name: "ALL PEACE",
		},
		{
			image: "/assets/images/amuj.png",
			name: "AMUJ",
		},
		{
			image: "/assets/images/budweiserxtokyojames.png",
			name: "BUDWEISER X TOKYO JAMES",
		},
		{
			image: "/assets/images/ejonalabel.png",
			name: "EJONA LABEL",
		},
		{
			image: "/assets/images/jzo.png",
			name: "JZO",
		},
		{
			image: "/assets/images/fiafactory.png",
			name: "FIA FACTORY",
		},
		{
			image: "/assets/images/frankieandco.png",
			name: "FRANKIE $ CO",
		},
		{
			image: "/assets/images/meena.png",
			name: "MEENA",
		},
		{
			image: "/assets/images/paula.png",
			name: "PAULA",
		},
		{
			image: "/assets/images/ellandruss.png",
			name: "ELL $ RUSS",
		},
		{
			image: "/assets/images/rimi.png",
			name: "RI MI",
		},
		{
			image: "/assets/images/nackah.png",
			name: "NACKAH",
		},
	];

	const [rotationPosition, setRotation] = useState(new Array(clients.length).fill(0));
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const mousePosition = (e: any) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			console.log(e.clientX, e.clientY);
		};

		window.addEventListener("mousemove", mousePosition);

		return () => window.removeEventListener("mousemove", mousePosition);
	});
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleSetRotation = (itemIndex: number) => {
		const newRotation = Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);
		const tempState = [...rotationPosition];
		tempState[itemIndex] = newRotation;
		setRotation(tempState);
		setActiveIndex(itemIndex);
	};
	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			backgroundColor: "#000000",
			transition: {
				duration: 0.1,
			},
		},
		hovered: {
			width: 80,
			height: 80,
			x: mousePosition.x - 40,
			y: mousePosition.y - 40,
			backgroundColor: "#000",
			// mixBlendMode: "difference",
			transition: {
				duration: 0.1,
			},
		},
	};
	const [cursorVariant, setCusorVariant] = useState("default");
	const textEnter = () => {
		setCusorVariant("hovered");
	};
	const textLeave = () => {
		setCusorVariant("default");
	};
	return (
		<PageContainer>
			<motion.div
				className="custom-cursor"
				variants={variants}
				animate={cursorVariant}
			>
				<motion.img
					animate={cursorVariant == "hovered" ? { scale: 1.3, opacity: 1 } : { scale: 0, opacity: 0 }}
					className=""
					src="/assets/images/right-arrow.png"
				/>
			</motion.div>
			<main className="mt-[169px] clients-page">
				<Nav />

				<Container className="mb-[200px]">
					<div className="title-container">
						{clients.map(({ name }, index) => (
							<Title
								textEnter={textEnter}
								textLeave={textLeave}
								key={index}
								name={name}
								index={index}
								setRotation={handleSetRotation}
								setIndex={setActiveIndex}
							/>
						))}
					</div>
					<div className="image-container">
						{clients.map(({ image }, index) => (
							<ClientImage
								key={index}
								image={image}
								active={activeIndex == index}
								rotationPosition={rotationPosition[index]}
							/>
						))}
					</div>
				</Container>
			</main>
		</PageContainer>
	);
};

export default Clients;
