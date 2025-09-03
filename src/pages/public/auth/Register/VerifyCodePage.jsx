import Header from "../../../../components/Header.jsx";
import Footer from "../../../../components/Footer.jsx";
import { FaMicrosoft, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {BiError} from "react-icons/bi";
import {Loader} from "lucide-react";
import useUserStore from "../../../../stores/userStore.js";
import {TextSuccess} from "../../../../components/helpers.jsx";
import useCommonStore from "../../../../stores/commonStore.js";

const VerifyCodePage = () => {
    const { isLoading, error, success, setSuccess, setError } = useCommonStore();
    const { verifyRegister, resendVerification } = useUserStore();

    const location = useLocation();
    const navigate = useNavigate();

    const [code, setCode] = useState(["", "", "", "", "", ""]);

    const handleChange = (value, index) => {
        // Allow only numbers
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);
        setError(null);
        setSuccess(null)

        if (value && index < code.length - 1) {
            document.getElementById(`code-${index + 1}`).focus();
        }

        if (index === code.length - 1 && value) {
            const otpCode = newCode.join("");
            verifyOtp(otpCode, location.state?.email);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            document.getElementById(`code-${index - 1}`).focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim();
        if (!/^\d+$/.test(pasteData)) return;

        const digits = pasteData.split("").slice(0, 6);
        const newCode = [...code];
        digits.forEach((d, i) => {
            newCode[i] = d;
        });

        setCode(newCode);
        setError(null);

        const lastIndex = digits.length - 1;
        if (lastIndex >= 0 && lastIndex < code.length) {
            document.getElementById(`code-${lastIndex}`).focus();
            verifyOtp(newCode.join(""), location.state?.email);
        }
    };

    const handleCodeRequest = async (e) => {
        e.preventDefault();
        await resendVerification(location.state.email)
    }

    const verifyOtp = async (code, email) => {
        const result = await verifyRegister(code, email);

        if (result?.error === 'user_not_found') {
            navigate('/register')
        } else if (result?.token) {
            setTimeout(() => navigate(`/register/complete/${result.token}`, { state: {email: result?.email}}), 2000)
        }
    };

    return (
        <main className="bg-gray-100 flex flex-col justify-between min-h-screen">
            <Header />
            <section className="flex gap-6 flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-center">We emailed you a code</h1>
                <p className="text-gray-700 text-center max-w-xl">
                    We sent a mail to <span className="font-semibold">{location.state?.email ?? "your email"}</span>.
                    Enter the code here or tap the button in the email to continue.
                </p>

                {/* Code Input */}
                <div className="flex flex-col gap-3 items-center w-96">
                    {success
                        ? <TextSuccess message={success} />
                        : <p className="text-gray-700 text-center max-w-md">If you don’t see the email, check your spam or junk folder.</p>
                    }
                    <form
                        className="flex items-center gap-4"
                        onPaste={handlePaste}
                    >
                        {code.map((digit, idx) => (
                            <input
                                disabled={isLoading}
                                key={idx}
                                id={`code-${idx}`}
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={digit}
                                maxLength={1}
                                onChange={(e) => handleChange(e.target.value, idx)}
                                onKeyDown={(e) => handleKeyDown(e, idx)}
                                className="w-12 h-14 border border-gray-300 rounded text-center text-xl font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ))}

                    </form>
                    {isLoading && <p className="flex gap-1 items-center text-gray-600 font-normal text-sm"><Loader size="16" className="animate-spin" />checking your code</p>}

                    {error &&
                        <p className="bg-red-100 w-[96%] flex items-center text-gray-700 justify-center gap-2 p-2 text-sm rounded-md">
                            <BiError className="fill-pink-700 font-medium" size="22" />
                            <span className="text-center">{error}</span>
                        </p>
                    }
                </div>

                {/* Email service buttons */}
                <div className="flex gap-4">
                    <a
                        href="https://mail.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                    >
                        <FaGoogle className="text-red-500" /> Open Gmail
                    </a>
                    <a
                        href="https://outlook.live.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                    >
                        <FaMicrosoft className="text-blue-600" /> Open Outlook
                    </a>
                </div>

                {/* Links */}
                <div className="text-center text-sm space-y-2 text-gray-600">
                    <p>
                        Can’t find your code?{" "}
                        <button disabled={isLoading} type="button" onClick={handleCodeRequest} className="text-indigo-600 hover:underline disabled:opacity-25">
                            Request a new code.
                        </button>
                    </p>
                    <p>
                        Having trouble?{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                            Try entering a workspace URL
                        </a>
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default VerifyCodePage;
