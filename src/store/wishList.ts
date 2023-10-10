import { create } from "zustand";

interface WishItem {
	id: string;
	quantity: number;
}

interface WishListStore {
	wishList: WishItem[];
	addToWishList: (id: string) => void;
	saveWishList: () => void;
	removeFromWishList: (id: string) => void;
	incrementQuantity: (id: string) => void;
	decrementQuantity: (id: string) => void;
}

const useWishListStore = create<WishListStore>((set, get) => ({
	wishList: localStorage.getItem("wish-list") ? JSON.parse(localStorage.getItem("wish-list")!) : [],
	addToWishList: (id) =>
		set((state) => {
			if (state.wishList.find((item) => item.id === id)) {
				return { wishList: [...state.wishList.filter((item) => item.id !== id)] };
			} else {
				return { wishList: [...state.wishList, { id: id, quantity: 1 }] };
			}
		}),
	saveWishList: () => localStorage.setItem("wish-list", JSON.stringify(get().wishList)),
	removeFromWishList: (id) => set((state) => ({ wishList: [...state.wishList.filter((item) => item.id !== id)] })),
	incrementQuantity: (id) =>
		set((state) => ({
			wishList: state.wishList.map((item) => {
				if (item.id !== id) return item;
				return { id: item.id, quantity: item.quantity + 1 };
			}),
		})),
	decrementQuantity: (id) =>
		set((state) => ({
			wishList: state.wishList.map((item) => {
				if (item.id !== id) return item;
				if (item.quantity <= 0) return { id: item.id, quantity: 0 };
				return { id: item.id, quantity: item.quantity - 1 };
			}),
		})),
}));

export default useWishListStore;
