import axiosInstance from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useHomepageImages = () => {
	const getHomepageImages = async () => axiosInstance.get("/homepage-displays").then((res) => res.data);
	return useQuery({ queryKey: ["homepage-displays"], queryFn: getHomepageImages });
};
