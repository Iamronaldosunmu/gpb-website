import { create } from "zustand";

export interface UserDetails {
	email: string;
	firstName: string;
	lastName: string;
	companyName: string;
	address: string;
	cityName: string;
	phone: string;
	zipCode: string;
	referral: string;
	country: string;
	state: string;
}

interface UserDetailsStore {
	userDetails: UserDetails;
	setUserDetails: (userDetails: Partial<UserDetails>) => void;
}

const useUserDetailsStore = create<UserDetailsStore>((set) => ({
	userDetails: localStorage.getItem("userDetails")
		? JSON.parse(localStorage.getItem("userDetails")!)
		: {
				email: "",
				firstName: "",
				lastName: "",
				companyName: "",
				address: "",
				cityName: "",
				phone: "",
				zipCode: "",
				referral: "",
				country: "",
				state: "",
		  },
	setUserDetails: (userDetails: Partial<UserDetails>) => set((state) => ({ userDetails: { ...state.userDetails, ...userDetails } })),
}));

export default useUserDetailsStore;
