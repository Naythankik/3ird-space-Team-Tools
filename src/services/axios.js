import axios from "axios";
import useUserStore from "../stores/userStore.js";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Always read the latest token from Zustand
instance.interceptors.request.use(
    (config) => {
        const { token } = useUserStore.getState();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        const { refreshToken } = useUserStore.getState();

        if (
            originalRequest._retry ||
            originalRequest.url.includes("/auth/refresh-token")
        ) {
            return Promise.reject(error);
        }

        if (
            error.response?.status === 401 &&
            error.response?.data?.message === "Token expired"
        ) {
            originalRequest._retry = true;
            try {
                const response = await refreshToken();
                originalRequest.headers.Authorization = `Bearer ${response.access_token}`;

                return instance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh failed:", refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
