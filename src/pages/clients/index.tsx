import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClientImage from "../../components/ClientImage";
import Title from "../../components/Title";
import Container from "../../components/container";
import Nav from "../../components/nav";
import PageContainer from "../../components/PageContainer";
import { interactionAnimations } from "../../utils/framer-default-animations";
import useSize from "../../hooks/useSize";
import useClientStore, { Client } from "../../store/clients";
import { useNavigate } from "react-router-dom";

const Clients = () => {
	const { clients } = useClientStore();

	const clientData = clients?.map((client: Client) => ({
		image: client.images[0],
		name: client.name,
		id: client.id,
	}));

	const [rotationPosition, setRotation] = useState(new Array(clientData?.length).fill(0));
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
					<Nav />

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
									image={image.url}
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
						{/* <div className="flex items-center ">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="left arrow">
									<path
										id="Vector"
										d="M8.49922 12.7751L14.1992 18.3639C14.5992 18.7631 15.1992 18.7631 15.5992 18.3639C15.9992 17.9647 15.9992 17.3659 15.5992 16.9667L10.6992 11.9767L15.5992 6.98665C15.9992 6.58744 15.9992 5.98864 15.5992 5.58944C15.3992 5.38984 15.1992 5.29004 14.8992 5.29004C14.5992 5.29004 14.3992 5.38984 14.1992 5.58944L8.49922 11.1783C8.09922 11.6773 8.09922 12.2761 8.49922 12.7751C8.49922 12.6753 8.49922 12.6753 8.49922 12.7751Z"
										fill="#BE3F00"
									/>
								</g>?
							</svg>

							<span className="text-[14px] lg:text-[23px] font-medium text-[#BE3F00]">clients</span>
						</div> */}
						<header className="mt-[28px] pb-[120px] text-center">
							<h1 className="font-medium text-[24px] mb-[12px]">#GPBCLIENTS</h1>
							<p className="text-[14px]">In the last five years we have worked with some amazing brands, creating mind blowing prints. The best part of what we do is getting to see the final product and witnessing how it influences various industries.</p>
						</header>
					</Container>
				</div>
				<Container className={`grid ${width > 767 ? "grid-cols-3" : "grid-cols-2"} gap-y-[40px] gap-x-[20px] relative -top-[45px]`}>
					{clients?.map((client) => (
						<motion.div
							{...interactionAnimations}
							onClick={() => navigate(`/clients/${client.id}`)}
						>
							<figure className="w-full rounded-[10px] overflow-hidden">
								<img
									src={client?.images[0].url}
									className="w-full aspect-[0.8] object-cover"
								/>
							</figure>
							<div className="mt-[12px] text-[14px] font-semibold flex gap-x-[20px] items-center">
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
