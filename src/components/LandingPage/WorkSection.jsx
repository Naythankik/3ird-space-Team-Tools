import StatusDotComponent from "./StatusDotComponent.jsx";
import ProgressBar from "./ProgressBar.jsx";
import { PlusIcon } from "lucide-react";

const WorkSection = () => {
    const processes = [
        {
            title: 'Create your workspace',
            description: 'Sign up and set up your team workspace in seconds. Customize it to match your team\'s needs and branding.'
        },
        {
            title: 'Invite your team',
            description: 'Add team members with a simple invite. Assign roles and permissions based on their responsibilities.'
        },
        {
            title: 'Create projects and tasks',
            description: 'Set up your projects, break them down into manageable tasks, and assign them to team members.'
        },
        {
            title: 'Track progress and collaborate',
            description: 'Monitor progress in real-time, communicate within tasks, and celebrate completed milestones together.'
        }
    ]

    const tasks = [
        "Sitemap creation",
        "Wireframes",
        "UI Design",
        "Frontend development",
    ];

    const teams = [
        {
            initials : 'jl',
            name: 'Jamie Lee',
            description: 'added a new task: Content migration plan',
            role: 'UX Designer',
            date:'2 hours ago',
            color: 'bg-pink-400'
        },
        {
            initials: 'am',
            name: 'Alex Morgan',
            role: 'Project Manager',
            description: 'completed Wireframes',
            date: 'Yesterday at 4:23 PM',
            color: 'bg-indigo-400'
        },
        {
            initials: 'kw',
            name: 'Kai Wong',
            role: 'UI Designer',
            color: 'bg-green-400'
        },
        {
            initials: 'rt',
            name: 'Robin Taylor',
            role: 'Developer',
            color: 'bg-yellow-400'
        }
    ]

    return (
        <section id="how-it-works" className="py-14 md:py-28 bg-gray-200">
            <div className="flex flex-col items-center text-center gap-4 w-[95%] lg:w-[75%] mx-auto">
                <h2 className="font-semibold text-4xl">How 3irdSpace works</h2>
                <p className="text-gray-500 w-full md:w-3/5 text-center text-xl">Get your team up and running in minutes with our intuitive platform.</p>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                    <div className="grid grid-cols-1 gap-8">
                        {processes.map(({ title, description }, idx) => (
                            <div key={idx} className="flex gap-3 p-5 text-left">
                                <div className="bg-indigo-500 h-10 md:h-12 w-20 flex items-center justify-center rounded-lg">
                                    <p className="text-white text-base md:text-lg font-bold">{ idx + 1 }</p>
                                </div>
                                <div className="grid gap-3">
                                    <h3 className="font-medium text-lg">{title}</h3>
                                    <p className="text-gray-500 leading-5 text-base">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*------------------ Top right section ----------------*/}
                    <div className="block rounded-md bg-white shadow-lg overflow-hidden">
                        <StatusDotComponent />
                        <div className="p-4 text-left">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-medium text-xl">Website Redesign</h3>
                                <div className="flex gap-2 items-center">
                                    <p className="rounded-3xl bg-yellow-200 text-nowrap p-1 text-sm text-yellow-950 px-2">In Progress</p>
                                    <p className="text-sm text-gray-500">Due in 14 days</p>
                                </div>
                            </div>

                            <ProgressBar title='Overall Progress' value='65%' />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex flex-col gap-2 bg-gray-100 p-2 rounded-md">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">Tasks</p>
                                        <div className="flex text-indigo-600 font-medium items-center">
                                            <PlusIcon />
                                            <span className="text-xs">Add Task</span>
                                        </div>
                                    </div>
                                    {tasks.map((task, idx) => (
                                        <div key={idx} className="flex gap-2 items-center text-gray-600">
                                            <input
                                                type="checkbox"
                                                id={`task-${idx}`}
                                                name={`task-${idx}`}
                                                defaultChecked={idx < 2}
                                            />
                                            <label
                                                htmlFor={`task-${idx}`}
                                                className={`${idx < 2 ? "line-through" : ""}`}
                                            >
                                                {task}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-2 bg-gray-100 p-2 rounded-md">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">Team</p>
                                        <div className="flex text-indigo-600 font-medium items-center">
                                            <PlusIcon />
                                            <span className="text-xs">Add Member</span>
                                        </div>
                                    </div>
                                    { teams.map(({ initials, name, role, color }, idx) => (
                                        <div className="flex gap-4 items-center">
                                            <p key={idx} className={`uppercase ${color} w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold text-sm`}>{initials}</p>
                                            <div className="grid gap-1">
                                                <p>{name}</p>
                                                <p className="font-normal text-sm text-gray-600">{role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t mt-5 border-gray-300">
                                <p>Recent Activity</p>
                                <div className="flex flex-col mt-3">
                                    { teams.map(({ initials, name, description, color, date }, idx) => (
                                        <div className={`${idx < 2 ? 'flex' : 'hidden'} gap-4 items-center`}>
                                            <p key={idx} className={`uppercase ${color} w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold text-sm`}>{initials}</p>
                                            <div className="grid gap-1">
                                                <p>
                                                    <span className="font-medium">{name} </span>
                                                    <span className="font-normal">{description}</span>
                                                </p>
                                                <p className="font-normal text-sm text-gray-600">{date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WorkSection;
