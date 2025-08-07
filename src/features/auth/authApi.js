import axios from '../../services/axios.js'
import handleAxiosError from '../../utils/handleAxiosError.js'

class AuthApi {
    login = async (credentials) => {
        const { identifier, password } = credentials

        try {
            const { data } = await axios.post("/auth/login", {
                identifier,
                password
            }, { withCredentials: true});

            return data

        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    registerUser = async (data) => {
        try {
            const res = await axios.post("/auth/register", data);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    logout = async () => {
        try {
            const res = await axios.post("/user/logout");
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    }

    getCurrentUser = async () => {
        try {
            const { data: {data: user} } = await axios.get("/user/me");
            return user;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    refreshToken = async () => {
        try {
            const res = await axios.post("/auth/refresh-token", {}, {
                withCredentials: true
            });
            return res.data;
        } catch (error) {
            console.log({error})
            throw handleAxiosError(error);
        }
    };

    forgotPassword = async (email) => {
        try {
            const res = await axios.post("/auth/forgot-password", { email });
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    resetPassword = async (token, newPassword) => {
        try {
            const res = await axios.post("/auth/reset-password", { token, newPassword });
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    verifyEmail = async (token) => {
        try {
            const res = await axios.post("/auth/verify-email", { token });
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    resendVerification = async (email) => {
        try {
            const res = await axios.post("/auth/resend-verification", { email });
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

}


export default new AuthApi()
