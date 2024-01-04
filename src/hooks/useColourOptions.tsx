import axiosInstance from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useColourOptions = () => {
	const getColourOptions = async () => axiosInstance.get("/products").then((res) => res.data.colourOptions);
	return useQuery({ queryKey: ["colourOptions"], queryFn: getColourOptions });
};
