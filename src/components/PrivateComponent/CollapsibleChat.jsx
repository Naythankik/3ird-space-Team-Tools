import {ChevronDown, ChevronRight, Lock, Hash, Plus} from "lucide-react";
import React, {useState} from "react";

const ChatList = ({ title, chats, activeChat, openChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const statusIndicator = (status) => {
        switch (status) {
            case 'online':
                return 'bg-emerald-500'; // slightly richer green
            case 'offline':
                return 'bg-zinc-400';    // neutral modern gray
            case 'away':
                return 'bg-amber-400';   // nicer warm yellow/orange
            default:
                return 'bg-slate-300';
        }
    };

    const renderChannel = (chat) => (
        <button
            type="button"
            key={chat.id}
            onClick={() => openChat(chat.id, title, chat.slug)}
            className={`flex items-center w-full justify-between px-3 py-1.5 rounded-md text-sm transition-colors duration-200 
                ${activeChat === chat.id ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white'}`}
        >
            <div className="flex items-center space-x-2">
                {chat.channelType === "private" ? <Lock size={16}/> : <Hash size={16}/>}
                <span>{chat.slug}</span>
            </div>
            {chat.isArchived && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {chat.isArchived}
                </span>
            )}
        </button>
    );

    const renderDm = (chat) => (
        <button
            type="button"
            key={chat.id}
            onClick={() => openChat(chat.id, "dms")}
            className={`flex items-center w-full justify-between cursor-pointer px-3 py-1 rounded-md text-sm transition-colors duration-200 
            ${activeChat === chat.id ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white'}`}
        >
            <div className="flex items-center space-x-2">
                <div className="relative">
                    <img
                        className="h-5 w-5 rounded-md object-cover"
                        src={chat.participants.avatar || "/default-avatar.png"}
                        alt={chat.participants.fullName}
                    />
                    {chat.participants.status && (
                        <span
                            className={`absolute -bottom-0.5 -right-0.5 block h-1.5 w-1.5 rounded-full ${statusIndicator(chat.participants.status)}`}
                        />
                    )}
                </div>
                <p>{chat.participants.fullName}</p>
            </div>

            {chat.unread > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {chat.unread}
            </span>
            )}
        </button>
    );

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center w-full text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 focus:outline-none"
            >
                {isOpen ? <ChevronDown size={16} className="mr-1"/> : <ChevronRight size={16} className="mr-1"/>}
                {title}
            </button>

            {isOpen && (
                <div className="space-y-1">
                    {title === "Channels" ? chats?.map(renderChannel) : chats?.map(renderDm)}
                    <button className="flex items-center w-full px-3 py-1.5 text-sm text-gray-400 hover:text-white">
                        <Plus size={16} className="mr-2"/>
                        {`Add ${title === 'Channels' ? 'channel' : 'teammate'}`}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatList;
