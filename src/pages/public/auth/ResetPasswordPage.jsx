import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import {Link, useParams} from "react-router-dom";
import { useState } from "react";
import { AuthApi } from "../../../features/auth/authApi.js";
import { Loader } from "lucide-react";

const authApi = new AuthApi();

const ResetPasswordPage = () => {
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const { token } = useParams()

    const [form, setForm] = useState({
        identifier: '',
        newPassword: '',
        confirmPassword: '',
        token
    })

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        setErrorMessage(null);

        if (form.newPassword !== form.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await authApi.resetPassword(form);
            setSuccessMessage(response.message)
        } catch (error) {
            setErrorMessage(error || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />
            <div className="my-12 md:my-0 w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
                    {errorMessage && <p className="text-center my-1 text-xs font-medium text-red-600">{errorMessage}</p>}
                    {successMessage && <p className="text-center my-1 text-xs font-medium text-green-600">{errorMessage}</p>}
                </div>
                <form className="space-y-5" onSubmit={handleResetPassword}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email/username" className="block text-sm font-medium text-gray-700">Email/Username</label>
                        <input
                            type="text"
                            value={form.identifier}
                            onChange={(e) => setForm({...form, identifier: e.target.value})}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            placeholder="Email/Username"
                            autoFocus
                            />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="New Password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            value={form.newPassword}
                            onChange={(e) => setForm({...form, newPassword: e.target.value})}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            placeholder="Enter new password"
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="New Password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={form.confirmPassword}
                            onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            placeholder="Enter new password"
                            autoFocus
                        />
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2 flex justify-center items-center gap-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                    >
                        Reset Password
                        {loading && <Loader className="animate-spin" size={20} color="white" />}
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

export default ResetPasswordPage;
