import { Link } from "react-router-dom";
import { PlaneTakeoffIcon, LogOutIcon } from "lucide-react";
import {useAuth} from "../../../context/AuthContext.jsx";

const USER_OPTIONS = {
    profile: [
        { label: "Profile", path: "/profile" },
        { label: "Preferences", path: "/preferences" },
    ],
    downloads: [{ label: "Downloads", path: "/downloads" }],
    account: [
        { label: "Upgrade Plan", path: "/upgrade", icon: PlaneTakeoffIcon },
        { label: "Logout", icon: LogOutIcon },
    ],
};

const UserMenu = () => {
    const { user, logout } = useAuth();

    return (
        <div id="userOptions" className="hidden rounded-lg bg-indigo-300 text-black/60 space-y-2 w-60 absolute bottom-2 left-14 shadow-lg">
            {/* User Info */}
            <div className="flex items-start p-4 pb-0 gap-2">
                <img
                    src={user?.avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
                    alt="user"
                    className="h-9 w-9 rounded-md"
                />
                <div className="flex-1">
                    <p className="text-base font-semibold">{user?.fullName}</p>
                    <p className="flex items-center gap-1 text-sm">
                        <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                        <span className="text-xs text-black/80">Active</span>
                    </p>
                </div>
            </div>

            {/* Menu Sections */}
            {Object.entries(USER_OPTIONS).map(([section, items]) => (
                <div key={section} className="border-t border-gray-200 pt-2">
                    {items.map(({ label, path, icon: Icon }, id) => (
                        <div key={id}>{path ?
                            <Link
                                to={path}
                                className="flex items-center gap-2 px-4 py-1 hover:bg-indigo-600 hover:text-white capitalize font-medium"
                            >
                                {Icon && <Icon className="h-5 w-5" />}
                                {label}
                            </Link> :
                            <button
                                type="button"
                                onClick={label === "Logout" ? logout : undefined}
                                className="flex items-center gap-2 px-4 py-1 hover:bg-indigo-600 hover:text-white capitalize font-medium w-full cursor-pointer"
                            >
                                {Icon && <Icon className="h-5 w-5" />}
                                {label}
                            </button>
                        }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default UserMenu;
