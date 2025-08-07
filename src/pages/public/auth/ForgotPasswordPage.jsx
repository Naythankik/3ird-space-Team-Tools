import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />
            <div className="my-12 md:my-0 w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
                    <p className="text-gray-500 text-sm">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            placeholder="you@example.com"
                            />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
                    >
                        Send Reset Link
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500">
                    <Link to="/login" className="text-indigo-600 hover:underline">Back to login</Link>
                </p>
            </div>

            <Footer />
        </main>
    )
}

export default ForgotPassword
