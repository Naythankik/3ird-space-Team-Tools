import { FaHashtag, FaRegCommentDots } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiHeadphoneLine } from "react-icons/ri";

const DashboardAside = () => {
    const directMessages = [
        { name: "abdulmalik", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "Bolaji Ajani", avatar: "https://i.pravatar.cc/150?img=2" },
        { name: "Habib Wahab", avatar: "https://i.pravatar.cc/150?img=3" },
        { name: "Nathaniel Abolarin (you)", avatar: "https://i.pravatar.cc/150?img=4" },
    ];

    return (
        <aside className="w-64 bg-indigo-600 text-white flex flex-col">
            {/* Upgrade Button */}
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

            {/* Channels */}
            <div className="mt-4 px-3 text-xs font-bold uppercase text-gray-400">Channels</div>
            <div className="px-3">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-indigo-400 p-2 rounded">
                    <FaHashtag /> dont-post-here
                </div>
            </div>

            {/* Direct Messages */}
            <div className="mt-4 px-3 text-xs font-bold uppercase text-gray-400">Direct messages</div>
            <div className="flex-1 overflow-y-auto px-3">
                {directMessages.map((dm, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 cursor-pointer hover:bg-indigo-400 p-2 rounded"
                    >
                        <img src={dm.avatar} alt={dm.name} className="w-6 h-6 rounded-full" />
                        <span className="truncate">{dm.name}</span>
                    </div>
                ))}
            </div>

        </aside>
    );
};

export default DashboardAside;
