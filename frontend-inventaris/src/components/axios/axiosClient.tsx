import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  withXSRFToken: true,
  withCredentials: true, // penting untuk laravel sanctum
   headers: { Accept: 'application/json' }
});

export default axiosClient;