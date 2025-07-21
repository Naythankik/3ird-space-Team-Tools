import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="py-4 shadow-md bg-white sticky top-0 z-50">
            <div className="flex items-center justify-between w-[95%] lg:w-[75%] mx-auto">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2">
                    <svg className="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <p className="text-lg font-bold">3irdSpace</p>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block w-2/5">
                    <ul className="flex justify-between text-base font-medium text-gray-700">
                        <li><a href="/#features" className="hover:text-indigo-600">Features</a></li>
                        <li><a href="/#how-it-works" className="hover:text-indigo-600">How It Works</a></li>
                        <li><a href="/#pricing" className="hover:text-indigo-600">Pricing</a></li>
                        <li><a href="/#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex gap-7 items-center">
                    <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Log in</Link>
                    <Link
                        to="/register"
                        className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white text-sm px-4 py-2 rounded-md"
                    >
                        Sign up free
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4">
                    <nav>
                        <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
                            <li><a href="/#features" className="hover:text-indigo-600">Features</a></li>
                            <li><a href="/#how-it-works" className="hover:text-indigo-600">How It Works</a></li>
                            <li><a href="/#pricing" className="hover:text-indigo-600">Pricing</a></li>
                            <li><a href="/#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-3">
                        <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Log in</Link>
                        <Link
                            to="/register"
                            className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white text-sm px-4 py-2 rounded-md"
                        >
                            Sign up free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
