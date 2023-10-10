import { create } from "zustand";

export interface CartItem {
	id: string;
	backgroundColor: "SATISFIED" | "Change" | "2 Changes" | "3 Changes";
	exclusivity: "YES" | "NO";
}

interface CartStore {
	cart: CartItem[];
	addToCart: (product: CartItem) => void;
	removeFromCart: (id: string) => void;
	saveCart: () => void;
	clearCart: () => void;
}

const useCartStore = create<CartStore>((set, get) => ({
	cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
	addToCart: (product) =>
		set((state) => {
			if (state.cart.find((p) => p.id === product.id)) {
				console.log(product);
				return { cart: [...state.cart.filter((cartItem) => product.id != cartItem.id), product] };
			} else {
				return { cart: [...state.cart, product] };
			}
		}),
	removeFromCart: (id) => {
		set((state) => ({ cart: state.cart.filter((p) => p.id !== id) }));
	},
	saveCart: () => localStorage.setItem("cart", JSON.stringify(get().cart)),
	clearCart: () => {
		set(() => ({ cart: [] }))
		
	}
}));

export default useCartStore;
