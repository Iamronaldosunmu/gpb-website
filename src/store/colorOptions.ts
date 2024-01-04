import { create } from "zustand";

export interface ColourOptions {
	id: string;
	satisfied: string;
	change: string;
	changes2: string;
	changes3: string;
	exclusivity: string;
}

interface ProductStore {
	colourOptions: ColourOptions;
	setColourOptions: (colourOptions: ColourOptions) => void;
}

const useColourOptionsStore = create<ProductStore>((set) => ({
	colourOptions: localStorage.getItem("colourOptions")
		? JSON.parse(localStorage.getItem("colourOptions")!)
		: {
				id: "0",
				satisfied: "0",
				change: "0",
				changes2: "0",
				changes3: "0",
				exclusivity: "0",
		  },
	setColourOptions: (colourOptions: ColourOptions) => {
		set({ colourOptions });
		if (colourOptions) localStorage.setItem("colourOptions", JSON.stringify(colourOptions));
	},
}));

export default useColourOptionsStore;
