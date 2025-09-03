import {useLocation} from "react-router-dom";
import {PlusIcon} from "lucide-react";
import useWorkspaceStore from "../../stores/workspaceStore.js";

const SideWorkspaceBar = () => {
    const { pathname } = useLocation();
    const { workspaces } = useWorkspaceStore()

    return (
        <aside className="max-w-20 bg-white border-r border-gray-300 min-h-screen p-4 flex flex-col gap-3 items-center">
                <nav className="space-y-3">
                    {workspaces.map(({slug, name, coverImage}, idx) => (
                        <a
                            key={idx}
                            href={`/${slug}/dashboard`}
                            title={name}
                            className={`flex flex-col items-center gap-1 text-gray-700 cursor-pointer transition border-2 ${pathname.includes(slug) ? 'border-indigo-500': 'border-gray-300'} rounded-md hover:scale-110`}
                        >
                            <img src={coverImage} alt={name} className="w-8 h-8 rounded-full" />
                        </a>
                    ))}
                </nav>
            <button title="Add workspace" className="flex items-center justify-center w-7 h-7 hover:bg-indigo-500 text-indigo-500 rounded-md hover:text-white transition">
                <PlusIcon size={24} />
            </button>
        </aside>
    )
}

export default SideWorkspaceBar
