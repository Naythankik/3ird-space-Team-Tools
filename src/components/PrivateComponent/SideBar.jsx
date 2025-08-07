import {CogIcon, HomeIcon} from "@heroicons/react/16/solid/index.js";
import { BellIcon, CalendarIcon, ClipboardListIcon, LogOutIcon, PlusIcon, UsersIcon } from "lucide-react";
import NavItem from "./NavItem";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }

    const sideBarLinks = [
        {
            label: 'Dashboard',
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
            label: 'Notifications',
            path: '/notifications',
            icon: BellIcon
        },
        {
            label: 'Settings',
            path: '/settings',
            icon: CogIcon
        }
    ]
    return (
        <aside className="max-w-64 bg-white border-r border-gray-300 min-h-screen p-4 flex flex-col justify-between">
            <div className="flex flex-col items-center md:items-start justify-center">
                <h1 className="hidden md:inline-block text-2xl font-bold text-indigo-600 mb-8">3irdSpace</h1>
                <h1 className="inline-block md:hidden text-2xl font-bold text-indigo-600 mb-8">3S</h1>
                <nav className="space-y-4">
                    {sideBarLinks.map(({ label, path, icon: Icon }, idx) => (
                        <NavItem key={idx} Icon={Icon} label={label} path={path} />
                    ))}
                </nav>
            </div>
            <div className="space-y-3">
                <button
                    title="Add new task"
                    className="bg-indigo-600 text-white py-2 px-4 rounded flex items-center gap-2 hover:bg-indigo-700 w-fit md:w-full">
                    <PlusIcon className="h-5 w-5" />
                    <span className="hidden md:inline-flex">New Task</span>
                </button>
                <button
                    title="Logout"
                    onClick={handleLogout}
                    className="bg-red-600 text-white py-2 px-4 rounded flex items-center gap-2 hover:bg-red-700 w-fit md:w-full">
                    <LogOutIcon className="h-5 w-5" />
                    <span className="hidden md:inline-flex">Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default SideBar
