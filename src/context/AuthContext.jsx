import { createContext, useContext, useEffect, useState } from "react";
import authApi from "../features/auth/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const login = async (credentials) => {
        const data = await authApi.login(credentials);
        localStorage.setItem("token", data.token);
        setUser(data.user);
    };

    const logout = async () => {
        await authApi.logout();
        localStorage.removeItem("token");
        setUser(null);
    };

    const fetchCurrentUser = async () => {
        try {
            const user = await authApi.getCurrentUser();
            setUser(user);
        } catch (err) {
            console.error("Auth check failed:", err);
            setUser(null);
        } finally {
            setAuthLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) fetchCurrentUser();
        else setAuthLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                authLoading,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
