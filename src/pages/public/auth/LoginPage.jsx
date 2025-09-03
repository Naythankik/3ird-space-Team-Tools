import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import useUserStore from "../../../stores/userStore.js";
import useCommonStore from "../../../stores/commonStore.js";
import {TextError} from "../../../components/helpers.jsx";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useUserStore();
    const { isLoading, error, resetError } = useCommonStore();

    const [form, setForm] = useState({
        identifier: '',
        password: '',
        rememberMe: false
    });

    const handleLogin = async (e) => {
        e.preventDefault()
        const result = await login(form);
        result ?? navigate('/welcome');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
        resetError()
    }

    return (
        <main className="bg-gray-100 flex flex-col justify-between items-center min-h-screen">
            <Header />

            <section className="my-12 md:my-8 w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    {error
                        ? <TextError message={error} />
                        : <p className="text-gray-500 text-sm">Sign in to your account</p>
                    }


                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Email/Username</label>
                    <input
                        type="text"
                        value={form.identifier}
                        name="identifier"
                        onChange={handleChange}
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
                        name="password"
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={form.rememberMe}
                            onChange={handleChange}
                            className="mr-2 rounded"
                        />
                        Remember me
                    </label>
                    <Link to="/forgot-password" className="text-indigo-600 hover:underline">Forgot password?</Link>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
