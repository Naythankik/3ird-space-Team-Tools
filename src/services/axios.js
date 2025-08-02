import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.response.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error))

// axiosClient.js
instance.interceptors.response.use(
    res => res,
    async error => {
        // const originalRequest = error.config;

        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     await instance.post('/user/refresh-token', {}, { withCredentials: true });
        //     return axios(originalRequest); // retry with a new token
        // }

        return Promise.reject(error);
    }
);


export default instance
