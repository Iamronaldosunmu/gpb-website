import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

export const useClients = () => {
	const getClients = async () => axiosInstance.get("/clients").then((res) => res.data.data);
	return useQuery({ queryKey: ["clients"], queryFn: getClients });
};
