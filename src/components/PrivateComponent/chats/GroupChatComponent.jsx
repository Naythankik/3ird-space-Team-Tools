import React, {useState} from "react";
import {AtSign, Plus} from "lucide-react";
import {formattedDate} from "../../../utils/helpers.js";

const GroupChatComponent = ({channel = [], messages = []}) => {
    const [isMembersListOpen, setIsMembersListOpen] = useState(false);

    const statusIndicator = (status) => {
        let statusColor = '';
        switch (status){
            case 'online':
                statusColor = 'bg-green-400';
                break
            case 'offline':
                statusColor = 'bg-zinc-400'
                break
            case 'away':
                statusColor = 'bg-yellow-400'
                break
            default:
                break
        }
        return statusColor;
    }
    return (
        <section className="flex-grow flex overflow-hidden">
            <div className="flex-grow flex bg-transparent">
                <div className="flex-grow flex flex-col">
                    <div className="flex-grow flex-col-reverse flex p-6 overflow-y-auto">
                        <div className="space-y-4 divide-y divide-gray-200">
                            {messages.map((msg, id) =>
                                <div key={id} className="flex items-start space-x-3 p-4 pb-0 hover:bg-gray-200 rounded-lg">
                                    <img src={msg.sender.avatar} alt={msg.sender.fullName} className="max-h-10 max-w-10 rounded-full object-cover flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="flex items-baseline space-x-2">
                                            <p className="font-bold text-zinc-900">{msg.sender.fullName}</p>
                                            <p className="text-xs text-gray-500">{formattedDate(msg.createdAt)}</p>
                                        </div>
                                        <p className="text-zinc-700">{msg.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-6 bg-gray-800">
                        <div className="bg-gray-700 rounded-lg flex items-center px-4">
                            <button className="text-gray-400 hover:text-white p-2">
                                <Plus size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder={`Message ${channel.channelType === 'private' ? '\u{1F512}' : '#'}${channel.name}`}
                                className="flex-grow bg-transparent text-white p-4 text-sm focus:outline-none"
                            />
                            <button className="text-gray-400 hover:text-white p-2">
                                <AtSign size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <aside className={`bg-gray-900 text-white w-64 flex-shrink-0 hidden md:flex flex-col transition-transform duration-300 ease-in-out ${isMembersListOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:relative absolute inset-y-0 right-0 z-10 border-l border-gray-800`}>
                <div className="h-16 flex items-center px-4 border-b border-gray-800">
                    <h3 className="font-bold text-white">Members - {channel.members?.length}</h3>
                </div>
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {channel.members?.map((member, id) => {
                        return (
                            <div key={id} className="flex items-center space-x-3">
                                <div className="relative">
                                    <img
                                        className="h-8 w-8 rounded-full object-cover"
                                        src={member.avatar}
                                        alt={member.fullName}
                                    />
                                    <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${statusIndicator(member.status)}`}></span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{member.fullName}</p>
                                    <p className="text-xs text-gray-400">{member?.username}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>
        </section>
    )
}

export default GroupChatComponent;
