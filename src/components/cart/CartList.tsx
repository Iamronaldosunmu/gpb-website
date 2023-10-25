import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import useCartStore from "../../store/cart";
import useProductStore from "../../store/products";
import { container, interactionAnimations } from "../../utils/framer-default-animations";
import CartItem from "./CartItem";

const CartList = () => {
	const { cart, saveCart, removeFromCart } = useCartStore();
	useEffect(() => {
		saveCart();
	}, [cart, saveCart]);
	const { products } = useProductStore();
	const [items, setItems] = useState(cart.map((item) => ({ id: item.id, checked: false })));

	const selectItem = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		if (e.target.checked) setItems(items.map((item) => (item.id === id ? { ...item, checked: true } : item)));
		else setItems(items.map((item) => (item.id === id ? { ...item, checked: false } : item)));
	};

	const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setItems((prev) => prev.map((item) => ({ ...item, checked: true })));
		else setItems((prev) => prev.map((item) => ({ ...item, checked: false })));
	};

	return (
		<div className="w-full lg:max-w-[500px] xl:max-w-[600px]">
			<div className="flex w-full justify-between items-center">
				<div className="flex gap-x-2 items-center text-2xl">
					<motion.input
						{...interactionAnimations}
						onChange={selectAll}
						checked={items.length > 0 ? (items.some((a) => a.checked === false) ? false : true) : false}
						className="w-[26px] h-[26px] cursor-pointer"
						type="checkbox"
					/>
					<p className="font-medium">Cart</p>
					<p className="text-[#3C3B3B]">|</p>
					{!items.some((item) => item.checked) && <p className="text-[#2d2c2cb5]">{`${items.length} item${items.length !== 1 ? "s" : ""} `}</p>}
					{items.some((item) => item.checked) && <p className="text-[#2d2c2cb5]">{`${items.filter((item) => item.checked).length} item${items.length > 1 ? "s" : ""} selected`}</p>}
				</div>
				<motion.div
					{...interactionAnimations}
					onClick={() => {
						const checkedItems = [];
						for (const item of items) {
							if (item.checked) checkedItems.push(item);
						}
						setItems(items.filter((item) => !item.checked));
						checkedItems.forEach((item) => removeFromCart(item.id));
					}}
					className="flex items-center gap-x-1 cursor-pointer"
				>
					<img
						className="w-6 h-6 object-cover"
						src="/assets/images/trash.svg"
						alt=""
					/>
					<p className="font-semibold">Remove</p>
				</motion.div>
			</div>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="mt-[60px] flex flex-col gap-y-[25px] md:gap-y-[60px]"
			>
				{cart?.map((cartItem) => (
					<CartItem
						id={cartItem.id}
						productName={products?.find((product) => product.id === cartItem.id)?.name || ""}
						backgroundColor={cartItem.backgroundColor}
						exclusivity={cartItem.exclusivity}
						oldPrice={products?.find((product) => product.id === cartItem.id)?.discountPrice ? products?.find((product) => product.id === cartItem.id)?.price as string : ""}
						newPrice={products?.find((product) => product.id === cartItem.id)?.discountPrice ? products?.find((product) => product.id === cartItem.id)?.discountPrice as string: products?.find((product) => product.id === cartItem.id)?.price as string}
						selectItem={(e) => selectItem(e, cartItem.id)}
						removeItem={() => removeFromCart(cartItem.id)}
						checked={items.find((a) => a.id === cartItem.id)?.checked || false}
						image={products?.find((product) => product.id === cartItem.id)?.productImage ? products?.find((product) => product.id === cartItem.id)?.productImage[0].url as string : ""}
					/>
				))}
				{cart.length == 0 && (
					<div className="w-full h-[200px] flex items-center justify-center ">
						<p>No Items in the cart</p>
					</div>
				)}
			</motion.div>
		</div>
	);
};

export default CartList;
