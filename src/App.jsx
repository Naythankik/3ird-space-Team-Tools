import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/public/LoginPage.jsx";
import RegisterPage from "./pages/public/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/dashboard",
                // element: <Dashboard />,
            },
        ],
        errorElement: <ErrorPage />
    },
]);

const App = () => {
    return <RouterProvider router={ router } />
}

export default App;
