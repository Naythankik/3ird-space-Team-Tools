import { Link } from "react-router-dom";
import { FaFile, FaHashtag, FaHeadphones, FaTextHeight, FaUserPlus } from "react-icons/fa";
import { FaPadlet } from "react-icons/fa6";

const TaskMenu = () => {
    const TASK_OPTIONS = [
        {
            title: "Message",
            desc: "Start a conversation in a DM or channel",
            icon: { type: FaTextHeight, color: "bg-purple-500 text-white" }
        },
        {
            title: "Channel",
            desc: "Start a group conversation by topic",
            icon: { type: FaHashtag, color: "bg-gray-500 text-white" }
        },
        {
            title: "Huddle",
            desc: "Start a video or audio chat",
            icon: { type: FaHeadphones, color: "bg-green-500 text-white" }
        },
        {
            title: "Canvas",
            desc: "Create and share content",
            icon: { type: FaFile, color: "bg-blue-500 text-white" }
        },
        {
            title: "List",
            desc: "Track and manage projects",
            icon: { type: FaPadlet, color: "bg-yellow-500 text-white" }
        }
    ];

    return (
        <article
            id="taskOptions"
            className="hidden bg-blend-overlay rounded-lg border border-gray-300 bg-indigo-300 text-black/60 w-[22rem] absolute bottom-2 left-[4.125rem] shadow-lg pt-3"
        >
            <h2 className="font-medium text-xl px-3">Create</h2>
            <div className="border-b border-gray-300">
                {TASK_OPTIONS.map(({ title, desc, icon: { type: Icon, color } }, idx) => (
                    <Link
                        to="#"
                        key={idx}
                        className="group flex items-center p-3 hover:bg-indigo-200 hover:text-gray-800 transition-colors"
                    >
                        <div className="flex space-x-3 items-center">
                            <div
                                className={`w-9 h-9 flex justify-center items-center rounded-full ${color} transition group-hover:grayscale-25`}
                            >
                                <Icon size="19" />
                            </div>
                            <div className="flex-1">
                                <p className="text-base font-semibold">{title}</p>
                                <p className="text-xs font-normal">{desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button
                type="button"
                className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-indigo-200 hover:text-gray-800 transition-colors text-left rounded-b-lg"
            >
                <FaUserPlus size="24" />
                <span className="text-base font-semibold">Invite people</span>
            </button>
        </article>
    );
};

export default TaskMenu;
