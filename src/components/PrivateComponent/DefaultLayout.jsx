import Sidebar from "./SideBar.jsx";
import {Outlet} from "react-router-dom";

const defaultLayout = () => {
    return (
        <div className="flex relative">
            <Sidebar />
            <main className="flex-1 p-8 bg-gray-50 min-h-screen">
                <Outlet />
            </main>
        </div>
    )
}

export default defaultLayout;
