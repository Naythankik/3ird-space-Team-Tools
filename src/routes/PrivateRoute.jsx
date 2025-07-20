import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { isAuthenticated, authLoading } = useAuth();

    if (authLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
