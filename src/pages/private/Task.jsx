import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const dummyTasks = [
    {
        id: 1,
        title: "Finish API integration",
        description: "Connect backend endpoints to the dashboard UI",
        status: "In Progress",
    },
    {
        id: 2,
        title: "Update profile picture logic",
        description: "Fix fallback image for users without avatars",
        status: "Completed",
    },
    {
        id: 3,
        title: "Create logout functionality",
        description: "Implement logout in auth context",
        status: "Pending",
    },
];

const statusColor = {
    "Completed": "bg-green-100 text-green-600",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "Pending": "bg-gray-200 text-gray-600",
};

const TasksPage = () => {
    const [tasks] = useState(dummyTasks);

    return (
        <>
            <div className="flex flex-row-reverse md:flex-col justify-between md:mb-6 items-stretch">

                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 w-fit rounded hover:bg-indigo-700 transition">
                    <FaPlus /> Add Task
                </button>
            </div>

            <div className="grid gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="bg-white p-5 rounded-lg shadow border border-gray-200"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">{task.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                            </div>
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[task.status]}`}
                            >
                                {task.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TasksPage;
