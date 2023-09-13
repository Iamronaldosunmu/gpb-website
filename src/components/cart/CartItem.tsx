import { ChangeEvent, FC } from "react";

interface Props {
	id: number;
	productName: string;
	colour: string;
	exclusivity: string;
	oldPrice: number;
	newPrice: number;
	checked: boolean;
	removeItem: () => void;
	selectItem: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CartItem: FC<Props> = ({ id, productName, colour, exclusivity, oldPrice, newPrice, checked, removeItem, selectItem }) => {
	// Add Animations Later
	return (
		<div
			key={id}
			className="relative flex gap-x-[30px] w-[593px] h-[190px] items-center border border-[#181818] rounded-lg px-7 py-8"
		>
			<input
				onChange={selectItem}
				checked={checked}
				className="w-[30px] h-[30px]"
				type="checkbox"
			/>
			<div className="w-[120px] h-[125px] overflow-hidden rounded">
				<img
					className="w-full h-full object-cover"
					src="/assets/patterns/blue-beauty.png"
					alt=""
				/>
			</div>
			<div className="flex flex-col gap-y-[10px]">
				<h3 className="text-[32px] font-semibold">{productName}</h3>
				<p>COLOUR : {colour}</p>
				<p>EXCLUSIVITY: {exclusivity}</p>
				<div className="flex">
					<p className="font-lato font-semibold">{`N${newPrice}`}</p>
					<p className="font-lato font-semibold line-through text-[#5A3522] ml-2">{`N${oldPrice}`}</p>
				</div>
			</div>
			<button
				onClick={removeItem}
				className="absolute self-start right-0 underline underline-offset-8 font-semibold mr-10"
			>
				remove
			</button>
		</div>
	);
};

export default CartItem;
