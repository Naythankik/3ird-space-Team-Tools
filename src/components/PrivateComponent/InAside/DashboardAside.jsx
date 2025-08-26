import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiHeadphoneLine } from "react-icons/ri";
import React, {useState} from "react";
import CollapsibleChannel from "../CollapsibleChannel.jsx";
import CollapsibleDMs from "../CollapsibleDMs.jsx";

const DashboardAside = ({channels, directMessages, readChats, activeChat}) => {
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
                        <CollapsibleChannel title="Channels" children={channels} readChannel={readChats} activeChannel={activeChat} />
                        <CollapsibleDMs children={directMessages} readDm={readChats} activeDm={activeChat} />
                    </nav>
                </div>
            </aside>


        </aside>
    );
};

export default DashboardAside;
