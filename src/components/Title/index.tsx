import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface TitleProps {
	name: string;
	index: number;
	setRotation: (item: number) => void;
	setIndex: Dispatch<SetStateAction<number>>;
	textEnter: () => void;
	textLeave: () => void;
	id: string;
}

const Title: React.FC<TitleProps> = ({ name, index, setRotation, setIndex, textEnter, textLeave, id }) => {
	const navigate = useNavigate();
	return (
		<div
			onMouseEnter={() => {
				setRotation(index), console.log("This is working");
			}}
			onMouseLeave={() => {
				setIndex(-1);
			}}
			className="title-item"
		>
			<h1
				onClick={() => navigate(`/clients/${id}`)}
				className="w-fit"
				onMouseEnter={textEnter}
				onMouseLeave={textLeave}
			>
				{name}
			</h1>
		</div>
	);
};
export default Title;
