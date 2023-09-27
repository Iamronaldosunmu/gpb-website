import { create } from "zustand";

export interface Product {
	name: string;
	id: string;
	price: string;
	discountPrice: string;
	publishedAt: Date;
	productImage: {
		id: number;
		url: string;
	}[];
}

interface ProductStore {
	products: Product[];
	setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
	products: [],
	setProducts: (products: Product[]) => set({ products }),
}));

export default useProductStore;
