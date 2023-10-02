import axiosInstance from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
	const getProducts = async () => axiosInstance.get("/products").then((res) => res.data.data);
	return useQuery({ queryKey: ["products"], queryFn: getProducts });
};
