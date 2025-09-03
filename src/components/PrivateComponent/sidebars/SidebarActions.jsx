import {PlusIcon} from "lucide-react";
import UserMenu from "./UserMenu";
import TaskMenu from "./TaskMenu.jsx";
import {useEffect, useState} from "react";
import useUserStore from "../../../stores/userStore.js";

const SidebarActions = ({toggleProfile}) => {
    const { user } = useUserStore();
    const modals = ["userOptions", "taskOptions"];
    const [taskIcon, setTaskIcon] = useState(false)

    const toggleModal = (modal) => {
        modals.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            if (id === modal) {
                el.classList.toggle("hidden");
            } else {
                el.classList.add("hidden");
            }
        });
    };

    useEffect(() => {
        const closeAllModals = () => {
            modals.forEach((id) => {
                const el = document.getElementById(id);
                el?.classList.add("hidden");
                if(el.classList.contains('hidden') && id === 'taskOptions' && taskIcon === true){
                    setTaskIcon(false)
                }
            });

        };

        const handleClickOutside = (e) => {
            if (
                !e.target.closest("#userOptions") &&
                !e.target.closest("#taskOptions") &&
                !e.target.closest("#taskButton") &&
                !e.target.closest("#userButton")
            ) {
                closeAllModals();
            }
        };

        window.addEventListener("keydown", closeAllModals);
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("keydown", closeAllModals);
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="space-y-2 flex flex-col items-center w-full relative">
            <button
                id="taskButton"
                title="Add new task"
                onClick={() => {
                    toggleModal("taskOptions")
                    setTaskIcon(!taskIcon)
                }}
                className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-700 focus:outline-none"
            >
                <PlusIcon
                    className={`w-5 h-5 text-white transform transition-transform duration-300 ease-in-out ${
                        taskIcon ? "rotate-45" : "rotate-0"
                    }`}
                />
            </button>


            <button
                id="userButton"
                type="button"
                title={user?.fullName}
                onClick={() => toggleModal("userOptions")}
                style={{
                    backgroundImage: `url(${user.avatar || "https://randomuser.me/api/portraits/men/1.jpg"})`,
                }}
                className="bg-black/20 bg-blend-darken text-white rounded-xl w-12 h-12 bg-cover relative hover:bg-black/30 transition focus:outline-none"
            >
                <span className="bg-green-500 w-2.5 h-2.5 rounded-full absolute bottom-0 right-0"></span>
            </button>

            <TaskMenu />
            <UserMenu toggleProfile={toggleProfile} />
        </div>
    );
};

export default SidebarActions;
