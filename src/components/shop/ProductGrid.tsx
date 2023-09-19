import Container from "../container";
import Product from "./Product";

const ProductGrid = () => {
	return (
		<Container className="mt-[61px] mb-[59px]">
			<div className="flex self-end w-full justify-between items-center">
				<div className="font-medium text-[18px] md:text-[23px] space-x-2 relative">
					<span className="relative bottom-[3px]">53</span>
					<span className="">Products</span>
				</div>
				<div className="flex items-center justify-center py-4 px-3 border border-[#181818] gap-x-1">
					<span className="text-[18px] md:text-xl font-medium">Sort by: featured </span>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/chevron-down.svg"
						alt=""
					/>
				</div>
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 md:gap-x-[50px] lg:gap-x-[30px] gap-y-[40px] md:gap-y-[80px] lg:gap-y-[116px] mt-[51px] mb-[110px] grid-size">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
					<Product
						key={i}
						productName="SHINE"
						oldPrice={80000}
						newPrice={98000}
					/>
				))}
			</section>
			<div className="flex w-full justify-center">
				<button className="text-[#5A3522] w-[210px] border-2 border-[#5A3522] py-4 px-[49px] text-xl font-medium">Load More</button>
			</div>
		</Container>
	);
};

export default ProductGrid;
