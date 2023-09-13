import { ChangeEvent, useState } from "react";
import CartItem from "./CartItem";

const CartList = () => {
	const [items, setItems] = useState([
		{
			id: 0,
			checked: false,
		},
		{
			id: 1,
			checked: false,
		},
		{
			id: 2,
			checked: false,
		},
	]);

	const selectItem = (e: ChangeEvent<HTMLInputElement>, id: number) => {
		if (e.target.checked) setItems(items.map((item) => (item.id === id ? { ...item, checked: true } : item)));
		else setItems(items.map((item) => (item.id === id ? { ...item, checked: false } : item)));
	};

	const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setItems((prev) => prev.map((item) => ({ ...item, checked: true })));
		else setItems((prev) => prev.map((item) => ({ ...item, checked: false })));
	};

	return (
		<div className="w-full max-w-[600px]">
			<div className="flex w-full justify-between items-center">
				<div className="flex gap-x-2 items-center text-2xl">
					<input
						onChange={selectAll}
						checked={items.length > 0 ? (items.some((a) => a.checked === false) ? false : true) : false}
						className="w-[26px] h-[26px]"
						type="checkbox"
					/>
					<p className="font-medium">Cart</p>
					<p className="text-[#3C3B3B]">|</p>
					<p className="text-[#2d2c2cb5]">{`${items.length} items`}</p>
				</div>
				<div
					onClick={() => setItems(items.filter((item) => !item.checked))}
					className="flex items-center gap-x-1 cursor-pointer"
				>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/trash.svg"
						alt=""
					/>
					<p className="font-semibold">Remove</p>
				</div>
			</div>
			<div className="mt-[60px] flex flex-col gap-y-[60px]">
				{items.map((item) => (
					<CartItem
						id={item.id}
						productName={"Shine"}
						colour={"Colour"}
						exclusivity={"NO"}
						oldPrice={80000}
						newPrice={98700}
						selectItem={(e) => selectItem(e, item.id)}
						removeItem={() => setItems((prev) => prev.filter((a) => a.id !== item.id))}
						checked={item.checked}
					/>
				))}
			</div>
		</div>
	);
};

export default CartList;
