import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-4xl font-bold mb-2">Something went wrong</h1>
            <p className="text-lg text-gray-600 mb-4">We’re sorry for the inconvenience.</p>
            <p className="text-sm text-gray-500">
                {error.statusText || error.message}
            </p>
        </div>
    );
}
