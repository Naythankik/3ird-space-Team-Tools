import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiHeadphoneLine } from "react-icons/ri";
import React, {useState} from "react";
import CollapsibleChannel from "../CollapsibleChannel.jsx";

const DashboardAside = () => {
    const directMessages = [
        { id: 1, name: 'Sarah Lee', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=SL', status: 'online' },
        { id: 2, name: 'David Chen', avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=DC', status: 'offline' },
        { id: 3, name: 'Maria Garcia', avatar: 'https://placehold.co/100x100/10b981/ffffff?text=MG', status: 'away' },
    ];

    const channels = [
        { id: 1, name: 'general', unread: 2 },
        { id: 2, name: 'design-team', unread: 0 },
        { id: 3, name: 'engineering', unread: 5 },
        { id: 4, name: 'project-comet', unread: 0 },
        { id: 5, name: 'marketing', unread: 1 },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <aside className="w-64 bg-indigo-600 text-white flex flex-col">
            <div className="p-3">
                <button className="w-full bg-gray-500 hover:bg-gray-400 text-sm font-semibold px-3 py-2 rounded-md">
                    🚀 Upgrade Plan
                </button>
            </div>

            {/* Menu */}
            <nav className="px-3 space-y-2 text-sm">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-indigo-400 p-2 rounded">
                    <FaRegCommentDots /> Threads
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-indigo-400 p-2 rounded">
                    <RiHeadphoneLine /> Huddles
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-indigo-400 p-2 rounded">
                    <HiOutlineMail /> Drafts & sent
                </div>
            </nav>

            <aside
                className={`text-white w-64 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative absolute inset-y-0 left-0 z-20`}
            >
                <div className="flex-grow p-4 overflow-y-auto">
                    <nav className="space-y-6">
                        <CollapsibleChannel title="Channels" children={channels} />
                        <CollapsibleChannel title="Direct Messages" children={directMessages} />
                    </nav>
                </div>
            </aside>


        </aside>
    );
};

export default DashboardAside;
