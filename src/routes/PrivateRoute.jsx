import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader.jsx";
import DefaultLayout from "../components/PrivateComponent/DefaultLayout.jsx";

const PrivateRoute = () => {
    const { isAuthenticated, authLoading } = useAuth();

    if (authLoading) return <Loader />;

    return isAuthenticated ? <DefaultLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
