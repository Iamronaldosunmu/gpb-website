import { create } from "zustand";

export interface Client {
	id: string;
	name: string;
	images: {
		url: string;
	}[];
}

interface ClientStore {
	clients: Client[];
	setClients: (clients: Client[]) => void;
}

const useClientStore = create<ClientStore>((set) => ({
	clients: [],
	setClients: (clients: Client[]) => set({ clients }),
}));

export default useClientStore;
