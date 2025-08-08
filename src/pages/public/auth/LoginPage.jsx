import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../../context/AuthContext.jsx";

const LoginPage = () => {
    const [form, setForm] = useState({identifier: '', password: '', rememberMe: false})
    const { login  } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await login(form);
            setLoading(!response)
            navigate('/dashboard')
        }catch (err){
            setError(err)
        }finally {
            setLoading(false)
        }
    }
    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />

            <section className="my-12 md:my-8 w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
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
                        value={form.identifier}
                        onChange={(e) => setForm({...form, identifier: e.target.value})}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        placeholder="Enter email or username"
                    />
                </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={form.password}
                        required
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={form.rememberMe}
                            onChange={(e) => setForm({...form, rememberMe: e.target.checked})}
                            className="mr-2 rounded"
                        />
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
            </section>

            <Footer />
        </main>
    )
}

export default LoginPage
