import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import { Link } from "react-router-dom";
import {useState} from "react";
import { AuthApi } from "../../../features/auth/authApi.js";
import { Loader } from "lucide-react";

const authApi = new AuthApi();

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const handleForgetPassword = async (e) => {
        e.preventDefault()
        setMessage(null)
        setLoading(true)
        try {
            const response = await authApi.forgotPassword(email)
            setMessage(response.message)
        }catch (err){
            setMessage(err)
        }finally {
            setLoading(false)
        }
    }
    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />
            <div className="my-12 md:my-0 w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Forget Password</h1>
                    <p className="text-gray-500 text-sm">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                    {message && (
                        <p className={`text-center my-1 text-xs font-medium ${
                            message.includes("inbox") ? "text-green-600" : "text-red-600"
                        }`}>
                            {message}
                        </p>
                    )}
                </div>
                <form className="space-y-5" onSubmit={handleForgetPassword}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setMessage(null)
                            } }
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            placeholder="you@example.com"
                            />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2 flex justify-center items-center gap-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                    >
                        Send Reset Link
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

export default ForgotPassword
