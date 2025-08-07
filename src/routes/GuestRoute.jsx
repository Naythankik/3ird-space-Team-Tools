import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader.jsx";

const GuestRoute = () => {
    const { isAuthenticated, authLoading } = useAuth();

    if (authLoading) return <Loader />;

    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default GuestRoute;
