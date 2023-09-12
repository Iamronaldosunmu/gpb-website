import { FC } from "react";

interface Props {
	prints: string[];
}

const PreviewProduct: FC<Props> = ({ prints }) => {
	return (
		<div className="flex gap-x-[33px]">
			<div className="flex flex-col justify-end items-center space-y-[31px]">
				{prints.map((path, index) => (
					<img
						key={index}
						className="w-[71px] h-[68px] object-cover"
						src={`/assets/patterns/${path}`}
						alt=""
					/>
				))}
			</div>
			<div className="w-[489px] h-[622px]">
				<img
					className="w-full h-full object-cover"
					src={`/assets/patterns/${prints[0]}`}
					alt=""
				/>
			</div>
		</div>
	);
};

export default PreviewProduct;
