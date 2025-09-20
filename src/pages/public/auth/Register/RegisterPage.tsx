import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaApple, FaSlack } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import React, {type ReactNode, useState} from "react";
import {Loader} from "lucide-react";
import useUserStore from "../../../../stores/userStore";
import useCommonStore from "../../../../stores/commonStore";
import {TextError, TextSuccess} from "../../../../components/helpers";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { initialRegister } = useUserStore();
    const { isLoading, success, error } = useCommonStore();

    const [email, setEmail] = useState<string>('')

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await initialRegister(email);
        console.log(response)
        return
        setTimeout(() => {
            navigate(`/register/verify/${response}`, { state: { email }})
        }, 2000)
    }

    return (
        <main className="bg-gray-100 flex flex-col justify-between min-h-screen">
            <Header />

            <section className="my-24 flex-grow flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
                    <div className="text-center space-y-1">
                        <h2 className="text-2xl font-bold text-gray-800">Sign up to continue</h2>

                        {error && <TextError message={error} />}
                        {success && <TextSuccess message={success} />}
                    </div>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                disabled={isLoading}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <p className="text-xs text-gray-500 text-center">
                            By signing up, I accept the{" "}
                            <a
                                href="#"
                                target="_blank"
                                className="text-indigo-600 underline"
                                rel="noopener noreferrer"
                            >
                                3irdSpace Cloud Terms of Service
                            </a>{" "}
                            and acknowledge the{" "}
                            <a
                                href="#"
                                target="_blank"
                                className="text-indigo-600 underline"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </a>.
                        </p>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full cursor-pointer py-2 flex justify-center items-center gap-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                        >
                            Continue
                            {isLoading && <Loader className="animate-spin" size={20} color="white" />}
                        </button>
                    </form>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="h-px flex-grow bg-gray-300" />
                        or continue with
                        <div className="h-px flex-grow bg-gray-300" />
                    </div>

                    <div className="space-y-3">
                        <SocialButton
                            label="Google"
                            icon={<FcGoogle className="w-5 h-5" />}
                        />
                        <SocialButton
                            label="Microsoft"
                            icon={<FaMicrosoft className="w-5 h-5 text-blue-600" />}
                        />
                        <SocialButton
                            label="Apple"
                            icon={<FaApple className="w-5 h-5 text-black" />}
                        />
                        <SocialButton
                            label="Slack"
                            icon={<FaSlack className="w-5 h-5 text-[#611f69]" />}
                        />
                    </div>

                    <p className="text-sm text-center text-gray-600">
                        Already have a 3irdSpace account?{" "}
                        <Link to="/login" className="text-indigo-600 hover:underline">
                            Log in
                        </Link>
                    </p>

                    <p className="text-xs text-center text-gray-400">
                        This site is protected by reCAPTCHA and the{" "}
                        <a
                            href="#"
                            target="_blank"
                            className="underline"
                            rel="noopener noreferrer"
                        >
                            Google Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            className="underline"
                            rel="noopener noreferrer"
                        >
                            Terms of Service
                        </a>{" "}
                        apply.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
};

const SocialButton = ({ label, icon }: {label: string, icon: ReactNode}) => {
    return (
        <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
            {icon} {label}
        </button>
    );
};

export default RegisterPage;
