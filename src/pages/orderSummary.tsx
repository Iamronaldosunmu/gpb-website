import { useState } from "react";
import Nav from "../components/shipping/Nav";
import Form from "../components/shipping/Form";
import BottomFooter from "../sections/Footer/BottomFooter";
import Container from "../components/container";
import Cart from "../components/shipping/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const OrderSummary: React.FC = () => {
	const [openModal, setOpenModal] = useState(false);
	const [page, setPage] = useState("form")

	// Function to open the modal
	const openModalHandler = () => {
		setOpenModal(true);
	};

	// Function to close the modal
	const closeModalHandler = () => {
		setOpenModal(false);
	};
	return (
		<>
			<Container className="mt-[80px] lg:mt-[200px] w-full md:px-20 px-5">
				<Nav textShowing={!(page == "form")} goBack={() => setPage("form")} />{" "}
			</Container>
			<button
				className="lg:hidden bg-gray-200 block mt-9 w-full text-left py-3 px-5 group"
				onClick={openModalHandler}
			>
				Show order summary
				<FontAwesomeIcon
					className="ml-2 transition-transform transform rotate-0 group-hover:rotate-90"
					icon={faChevronRight}
				/>
			</button>
			{openModal && (
				<div className="fixed top-0 left-0 w-full max-h-full bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
					<Cart closeModal={closeModalHandler} />
				</div>
			)}
			<Container className="mb-[5rem] mt-6">
				<div className="grid lg:grid-cols-2 gap-4 lg:px-20 md:px-10 sm:px-5">
					<div className="cols-span-1 w-full">{<Form page={page} setPage={setPage} />}</div>
					<div className="cols-span 1 h-full ml-9 hidden lg:block">
						<Cart />
					</div>
				</div>
			</Container>
			<BottomFooter />
		</>
	);
};

export default OrderSummary;
