import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../stores/userStore.js";

const GuestRoute = () => {
    const { isAuthenticated } = useUserStore();

    return !isAuthenticated ? <Outlet /> : <Navigate to="/welcome" replace />;
};

export default GuestRoute;
