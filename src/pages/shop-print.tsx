import Container from "../components/container";
import Nav from "../components/nav";
import Product from "../components/product";
import Footer from "../sections/Footer";

function ShopPrint() {
	return (
		<div className="pt-[169px]">
			<Nav />
			<Container>
				<header className="flex flex-col text-[#181818] pt-7">
					<h1 className="text-[32px] font-bold">Shop Prints</h1>
					<span className="text-xl font-medium self-end mt-6">
						Home / <span className="text-[#828282]">shop print</span>
					</span>
					<div className="flex mt-[61px] self-end w-full justify-between items-center">
						<div className="font-medium text-[23px] space-x-2 relative">
							<span className="relative bottom-[3px]">53</span>
							<span className="">Products</span>
						</div>
						<div className="flex items-center justify-center py-4 px-3 border border-[#181818] gap-x-1">
							<span className="text-xl font-medium">Sort by: featured </span>
							<img
								className="w-6 h-6 object-cover"
								src="/assets/images/chevron-down.svg"
								alt=""
							/>
						</div>
					</div>
				</header>
			</Container>
			<Container className="mt-[51px] mb-[59px] flex flex-col items-center justify-center">
				<section className="grid grid-cols-4 gap-x-[30px] gap-y-[90px] mb-[110px]">
					{[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
						<Product key={i} />
					))}
				</section>
				<div className="flex w-full justify-center">
					<button className="text-[#5A3522] w-[210px] border-2 border-[#5A3522] py-4 px-[49px] text-xl font-medium">Load More</button>
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default ShopPrint;
