import React, { useState} from 'react';
import PageHeader from "./PageHeader.jsx";
import GroupChatComponent from "./chats/GroupChatComponent.jsx";

export default function DashboardComponent({props}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex-1">
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-10 lg:hidden"></div>}

            <div className="h-full flex flex-col">
                <PageHeader title={props?.channel?.name} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <GroupChatComponent channel={props?.channel} messages={props?.chats} />
            </div>
        </div>
    );
}
