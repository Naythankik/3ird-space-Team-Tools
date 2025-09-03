import axios from '../../services/axios.js'
import handleAxiosError from '../../utils/handleAxiosError.js'

class AuthApi {

    /**
     * Handles the user signup process.
     * It sends a POST request with the new user's details to the signup endpoint.
     *
     * @param {string} credentials - The user's full name.
     * @returns {Promise<{token: string, user: object}>} An object containing the auth token and user data.
     * @throws {Error} If the signup request fails or the server returns an error.
     */
    login = async (credentials) => {
        const { identifier, password } = credentials;

        const { data } = await axios.post("/auth/login", {
            identifier,
            password
        }, { withCredentials: true});
        return data
    };

    registerEmail = async (email) => {
        const res = await axios.post("/auth/register/initialPhase", {email});
        return res.data;
    };

    completeRegistration = async (token, body) => {
        try {
            const res = await axios.post(`/auth/register/finalPhase/${token}`, body);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    logout = async () => {
        const res = await axios.post("/user/logout");
        return res.data;
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
            const { data } = await axios.post("/auth/forgot-password", { email });
            return data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    resetPassword = async (form) => {
        try {
            const res = await axios.post("/auth/reset-password", form);
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    verifyEmail = async (code, email) => {
        const res = await axios.post(
            "/auth/register/verify-email",
            { code, email }
        );
        return res.data;
    };

    resendVerification = async (email) => {
        try {
            const res = await axios.post("/auth/register/request-otp", { email });
            return res.data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

}

export { AuthApi }
