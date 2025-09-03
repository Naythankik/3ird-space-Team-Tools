import { create } from "zustand";
import { persist } from "zustand/middleware";
import useCommonStore from "./commonStore.js";
import { AuthApi } from "../features/auth/authApi.js";
import randomString from "../utils/randomString.js";

const authApi = new AuthApi();

const useUserStore = create(
    persist(
        (set) => ({
            user: {},
            token: "",
            registerToken: "",
            isAuthenticated: false,

            login: async (data) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const {
                        data: { access_token, user },
                    } = await authApi.login(data);

                    set({
                        token: access_token,
                        user,
                        isAuthenticated: true,
                    });

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

            initialRegister: async (body) => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const data = await authApi.registerEmail(body);

                    const newToken = randomString(32);
                    commonStore.setSuccess(data.message)
                    set({registerToken: newToken});

                    return newToken;
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
