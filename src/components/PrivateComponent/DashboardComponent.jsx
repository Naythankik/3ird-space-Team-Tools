import React, { useState} from 'react';
import ChannelHeader from "./ChannelHeader.jsx";
import ChatComponent from "./chats/ChatComponent.jsx";
import ChatHeader from "./ChatHeader.jsx";

export default function DashboardComponent({chats, title}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex-1">
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-10 lg:hidden"></div>}

            <div className="h-full flex flex-col">
                {chats.channel
                    ? <ChannelHeader info={chats.channel} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    : <ChatHeader info={chats.chats} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                }

                <ChatComponent props={chats} title={title}/>
            </div>
        </div>
    );
}
