import axios from "../../services/axios";
import handleAxiosError from "../../utils/handleAxiosError";
import type {InitialRegisterResponse, LoginResponseType, LoginType} from "../../types/AuthTypes";


class AuthApi {
    /**
     * Handles the user login process.
     * @param credentials - The user's login credentials.
     * @returns A token and user object.
     */
    login = async (credentials: LoginType): Promise<LoginResponseType> => {
        const { data } =
            await axios.post<LoginResponseType>(
                "/auth/login",
                credentials,
                { withCredentials: true });

        return data;
    };

    registerEmail = async (email: string ): Promise<{message: string}> => {
        const { data } = await axios.post<{message: string}>(
            "/auth/register/initialPhase",
            { email }
        );
        return data;
    };

    completeRegistration = async (
        token: string,
        body: Record<string, any>
    ): Promise<{ user: User; token: string }> => {
        try {
            const { data } = await axios.post<{ user: User; token: string }>(
                `/auth/register/finalPhase/${token}`,
                body
            );
            return data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    logout = async (): Promise<{ message: string }> => {
        const { data } = await axios.post<{ message: string }>("/user/logout");
        return data;
    };

    refreshToken = async (): Promise<{ token: string }> => {
        try {
            const { data } = await axios.post<{ token: string }>(
                "/auth/refresh-token",
                {},
                { withCredentials: true }
            );
            return data;
        } catch (error) {
            console.log({ error });
            throw handleAxiosError(error);
        }
    };

    forgotPassword = async (email: string): Promise<{ message: string }> => {
        try {
            const { data } = await axios.post<{ message: string }>(
                "/auth/forgot-password",
                { email }
            );
            return data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    resetPassword = async (
        form: { token: string; password: string }
    ): Promise<{ message: string }> => {
        try {
            const { data } = await axios.post<{ message: string }>(
                "/auth/reset-password",
                form
            );
            return data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };

    verifyEmail = async (
        code: string,
        email: string
    ): Promise<{ data: {token: string, user: object} }> => {
        const { data } = await axios.post<{ message: string }>(
            "/auth/register/verify-email",
            { code, email }
        );
        return data;
    };

    resendVerification = async (
        email: string
    ): Promise<{ message: string }> => {
        try {
            const { data } = await axios.post<{ message: string }>(
                "/auth/register/request-otp",
                { email }
            );
            return data;
        } catch (error) {
            throw handleAxiosError(error);
        }
    };
}

export { AuthApi };
