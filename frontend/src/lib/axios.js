import axios from "axios";

// Detect environment and set proper API base URL
let baseURL;

// 🧭 In development, the frontend runs on Vite (localhost:5173)
// so it should call the backend directly at port 3000
if (import.meta.env.MODE === "development") {
  baseURL = "http://localhost:3000/api";
} else {
  // 🧭 In production (Docker + Nginx), frontend and backend share the same domain.
  // Nginx reverse proxies /api → backend:3000/api
  baseURL = "/api";
}


export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "/api",
  withCredentials: true, // ✅ this is mandatory
});


// ✅ Optional: intercept 401 errors and handle automatic logout (optional feature)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — JWT cookie missing or expired");
    }
    return Promise.reject(error);
  }
);

