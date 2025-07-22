import {
    CalendarIcon,
    LineChartIcon,
    BellIcon,
    SettingsIcon,
    Bookmark, UsersIcon
} from "lucide-react";

const features = [
    {
        title: "Task management",
        description: "Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies to keep projects moving forward.",
        icon: Bookmark
    },
    {
        title: "Project Timeline",
        description: "Visualize project schedules with interactive Gantt charts. Easily adjust timelines and track progress in real-time.",
        icon: CalendarIcon
    },
    {
        title: 'Team Collaboration',
        description: 'Work together seamlessly with real-time updates, comments, and file sharing. Keep everyone aligned and informed.',
        icon: UsersIcon
    },
    {
        title: 'Progress Tracking',
        description: 'Monitor project progress with customizable dashboards and reports. Identify bottlenecks and optimize workflows.',
        icon: LineChartIcon
    },
    {
        title: 'Notifications & Reminders',
        description: 'Stay on top of deadlines with customizable alerts. Get notified about task assignments, updates, and approaching due dates.',
        icon: BellIcon
    },
    {
        title: 'Customizable Workflows',
        description: 'Create custom workflows that match your team\'s processes. Adapt the tool to your needs, not the other way around.',
        icon: SettingsIcon
    }
];

const FeatureSection = () => {
    return (
        <section id="features" className="py-14 md:py-28 bg-white">
            <div className="flex flex-col items-center gap-4 w-[95%] lg:w-[75%] mx-auto">
                <h2 className="font-semibold text-4xl text-center">Everything your team needs to succeed</h2>
                <p className="text-gray-500 md:w-3/5 text-center text-xl">Powerful features designed to keep your team organized, focused, and productive.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(({ title, description, icon: Icon }, idx) => (
                        <div
                            key={idx}
                            className="flex cursor-auto flex-col gap-3 border border-gray-300 rounded-lg p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gray-300">
                            <div className="bg-indigo-100 w-fit p-2 rounded-lg">
                                <Icon className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="font-medium text-lg">{title}</h3>
                            <p className="text-gray-500 leading-5 text-base">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection;
