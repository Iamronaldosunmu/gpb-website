import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://strapi-demo-2-0.onrender.com/api",
});

export default axiosInstance;
