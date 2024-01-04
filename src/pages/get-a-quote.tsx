import Form from "../components/GetAQuote/form";
import Container from "../components/container";
import BottomFooter from "../sections/Footer/BottomFooter";
const GetAquote = () => {
	return (
		<>
			<div className="max-w-[1300px] mx-auto w-full lg:p-20 sm:mt-[50px] lg:mt-[100px] mb-[40px] mt-10 px-0 md:px-0 ">
				<div className=" w-full lg:flex gap-x-6 flex flex-col lg:flex-row justify-center ">
					<div className="bg-[#E99C99] lg:rounded-tl-3xl py-10 lg:justify-center lg:items-center lg:rounded-bl-3xl lg:w-1/2 lg:flex flex-col p-5 sm:p-10  text-center">
						<h2 className="text-2xl mb-3">GET A QUOTE</h2>
						<p className=" mb-3">Thanks for your interest in Grapes pattern bank. We would send our price list as soon as possible.</p>
						<p className=" mb-3">please let us know what kind of fabric you are looking so we could highlight it or similar fabrics on the price list before sending it to you</p>
						<p className=" mb-3">We have over 150 different type of fabrics we can print on ranging from silks to velvets, scuba, cotton, jerseys Please stage us know if you would be interested in ordering our fabric swatches</p>
					</div>
					<div className=" pt-10 lg:w-1/2">
						<Form />
					</div>
				</div>
			</div>
			<BottomFooter />
		</>
	);
};

export default GetAquote;
