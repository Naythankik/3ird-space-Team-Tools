import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        // element: <Home />,
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/dashboard",
                // element: <Dashboard />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={ router } />
}

export default App;
