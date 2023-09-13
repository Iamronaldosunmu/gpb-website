import { FC } from "react";
import Container from "../container";

interface Props {
	pageName: string;
}

const Hero: FC<Props> = ({ pageName }) => {
	return (
		<header className="mt-[180px] relative text-[#181818] h-[321px] bg-[url('/assets/images/heroimage.png')] bg-no-repeat bg-cover bg-center bg-local">
			<Container className="relative h-full">
				<div className="absolute bottom-0 text-[32px] font-bold bg-white pt-7 text-center px-[73px]">{pageName}</div>
			</Container>
		</header>
	);
};

export default Hero;
