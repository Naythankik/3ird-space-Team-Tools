import axios, {AxiosError, type AxiosInstance, type AxiosRequestConfig} from "axios";
import useUserStore from "../stores/userStore"

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});


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
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;
        const { refreshToken } = useUserStore.getState();

        if (
            originalRequest._retry ||
            originalRequest.url?.includes("/auth/refresh-token")
        ) {
            return Promise.reject(error);
        }

        if (
            error.response?.status === 401 &&
            (error.response.data as { message?: string })?.message === "Token expired"
        ) {
            originalRequest._retry = true;
            try {
                const response = await refreshToken();
                const newToken = (response as { access_token: string }).access_token;

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                }

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
