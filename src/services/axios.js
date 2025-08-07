import axios from 'axios'
import authApi from "../features/auth/authApi.js";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error))

instance.interceptors.response.use(
    res => res,
    async error => {
        const originalRequest = error.config;

        if (
            originalRequest._retry ||
            originalRequest.url.includes('/auth/refresh-token')
        ) {
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && error.response?.data?.message === 'Token expired') {
            originalRequest._retry = true;
            try {
                const response = await authApi.refreshToken();
                originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
                localStorage.setItem('accessToken', response.data.access_token)

                return instance(originalRequest);
            } catch (refreshError) {
                console.error('Refresh failed:', refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);




export default instance
