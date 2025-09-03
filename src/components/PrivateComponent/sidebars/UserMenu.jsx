import { Link } from "react-router-dom";
import { PlaneTakeoffIcon, LogOutIcon } from "lucide-react";
import useUserStore from "../../../stores/userStore.js";

const UserMenu = ({toggleProfile}) => {
    const { user, logout } = useUserStore();

    const USER_OPTIONS = {
        status :[
            { label: "Set yourself as away", event: () => console.log("Set yourself as away") },
            { label: "Pause notifications", path: "/pause" },
        ],
        profile: [
            { label: "Profile", event: () => {
                    toggleProfile( true )
                    document.getElementById("userOptions").classList.toggle("hidden")
                } },
            { label: "Preferences", path: "/preferences" },
        ],
        downloads: [{ label: "Downloads", path: "/downloads" }],
        account: [
            { label: "Upgrade Plan", path: "/upgrade", icon: PlaneTakeoffIcon },
            { label: "Logout", icon: LogOutIcon, event: logout },
        ],
    };

    return (
        <div
            id="userOptions"
            className="hidden bg-blend-overlay rounded-lg border border-gray-300 bg-indigo-300 text-black/60 space-y-2 w-64 absolute bottom-2 left-16.5 shadow-lg">
            <div className="flex items-start p-4 pb-0 gap-2">
                <img
                    src={user.avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
                    alt="user"
                    className="h-9 w-9 rounded-md"
                />
                <div className="flex-1">
                    <p className="text-base font-semibold">{user.fullName}</p>
                    <p className="flex items-center gap-1 text-sm">
                        <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                        <span className="text-xs text-black/80">Active</span>
                    </p>
                </div>
            </div>

            {/* Menu Sections */}
            {Object.entries(USER_OPTIONS).map(([section, items]) => (
                <div key={section} className="border-t border-gray-200 pt-2">
                    {items.map(({ label, path, icon: Icon, event }, id) => (
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
                                onClick={event}
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
