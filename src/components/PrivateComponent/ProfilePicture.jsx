import { useAuth } from "../../context/AuthContext.jsx";

const ProfilePicture = () => {
    const { user } = useAuth();

    return (
        <div className="flex items-center gap-2">
            <img
                src={'https://randomuser.me/api/portraits/men/75.jpg' || user?.avatar}
                alt={user?.fullName || "User Avatar"}
                className="w-10 h-10 border-0 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
                {user?.fullName || "User"}
            </span>
        </div>
    );
};

export default ProfilePicture;
