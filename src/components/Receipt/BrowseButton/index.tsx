import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const BrowseButton = () => {
	return (
		<div>
			<button className="py-2 group">
				<FontAwesomeIcon
					className="mr-2 transition-transform transform translate-x-0  group-hover:translate-x-[-4px]"
					icon={faChevronLeft}
				/>
				Continue Browsing
			</button>
		</div>
	);
};

export default BrowseButton;
