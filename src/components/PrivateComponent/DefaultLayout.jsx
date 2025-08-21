import Sidebar from "./SideBar.jsx";
import { Outlet} from "react-router-dom";
import {useState} from "react";
import ProfileArticle from "./sidebars/profile/ProfileArticle.jsx";
import {useAuth} from "../../context/AuthContext.jsx";
import ProfileModal from "./sidebars/profile/ProfileModal.jsx";
import RemovePictureModal from "./sidebars/profile/RemovePictureModal.jsx";
import SideWorkspaceBar from "./SideWorkspaceBar.jsx";

const DefaultLayout = () => {
    const { user } = useAuth();

    const [showProfileArticle, setShowProfileArticle] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [removePictureModal, setRemovePictureModal] = useState(false);

    return (
        <div className="flex relative">
            <SideWorkspaceBar />
            <Sidebar toggleProfile={setShowProfileArticle} />
            <main className="flex-1 flex bg-gray-50 min-h-screen divide-x divide-gray-400">
                <div
                    className={`flex-1 flex flex-col ${showProfileArticle ? "hidden md:flex" : "flex"}`}
                >
                    <Outlet />
                </div>
                {showProfileArticle && (<ProfileArticle closeProfileArticle={setShowProfileArticle} profileModal={setShowProfileModal} />)}
            </main>
            {showProfileModal && <ProfileModal user={user} closeProfileModal={setShowProfileModal} removePictureModal={setRemovePictureModal} /> }
            {removePictureModal &&
                <RemovePictureModal user={user} showProfileModal={setShowProfileModal} showPictureModal={setRemovePictureModal} />
            }
        </div>
    )
}

export default DefaultLayout;
