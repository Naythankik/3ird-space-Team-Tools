import React, { useState} from 'react';
import PageHeader from "./PageHeader.jsx";
import GroupChatComponent from "./chats/GroupChatComponent.jsx";

export default function DashboardComponent({channelOrChat, messages}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex-1">
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-10 lg:hidden"></div>}

            <div className="h-full flex flex-col">
                {/*<PageHeader title={channel?.name} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />*/}
                <GroupChatComponent channelOrChat={channelOrChat} messages={messages} />
            </div>
        </div>
    );
}
