import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/public/auth/LoginPage.jsx";
import RegisterPage from "./pages/public/auth/Register/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/public/auth/ForgotPasswordPage.jsx";
import AboutPage from "./pages/public/AboutPage.jsx";
import FeaturesPage from "./pages/public/FeaturesPage.jsx";
import Contact from "./pages/public/ContactPage.jsx";
import Blog from "./pages/public/BlogPage.jsx";
import HelpCenter from "./pages/public/HelpCenter.jsx";
import Dashboard from "./pages/private/Dashboard.jsx";
import GuestRoute from "./routes/GuestRoute.jsx";
import Task from "./pages/private/Task.jsx";
import ResetPasswordPage from "./pages/public/auth/ResetPasswordPage.jsx";
import VerifyCodePage from "./pages/public/auth/Register/VerifyCodePage.jsx";
import CompleteRegisterPage from "./pages/public/auth/Register/CompleteRegisterPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/features',
        element: <FeaturesPage />
    },
    {
        path: '/contact-us',
        element: <Contact />
    },
    {
        path: '/help-center',
        element: <HelpCenter />
    },
    {
        path: '/blog',
        element: <Blog />
    },
    {
        element: <GuestRoute />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/register/verify/:token',
                element: <VerifyCodePage />
            },
            {
                path: '/register/complete/:token',
                element: <CompleteRegisterPage />
            },
            {
                path: '/forgot-password',
                element: <ForgotPasswordPage />
            },
            {
                path: '/reset-password/:token',
                element: <ResetPasswordPage />
            }
        ],
        errorElement: <ErrorPage />
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/tasks",
                element: <Task />,
            },
        ],
        errorElement: <ErrorPage />
    },
]);

const App = () => {
    return <RouterProvider router={ router } />
}

export default App;
