import { create } from "zustand";
import { persist } from "zustand/middleware";
import useCommonStore from "./commonStore";
import { AuthApi } from "../features/auth/authApi";
import randomString from "../utils/randomString";
import type {LoginFormState} from "../types/FormTypes";

const authApi = new AuthApi();

type User = {
    id?: string;
    email?: string;
    fullName?: string;
    [key: string]: any;
}

type UserState = {
    user: User | null;
    token: string;
    registerToken: string;
    isAuthenticated: boolean;
    login: (data: LoginFormState) => Promise<boolean>;
    logout: () => Promise<boolean>;
    refreshToken: () => Promise<any>;
    initialRegister: (email: string) => Promise<string | undefined>;
    verifyRegister: (code: string, email: string) => Promise<any>;
    resendVerification: (email: string) => Promise<boolean>;
    completeRegistration: (
        token: string,
        body: Record<string, any>
    ) => Promise<boolean>;
}

const useUserStore = create(
    persist<UserState>((set) => ({
            user: {},
            token: "",
            registerToken: "",
            isAuthenticated: false,

            login: async (credentials) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                delete credentials.rememberMe;

                try {
                    const { data: {access_token, user}} = await authApi.login(credentials);

                    set({
                        token: access_token,
                        user,
                        isAuthenticated: true,
                    });

                    return true;
                } catch (err) {
                    if(Object.keys(err?.response.data.errors).length){
                        commonStore.setErrors(err?.response.data.errors)
                    }else {
                        commonStore.setError(
                            err?.response?.data?.message || err?.message || err
                        );
                    }
                    return false;
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            logout: async () => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();

                try {
                    await authApi.logout();
                    set({ token: "", user: {}, isAuthenticated: false });
                    return true;
                } catch (err) {
                    commonStore.setError(
                        err?.response?.data?.message || err?.message || err
                    );
                    return false;
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            refreshToken: async () => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const { data } = await authApi.refreshToken();
                    set({token: data?.access_token});
                    return data;
                } catch (err) {
                    commonStore.setError(
                        err?.response?.data?.message || err?.message || err
                    );
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            initialRegister: async (email) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();

                try {
                    const { message } = await authApi.registerEmail(email);

                    const token = randomString(32);
                    commonStore.setSuccess(message)
                    set({registerToken: token});

                    return token;
                } catch (err) {
                    commonStore.setError(
                        err?.response?.data?.message || err?.message || err
                    );
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            verifyRegister: async (code, email) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const response = await authApi.verifyEmail(code, email);

                    const { token, user } = response.data;

                    set({registerToken: ''});
                    commonStore.setSuccess(`${response.message}, Redirecting to complete registration page...`)

                    return {
                        token,
                        email: user.email,
                    };
                } catch (err) {
                    const message = err?.response?.data?.message || err?.message || err
                    commonStore.setError(message);
                    if (message === 'User not found') {
                        return { error: 'user_not_found' };
                    }
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            resendVerification: async (email) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const data = await authApi.resendVerification(email);
                    commonStore.setSuccess(data.message)
                    return true;
                } catch (err) {
                    commonStore.setError(
                        err?.response?.data?.message || err?.message || err
                    );
                    return false;
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },

            completeRegistration: async (token, body) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();

                try {
                    const data = await authApi.completeRegistration(token, body);
                    commonStore.setSuccess(data.message);
                    return true;
                } catch (err) {
                    if (Array.isArray(err)) {
                        const formattedErrors = err.reduce((acc, curr) => {
                            const field = curr.toLowerCase() || "";
                            if (field.includes("firstname")) acc.firstName = curr;
                            if (field.includes("lastname")) acc.lastName = curr;
                            if (field.includes("password")) acc.password = curr;
                            return acc;
                        }, {});

                        commonStore.setErrors(formattedErrors);
                    } else {
                        commonStore.setError(
                            err?.response?.data?.message || err?.message || err || "An error occurred"
                        );
                    }

                    return false;
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            }
        }),
        {
            name: "user-storage", // storage key in localStorage
        }
    )
);

export default useUserStore;
