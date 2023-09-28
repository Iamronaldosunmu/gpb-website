import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

interface Item {
	name: string;
	color: string;
	exclusivity: boolean;
	imageUrl?: string;
	price: number;
	isFree: boolean;
	shippingFee?: number;
}

interface Cart {
	closeModal?: (arg: boolean) => void;
}

const Cart = ({ items, closeModal }: { items: Item[]; closeModal?: (arg: boolean) => void }) => {
	const subTotal = items.reduce((total, item) => total + item.price, 0);

	const totalShippingFee = items
		.filter((item) => !item.isFree) // so here i'm dropping items that don;t have shipping fee i.e they are free
		.reduce((total, item) => total + (item.shippingFee || 0), 0);

	const taxRate = 0.1;
	const tax = subTotal * taxRate;

	const totalCost = subTotal + totalShippingFee + tax;

	return (
		<div className="flex h-full  ">
			<div className="bg-red-100 md:flex-grow w-full sm:p-6  sm:px-9 px-5 mt-4">
				<div className="flex justify-end pt-8 mt-10 md:mt-0">
					<button
						className="lg:hidden"
						onClick={() => closeModal?.(false)}
					>
						X
					</button>
				</div>
				<div className="flex justify-between mb-1 mt-6  ">
					<h2 className="lg:text-2xl text-lg font-semibold">Order Summary</h2>
					<a
						className="underline mx-4"
						href="#"
					>
						Edit cart
					</a>
				</div>
				<div className="border-b border-b-black mb-12"></div>
				<div>
					{items.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-3 pb-9 "
						>
							<div className="w-2/3 flex col-span-2">
								<img
									src="/assets/images/item.png"
									alt={item.name}
									className="w-20 h-20 object-cover flex-shrink-0 sm:mr-5 mr-2"
								/>
                <div className="flex-shrink-0">
								<h3 className="text-base font-semibold">{item.name}</h3>
								<p className="text-xs">COLOR : {item.color}</p>
								<p className="text-xs">EXCLUSIVITY : {item.exclusivity ? "YES" : "NO"}</p>
							</div>
							</div>

							<div className="flex flex-shrink justify-end">
								<p className="text-sm font-semibold ">N{item.price}</p>
							</div>
						</div>
					))}
				</div>
				<div className="mb-7 flex items-center">
					<input
						id="apply"
						className="flex-grow py-3 px-3 mr-1 focus:border-none text-xs h-12 outline-none"
						placeholder="Enter gift code or voucher"
						type="text"
					/>
					<button className="bg-black text-white px-5 py-3 text-center hover:cursor-pointer h-12">Apply</button>
				</div>

				<div className="border-b mt-9 mb-7 border-b-black"></div>
				<div className="flex justify-between text-lg mb-7 font-semibold">
					<div>
						<p>SubTotal</p>
						<p>Shipping</p>
						<p>Tax</p>
					</div>
					<div>
						<p>N{subTotal}</p>
						<p>{totalShippingFee > 0 ? `N${totalShippingFee}` : "Free"}</p>
						<p>N{tax}</p>
					</div>
				</div>
				<div className="border-b mb-7 border-b-black"></div>
				<div className="flex justify-between text-lg mb-[3rem]  font-semibold">
					<div>
						<p className="text-2xl font-bold">Total</p>
					</div>
					<div>
						<p>N{totalCost}</p>
					</div>
				</div>
				<div className="flex justify-center">
					<p className="font-bold text-lg sm:pb-10 pb-5">
						<span className="mr-1">
							<FontAwesomeIcon icon={faLock} />
						</span>
						Secure Checkout
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
