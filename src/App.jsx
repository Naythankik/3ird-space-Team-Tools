import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/public/LoginPage.jsx";
import RegisterPage from "./pages/public/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage.jsx";
import AboutPage from "./pages/public/AboutPage.jsx";
import FeaturesPage from "./pages/public/FeaturesPage.jsx";
import Contact from "./pages/public/ContactPage.jsx";
import Blog from "./pages/public/BlogPage.jsx";
import HelpCenter from "./pages/public/HelpCenter.jsx";

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
