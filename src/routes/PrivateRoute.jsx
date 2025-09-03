import {Navigate, Outlet, useLocation} from "react-router-dom";
import DefaultLayout from "../components/PrivateComponent/DefaultLayout.jsx";
import useUserStore from "../stores/userStore.js";

const PrivateRoute = () => {
    const { isAuthenticated } = useUserStore();
    const { pathname } = useLocation();

    return isAuthenticated ? pathname === '/welcome' ? <Outlet /> :<DefaultLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
