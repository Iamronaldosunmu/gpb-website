import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientImage from "../../components/ClientImage";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import Container from "../../components/container";
import useSize from "../../hooks/useSize";
import useClientStore, { Client } from "../../store/clients";
import { interactionAnimations } from "../../utils/framer-default-animations";
import { useClients } from "../../hooks/useClients";

const Clients = () => {
	const { clients } = useClientStore();
	const { data: freshClientData } = useClients();
	const { setClients } = useClientStore();
	useEffect(() => {
		setClients(freshClientData);
	}, [freshClientData, setClients]);

	const clientData = clients?.map((client: Client) => ({
		image: client.images ? client.images[0] : "",
		name: client.name,
		id: client.id,
	}));

	console.log(clients, clientData);
	const [rotationPosition, setRotation] = useState(new Array(clientData?.length).fill(0));
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const mousePosition = (e: any) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
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
	const navigate = useNavigate();

	const [width] = useSize();
	return (
		<>
			<PageContainer className="hidden lg:block">
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
					<Container className="mb-[200px]">
						<div className="title-container">
							{clientData?.map(({ name, id }, index) => (
								<Title
									id={id}
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
							{clientData?.map(({ image }, index) => (
								<ClientImage
									key={index}
									image={(image as { url: string })?.url}
									active={activeIndex == index}
									rotationPosition={rotationPosition[index]}
								/>
							))}
						</div>
					</Container>
				</main>
			</PageContainer>
			<PageContainer className="lg:hidden">
				<div className="w-full mt-[64.8px] bg-[#F2D9D8] pt-[30px]">
					<Container className="lg:hidden">
						<header className="mt-[28px] pb-[120px] text-center">
							<h1 className="font-medium text-[24px] mb-[12px]">#GPBCLIENTS</h1>
							<p className="text-[14px]">In the last five years we have worked with some amazing brands, creating mind blowing prints. The best part of what we do is getting to see the final product and witnessing how it influences various industries.</p>
						</header>
					</Container>
				</div>
				<Container className={`grid ${width > 767 ? "grid-cols-3" : "grid-cols-2"} gap-y-[40px] space-x-[20px] relative -top-[45px]`}>
					{clients?.map((client) => (
						<motion.div
							{...interactionAnimations}
							onClick={() => navigate(`/clients/${client.id}`)}
						>
							<figure className="w-full rounded-[10px] overflow-hidden">
								<img
									src={client.images ? (client.images[0].url) : ""}
									className="w-full aspect-[0.8] object-cover"
								/>
							</figure>
							<div className="mt-[12px] text-[14px] font-semibold flex space-x-[20px] items-center">
								<p>{client?.name}</p>
								<svg
									className="min-w-[22px]"
									width="22"
									height="14"
									viewBox="0 0 67 43"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										y1="21"
										x2="65"
										y2="21"
										stroke="black"
										stroke-width="2"
									/>
									<line
										x1="45.67"
										y1="1.25481"
										x2="65.67"
										y2="21.2548"
										stroke="black"
										stroke-width="2"
									/>
									<line
										x1="65.7071"
										y1="21.7071"
										x2="45.7071"
										y2="41.7071"
										stroke="black"
										stroke-width="2"
									/>
								</svg>
							</div>
						</motion.div>
					))}
				</Container>
			</PageContainer>
		</>
	);
};

export default Clients;
