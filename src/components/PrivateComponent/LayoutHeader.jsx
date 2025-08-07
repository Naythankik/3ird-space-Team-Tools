import {BellIcon} from "lucide-react";
import ProfilePicture from "./ProfilePicture.jsx";

const LayoutHeader = ({title, hasSearchBar}) => {
    return (
        <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold hidden md:inline-flex capitalize">{title}</h2>
            <div className="flex items-center gap-4">
                {hasSearchBar && <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-4 py-2"
                />}
                <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                <ProfilePicture  />
            </div>
        </header>
    )
}

export default LayoutHeader;
