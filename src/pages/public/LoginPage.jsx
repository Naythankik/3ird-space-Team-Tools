import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import {useState} from "react";
import authApi from "../../features/auth/authApi.js";

const LoginPage = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const body = JSON.stringify({ identifier, password })
        try {
            const response = await authApi.login(body);
            console.log(response)

        }catch (err){
            setError(err)
        }finally {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
    }
    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />

            <div className="my-12 md:my-0 w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 text-sm">Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    {error && <p className="text-red-500 text-center my-1 text-xs font-medium">{error}</p>}
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Email/Username</label>
                    <input
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        placeholder="Enter email or username"
                    />
                </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded" />
                        Remember me
                    </label>
                    <Link to="/forgot-password" className="text-indigo-600 hover:underline">Forgot password?</Link>
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                >
                    Sign In
                </button>
            </form>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Sign up</Link>
                </p>
            </div>

            <Footer />
        </main>
    )
}

export default LoginPage
