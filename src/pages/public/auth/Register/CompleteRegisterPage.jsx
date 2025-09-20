import Header from "../../../../components/Header.tsx";
import Footer from "../../../../components/Footer.tsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Eye, EyeOff, Loader} from "lucide-react";
import useCommonStore from "../../../../stores/commonStore.ts";
import useUserStore from "../../../../stores/userStore.ts";
import {TextError, TextSuccess} from "../../../../components/helpers.tsx";


const CompleteRegister = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { token } = useParams();
    const { isLoading, error, errors, success, setErrors } = useCommonStore();
    const { completeRegistration } = useUserStore();

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await completeRegistration(token,form);

        if(result){
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
        setErrors({...errors, [name]: undefined});
    }

    return (
        <main className="bg-gray-100 flex flex-col justify-between min-h-screen">
            <Header />
            <section className="my-24 flex-grow flex flex-col gap-2 items-center justify-center px-4">
                {success && <TextSuccess message={success} />}
                {error && <TextError message={error} />}

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
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            {errors?.firstName && <TextError message={errors?.firstName} pos="text-left" />}
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                required
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            {errors?.lastName && <TextError message={errors?.lastName} pos="text-left" />}
                        </div>
                    </div>

                    <div className="space-y">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required
                                value={form.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>
                        {errors?.password && <TextError message={errors?.password} pos="text-left" />}
                    </div>


                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full cursor-pointer py-2 flex justify-center items-center gap-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                    >
                        Complete Registration
                        {isLoading && <Loader className="animate-spin" size={20} color="white" />}
                    </button>

                </form>
            </section>
            <Footer />
        </main>
    );
};

export default CompleteRegister;
