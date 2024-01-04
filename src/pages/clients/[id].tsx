import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import Container from "../../components/container";
import Nav from "../../components/nav";
import useSize from "../../hooks/useSize";
import BottomFooter from "../../sections/Footer/BottomFooter";
import useClientStore from "../../store/clients";

const Client = () => {
	const { clients } = useClientStore();
	const { id } = useParams<{ id: string }>();
	const [width] = useSize();
	const navigate = useNavigate();
	const infiniteCarouselRef = useRef(null);
	const [totalWidth, setTotalWidth] = useState(0);
	const [renderedImages] = useState(false);
	const imageRefs = useRef([]);

	useEffect(() => {
		imageRefs.current = imageRefs.current.slice(0, clients?.find((client) => client?.id == id)?.images?.length);
	});

	const selectValueBasedOnScreenSize = (mobile: any, tablet: any, desktop: any) => {
		if (width <= 768) {
			return mobile;
		} else if (width <= 1024) {
			return tablet;
		} else {
			return desktop;
		}
	};
	useEffect(() => {
		setTimeout(() => {
			let totalContainerWidth = 0;
			for (const item of imageRefs.current) {
				totalContainerWidth += (item as HTMLDivElement | HTMLImageElement).clientWidth;
			}
			setTotalWidth(totalContainerWidth);
		}, 800);
	}, [clients, imageRefs, width, renderedImages]);

	return (
		<PageContainer
			style={{ marginTop: selectValueBasedOnScreenSize(64.8, 64.8, 169) }}
			className="mt-[64.8px] lg:mt-[169px]"
		>
			<Nav />
			<div className="bg-[#F2D9D8] pt-[13px] lg:pt-[112px] pb-[70px]">
				<Container>
					<motion.p
						onClick={() => navigate("/clients")}
						className="flex items-center space-x-[8px] lg:space-x-[20px] group cursor-pointer"
					>
						<img
							className=" w-[10px] lg:w-min group-hover:-translate-x-1 transition-all"
							src="/assets/images/backarrow.svg"
						/>
						<span className="text-[16px] lg:text-[27px] text-[#BE3F00]">clients</span>
					</motion.p>
					<div>
						<h1
							className="text-center font-semibold text-[24px] md:text-[32px] lg:text-[40px] mt-[28px]
                  "
						>
							{clients?.find((client) => client?.id == id)?.name}
						</h1>
						<p className="text-[14px] md:text-[14px] lg:text-[24px] mt-[20px] text-center">Prints exclusively designed by GRAPES PATTERN BANK</p>
					</div>
				</Container>
			</div>
			<div className="w-full overflow-hidden mb-[40px] md:mb-[80px] lg:mb-[129px]">
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: -totalWidth, transition: { duration: totalWidth / 150, repeat: Infinity, ease: "linear" } }}
					ref={infiniteCarouselRef}
					className="flex min-w-fit"
				>
					{clients
						?.find((client) => client?.id == id)
						?.images.map((image, index: number) => {
							// if ((clients?.find((client) => client?.id == id)?.images.length || 0) - 1 == index) forceUpdate();
							return (
								<img
									ref={(el) => ((imageRefs.current as HTMLImageElement[])[index] = el as HTMLImageElement)}
									className="h-[350px] min-h-[350px] md:min-h-[450px] md:h-[450px] lg:h-[520px] lg:min-h-[520px]"
									src={image.url}
								/>
							);
						})}
					{clients
						?.find((client) => client?.id == id)
						?.images.map((image) => {
							return (
								<img
									className="h-[350px] min-h-[350px] md:min-h-[450px] md:h-[450px] lg:h-[520px] lg:min-h-[520px]"
									src={image.url}
								/>
							);
						})}
				</motion.div>
			</div>
			<BottomFooter />
		</PageContainer>
	);
};

export default Client;
