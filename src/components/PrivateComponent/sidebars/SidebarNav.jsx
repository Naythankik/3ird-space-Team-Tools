import { CogIcon, HomeIcon } from "@heroicons/react/16/solid";
import { BellIcon, CalendarIcon, ClipboardListIcon, UsersIcon } from "lucide-react";
import NavItem from "../NavItem.jsx";

const NAV_LINKS = [
    { label: "Home", path: "/dashboard", icon: HomeIcon },
    { label: "Tasks", path: "/tasks", icon: ClipboardListIcon },
    { label: "Timeline", path: "/timeline", icon: CalendarIcon },
    { label: "Team", path: "/team", icon: UsersIcon },
    { label: "Activity", path: "/notifications", icon: BellIcon },
    { label: "Settings", path: "/settings", icon: CogIcon },
];

const SidebarNav = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="flex items-center justify-center text-2xl font-bold text-white mb-8 bg-indigo-600 rounded-md w-12 h-12">
                3S
            </h1>
            {/* Nav Links */}
            <nav className="space-y-3">
                {NAV_LINKS.map(({ label, path, icon: Icon }) => (
                    <NavItem key={label} Icon={Icon} label={label} path={path} />
                ))}
            </nav>
        </div>
    );
};

export default SidebarNav;
