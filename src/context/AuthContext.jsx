import { createContext, useContext, useState } from "react";
import authApi from "../features/auth/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem("accessToken") || null;
    });

    const [authLoading, setAuthLoading] = useState(false);

    const saveToStorage = (user, token) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", token);
    };

    const clearStorage = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    };

    const login = async (credentials) => {
        setAuthLoading(true);
        try {
            const {
                data: { access_token, user },
            } = await authApi.login(credentials);
            setAccessToken(access_token);
            setUser(user);
            saveToStorage(user, access_token);
            return true;
        } catch (error) {
            throw error;
        } finally {
            setAuthLoading(false);
        }
    };

    const logout = async () => {
        try {
            await authApi.logout();
        } catch (_) {}

        setAccessToken(null);
        setUser(null);
        clearStorage();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                authLoading,
                isAuthenticated: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
