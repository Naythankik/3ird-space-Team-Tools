import React, { useState } from 'react';
import PageHeader from "./PageHeader.jsx";
import GroupChatComponent from "./chats/GroupChatComponent.jsx";

const messages = [
    { id: 1, user: 'Sarah Lee', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=SL', time: '10:30 AM', text: 'Hey team, just a reminder that the design review for Project Comet is scheduled for 2 PM today.' },
    { id: 2, user: 'Alex Hartman', avatar: 'https://placehold.co/100x100/7c3aed/ffffff?text=AH', time: '10:31 AM', text: 'Thanks for the reminder, Sarah! I\'ve added my latest mockups to the Figma file.' },
    { id: 3, user: 'David Chen', avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=DC', time: '10:32 AM', text: 'Great, I\'ll take a look before the meeting. Is the backend API documentation updated?' },
    { id: 4, user: 'Maria Garcia', avatar: 'https://placehold.co/100x100/10b981/ffffff?text=MG', time: '10:35 AM', text: 'Yes, I pushed the latest Swagger docs this morning. Everything should be up to date.' },
    { id: 5, user: 'Sarah Lee', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=SL', time: '10:36 AM', text: 'Perfect! See you all at 2.' },
];

const members = [
    { name: 'Alex Hartman', role: 'Lead Designer', status: 'online' },
    { name: 'Sarah Lee', role: 'Project Manager', status: 'online' },
    { name: 'David Chen', role: 'Backend Engineer', status: 'offline' },
    { name: 'Maria Garcia', role: 'Frontend Developer', status: 'online' },
    { name: 'John Doe', role: 'QA Tester', status: 'online' },
    { name: 'Jane Smith', role: 'UX Researcher', status: 'offline' },
];

export default function DashboardComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex-1">
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-10 lg:hidden"></div>}

            <div className="h-full flex flex-col">
                <PageHeader title="engineering" onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <GroupChatComponent members={members} messages={messages} />
            </div>
        </div>
    );
}
