import {CogIcon, HomeIcon} from "@heroicons/react/16/solid/index.js";
import {
    BellIcon,
    CalendarIcon,
    ClipboardListIcon,
    Icon,
    LogOutIcon,
    PlaneTakeoffIcon,
    PlusIcon,
    UsersIcon
} from "lucide-react";
import NavItem from "./NavItem";
import { useAuth } from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

const SideBar = () => {
    const { user, logout } = useAuth();

    const sideBarLinks = [
        {
            label: 'Home',
            path: '/dashboard',
            icon: HomeIcon
        },
        {
            label: 'Tasks',
            path: '/tasks',
            icon: ClipboardListIcon
        },
        {
            label: 'Timeline',
            path: '/timeline',
            icon: CalendarIcon
        },
        {
            label: 'Team',
            path: '/team',
            icon: UsersIcon
        },
        {
            label: 'Activity',
            path: '/notifications',
            icon: BellIcon
        },
        {
            label: 'Settings',
            path: '/settings',
            icon: CogIcon
        }
    ]

    const USER_OPTIONS = {
        profile: [
            {
                label: 'Profile',
                path: '/profile',
            },
            {
                label: 'Preferences',
                path: '/preferences',
            }],
        downloads: [{
            label: 'Downloads',
            path: '/downloads'
        }],
        account: [
            {
                label: 'Upgrade Plan',
                path: '/upgrade',
                icon: PlaneTakeoffIcon,
            },
            {
                label: 'Logout',
                path: '/logout',
                icon: LogOutIcon,
            }]
    };

    const toggleModal = (modal) => {
        document.getElementById(modal)?.classList.toggle('hidden');
    }

    return (
        <aside className="max-w-60 bg-white border-r border-gray-300 min-h-screen p-4 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="flex items-center justify-center text-2xl font-bold text-white mb-8 bg-indigo-600 rounded-md w-12 h-12">3S</h1>
                <nav className="space-y-3">
                    {sideBarLinks.map(({ label, path, icon: Icon }, idx) => (
                        <NavItem key={idx} Icon={Icon} label={label} path={path} />
                    ))}
                </nav>
            </div>
            <div className="space-y-2 flex flex-col items-center w-full relative">
                <button
                    title="Add new task"
                    className="bg-indigo-600 py-2 px-4 rounded-full flex items-center gap-2 hover:bg-indigo-700 w-12 h-12 tranform transition-all duration-300">
                    <PlusIcon className="text-white text-3xl" />
                </button>
                <button
                    type="button"
                    title={user?.fullName}
                    onClick={() => toggleModal('userOptions')}
                    style={{
                        backgroundImage: 'url(https://randomuser.me/api/portraits/men/1.jpg)',
                    }}
                    className="bg-black/20 bg-blend-darken text-white py-2 px-4 rounded-xl flex cursor-pointer relative
                    items-center gap-2 w-12 h-12 bg-cover hover:bg-black/30 transition-all duration-300">
                    <span className="bg-green-500 w-2.5 h-2.5 rounded-full absolute bottom-0 right-0"></span>
                </button>

                <div id="userOptions" className="hidden rounded-lg bg-indigo-300 text-black/60 space-y-2 w-60 absolute bottom-2 left-14">
                    <div className="flex items-start p-4 pb-0 gap-2">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" className="h-9 max-w-9 rounded-md" />
                        <div className="flex-1">
                            <p className="text-base font-semibold">{user?.fullName}</p>
                            <p className="flex items-center gap-1 text-sm">
                                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                                <span className="text-xs text-black/80">Active</span>
                            </p>
                        </div>
                    </div>
                    {Object.entries(USER_OPTIONS).map(([key, value]) => (
                        <div key={key} className="space-y border-t border-gray-200 pt-2">
                            {value.map(({label, path, icon: Icon}, idx) => (
                                <Link
                                    to={label !== "Logout" ? path : "#"}
                                    key={idx}
                                    onClick={label === "Logout" ? logout : undefined}
                                    className="flex items-center gap-2 px-4 py-1 hover:bg-indigo-600 hover:text-white capitalize font-medium">
                                    {Icon && <Icon className="h-5 w-5" />}
                                    {label}
                                </Link>
                            ))}
                        </div>

                    ))}
                </div>
            </div>
        </aside>
    )
}

export default SideBar
