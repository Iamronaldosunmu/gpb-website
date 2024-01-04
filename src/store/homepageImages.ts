import { create } from "zustand";

export interface HomepageImages {
	banner: {
		desktop: { id: number; url: string }[];
		mobile: { id: number; url: string }[];
	};
	learnOurStorySection: {
		id: number;
		url: string;
	};
	gpbFabricsSection: {
		id: number;
		url: string;
	};
	gpbClientsSection: {
		id: number;
		url: string;
	};
}

interface HomepageImagesStore {
	homePageImages: HomepageImages;
	setHomePageImages: (images: HomepageImages) => void;
	saveHomepageImages: () => void;
}

const useHomepageImagesStore = create<HomepageImagesStore>((set, get) => ({
	homePageImages: localStorage.getItem("homePageImages") ? JSON.parse(localStorage.getItem("homePageImages") as string) : {},
	setHomePageImages: (images: HomepageImages) => set(() => ({ homePageImages: images })),
	saveHomepageImages: () => {
		if (JSON.stringify(get().homePageImages)) localStorage.setItem("homePageImages", JSON.stringify(get().homePageImages));
	},
}));

export default useHomepageImagesStore;
