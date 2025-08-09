import { PlusIcon } from "lucide-react";
import UserMenu from "./UserMenu";
import {useAuth} from "../../../context/AuthContext.jsx";

const SidebarActions = () => {
    const { user } = useAuth();

    const toggleModal = (modal) => {
        document.getElementById(modal)?.classList.toggle('hidden');
    }
    return (
        <div className="space-y-2 flex flex-col items-center w-full relative">
            {/* Add Task Button */}
            <button
                title="Add new task"
                className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-700 transition"
            >
                <PlusIcon className="text-white text-3xl" />
            </button>

            {/* Avatar Button */}
            <button
                type="button"
                title={user?.fullName}
                onClick={() => toggleModal('userOptions')}
                style={{
                    backgroundImage: `url(${user?.avatar || "https://randomuser.me/api/portraits/men/1.jpg"})`,
                }}
                className="bg-black/20 bg-blend-darken text-white rounded-xl w-12 h-12 bg-cover relative hover:bg-black/30 transition"
            >
                <span className="bg-green-500 w-2.5 h-2.5 rounded-full absolute bottom-0 right-0"></span>
            </button>

            <UserMenu />
        </div>
    );
};

export default SidebarActions;
