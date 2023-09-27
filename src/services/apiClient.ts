import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://gpb-strapi-demo.onrender.com/api", 
})

export default axiosInstance;