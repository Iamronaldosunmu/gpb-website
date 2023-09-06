import Container from "../components/container";
import Nav from "../components/nav";
import Product from "../components/product";
import Footer from "../sections/Footer";

function ShopPrint() {
	const navItems = ["Home", "Shop print"];
	return (
		<div className="pt-[180px]">
			<Nav />
			<header className="relative w-full text-[#181818] h-[321px] bg-[url('/assets/images/heroimage.png')] bg-no-repeat bg-cover bg-center bg-local">
				<Container className="relative h-full">
					<div className="absolute bottom-0 text-[32px] font-bold bg-white pt-7 text-center px-[73px]">Shop Prints</div>
				</Container>
			</header>
			<Container className="mt-4">
				<div className="text-xl text-right">
					<ul className="list-none p-0 font-semibold">
						{navItems.map((item, index) => (
							<li
								className="cursor-pointer inline-block mr-1"
								key={index}
							>
								<span className="hover:text-gray-400">{item}</span>
								{index !== navItems.length - 1 ? " / " : ""}
							</li>
						))}
					</ul>
				</div>
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
			</Container>
			<Container className="mt-[51px] mb-[59px] flex flex-col items-center justify-center">
				<section className="grid grid-cols-4 gap-x-[30px] gap-y-[116px] mb-[110px]">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
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
