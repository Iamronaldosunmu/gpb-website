import { create } from "zustand";
import { CartItem } from "./cart";

export interface OrderStore {
	order: CartItem[];
	setOrder: (order: CartItem[]) => void;
}

const useOrderStore = create<OrderStore>((set, get) => ({
	order: localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")!) : [],
	setOrder: (order) => {
		set(() => ({ order }));
		localStorage.setItem("order", JSON.stringify(get().order));
	},
}));

export default useOrderStore;
