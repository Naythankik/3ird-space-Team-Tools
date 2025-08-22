import { Link, useLocation } from "react-router-dom";

const NavItem = ({ Icon, label, path }) => {
    const { pathname } = useLocation();

    const isActive = pathname.includes(path);

    return (
        <Link
            to={path}
            title={label}
            className={`flex flex-col items-center gap-1 text-gray-700 cursor-pointer transition`}
        >
            {Icon && <div className={`${isActive ? "bg-indigo-200" : ""} hover:bg-indigo-200 p-2 rounded-lg`}>
                <Icon className="h-6 w-6" />
            </div>}
            <span className="inline-flex text-xs font-medium">{label}</span>
        </Link>
    );
};

export default NavItem;
