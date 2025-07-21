import { Link } from "react-router-dom";
import StatusDotComponent from "./StatusDotComponent.jsx";
import ProgressBar from "./ProgressBar.jsx";

const HeroSection = () => {
    const tasks = [
        "Create social media assets",
        "Draft email newsletter",
        "Schedule posts for next week",
        "Review campaign analytics",
    ];

    const teams = [
        {
            initials : 'jd',
            color: 'bg-purple-400'
        },
        {
            initials: 'am',
            color: 'bg-pink-400'
        },
        {
            initials: 'kl',
            color: 'bg-green-400'
        }
    ]

    return (
        <section className="py-14 md:py-28 bg-indigo-600">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-[95%] lg:w-[75%] mx-auto">
            {/* Left Section */}
            <div className="grid gap-4 text-white">
                <h2 className="font-bold text-3xl md:text-5xl">
                    Streamline your team's workflow
                </h2>
                <p className="text-lg md:text-2xl">
                    3irdSpace helps your team organize projects, manage tasks, and meet deadlines, all in one collaborative workspace.
                </p>
                <div className="flex gap-5">
                    <Link className="rounded-md bg-white text-indigo-500 w-full md:w-[35%] px-2 flex items-center justify-center py-3 font-medium text-lg" to="#">
                        Get started
                    </Link>
                    <Link className="rounded-md bg-indigo-700 text-white w-full md:w-[35%] px-2 flex items-center justify-center py-3 font-medium text-lg" to="#">
                        Watch demo
                    </Link>
                </div>
            </div>

            {/* Right Section – Mock UI */}
            <div className="hidden md:block rounded-md bg-white shadow-lg overflow-hidden">
                <StatusDotComponent />
                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-xl">Marketing Campaign Q3</h3>
                        <p className="rounded-3xl bg-green-200 p-1 text-sm text-green-950 px-2">On Track</p>
                    </div>

                    <div className="grid gap-2">
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

                    <ProgressBar title="Progress" value="50%" />

                    <div className="flex items-center gap-4">
                        <div className="flex relative">
                            { teams.map(({ initials, color }, idx) => (
                                <p key={idx} className={`uppercase ${color} w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold text-sm`}>{initials}</p>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm">3 team members</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
