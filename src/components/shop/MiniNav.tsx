import { FC } from "react";

interface Props {
	classname?: string;
	paths: string[];
}

const MiniNav: FC<Props> = ({ classname, paths = [] }) => {
	return (
		<div className={`text-[14px] lg:text-2xl ${classname}`}>
			<ul className="list-none p-0 font-semibold">
				{paths.map((path, index) => (
					<li
						className="cursor-pointer inline-block mr-1"
						key={index}
					>
						<span className={paths.length - 1 === index ? "text-gray-400" : ""}>{path}</span>
						{index !== paths.length - 1 ? " / " : ""}
					</li>
				))}
			</ul>
		</div>
	);
};
export default MiniNav;
