import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
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
