const Product = () => {
	return (
		<div className="relative w-[282px] border border-[#3C3B3B] rounded-sm">
			<div className="w-[50px] h-[50px] flex justify-center items-center absolute top-2 right-[6px] bg-white rounded-full">
				<img
					className="w-[28px] h-[28px] object-cover"
					src="/assets/images/favorite.svg"
					alt=""
				/>
			</div>
			<div className="w-full h-[408px] overflow-hidden">
				<img
					className="object-cover w-full h-full"
					src="/assets/patterns/blue-beauty.png"
					alt=""
				/>
			</div>
			<div className="px-5 py-3 font-semibold flex items-center text-[15px] justify-between bg-white">
				<span>SHINE</span>
				<div>
					<span className="font-lato">N80,000</span>
					<span className="font-lato line-through text-[#5A3522] ml-2">N98,000</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
