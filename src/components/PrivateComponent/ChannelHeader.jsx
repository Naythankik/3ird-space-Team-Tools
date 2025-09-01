import {Bell, Hash, Lock, Menu, Search} from "lucide-react";
import React from "react";

const ChannelHeader = ({info, onMenuClick}) => {
    return (
        <header className="bg-indigo-600 h-16 flex items-center justify-between px-6 py-3 border-b border-gray-700 flex-shrink-0">
            <div className="flex items-center">
                <button onClick={onMenuClick} className="text-gray-400 mr-4 lg:hidden">
                    <Menu size={24} />
                </button>
                <div>
                    <div className="flex items-center space-x text-slate-100">
                        {info.channelType === 'public'
                            ? <Hash size={24} />
                            : <Lock size={24} />}
                        <h2 className="text-xl font-bold">{info.name}</h2>
                    </div>
                    <p aria-label="channel description" title={info.description} className="line-clamp-1 text-slate-400">{info.description}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search..." className="bg-gray-700 text-white rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <button className="p-2 rounded-full hover:bg-gray-700 text-gray-400">
                    <Bell size={20} />
                </button>
            </div>
        </header>
    )
}

export default ChannelHeader;
