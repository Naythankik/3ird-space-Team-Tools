import Header from "../../../../components/Header.jsx";
import Footer from "../../../../components/Footer.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Eye, EyeOff, Loader} from "lucide-react";
import authApi from "../../../../features/auth/authApi.js";

const CompleteRegister = () => {
    const location = useLocation();
    const { token } = useParams()
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const { message } = await authApi.completeRegistration(token,form);
            setSuccessMessage(message);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            if (Array.isArray(err)) {
                const newErrors = {};
                err.forEach(e => {
                    if (e.includes('firstName')) newErrors.firstName = e;
                    else if (e.includes('lastName')) newErrors.lastName = e;
                    else if (e.includes('password')) newErrors.password = e;
                    else newErrors.other = e;
                });
                setErrors(newErrors);
            } else {
                setErrors({ other: err});
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-gray-100 flex flex-col justify-between min-h-screen">
            <Header />
            <section className="my-24 flex-grow flex flex-col gap-2 items-center justify-center px-4">
                {successMessage && (<p className="text-green-400 font-medium">{successMessage}</p>)}
                {errors.other && (<p className="text-red-500 font-medium">{errors.other}</p>)}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
                >
                    <input
                        type="email"
                        name="email"
                        value={location.state.email}
                        readOnly
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={e => setForm({...form, firstName: e.target.value})}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                required
                                onChange={e => setForm({...form, lastName: e.target.value})}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="relative space-y">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            value={form.password}
                            onChange={e => setForm({...form, password: e.target.value})}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>


                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full cursor-pointer py-2 flex justify-center items-center gap-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                    >
                        Complete Registration
                        {loading && <Loader className="animate-spin" size={20} color="white" />}
                    </button>

                </form>
            </section>
            <Footer />
        </main>
    );
};

export default CompleteRegister;
