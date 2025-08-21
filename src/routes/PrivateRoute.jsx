import {Navigate, Outlet, useLocation} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader.jsx";
import DefaultLayout from "../components/PrivateComponent/DefaultLayout.jsx";

const PrivateRoute = () => {
    const { isAuthenticated, authLoading } = useAuth();
    const { pathname } = useLocation();

    if (authLoading) return <Loader />;

    return isAuthenticated ? pathname === '/welcome' ? <Outlet /> :<DefaultLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
