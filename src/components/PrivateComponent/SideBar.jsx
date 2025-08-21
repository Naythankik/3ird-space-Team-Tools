import SidebarNav from "./sidebars/SidebarNav.jsx";
import SidebarActions from "./sidebars/SidebarActions.jsx";

const SideBar = ({toggleProfile}) => {
    return (
        <aside className="max-w-15 bg-white border-r border-gray-300 min-h-screen p-2 flex flex-col justify-between items-center">
            <SidebarNav />
            <SidebarActions toggleProfile={toggleProfile} />
        </aside>
    )
}

export default SideBar
