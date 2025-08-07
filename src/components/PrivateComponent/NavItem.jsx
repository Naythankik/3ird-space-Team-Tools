import { Link, useLocation } from "react-router-dom";

const NavItem = ({ Icon, label, path }) => {
    const { pathname } = useLocation();

    const isActive = pathname === path || pathname.startsWith(path + "/");

    return (
        <Link
            to={path}
            title={label}
            className={`flex items-center justify-center md:justify-start gap-3 text-gray-700 hover:text-indigo-600 cursor-pointer transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
            }`}
        >
            {Icon && <Icon className="h-10 md:h-8 w-10 md:w-8" />}
            <span className="hidden md:inline-block text-lg font-medium">{label}</span>
        </Link>
    );
};

export default NavItem;
