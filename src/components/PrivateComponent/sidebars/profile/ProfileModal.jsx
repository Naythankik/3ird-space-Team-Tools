import {FaX} from "react-icons/fa6";
import {useState} from "react";

const ProfileModal = ({user, closeProfileModal, removePictureModal}) => {
    const [profilePhoto, setProfilePhoto] = useState(user?.avatar);

    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        username: user?.username || user?.fullName || "",
        title: user?.title || ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <section
            onClick={(e) => e.target === e.currentTarget && closeProfileModal(false)}
            className="absolute top-0 right-0 w-full h-screen bg-black/60 flex items-center"
            role="dialog"
            aria-modal="true"
        >
            <div className="max-w-xl bg-indigo-200 mx-auto h-fit p-5 rounded-lg space-y-4">
                <div className="flex justify-between items-center text-xl">
                    <h2 className="font-semibold">Edit your profile</h2>
                    <button
                        onClick={() => closeProfileModal(false)}
                        type="button"
                        className="text-sm text-gray-500 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                        <FaX size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-[4fr_2fr] gap-4">
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label htmlFor="fullName" className="block text-base font-medium text-gray-700">Full name</label>
                            <input
                                type="text"
                                autoFocus
                                id="fullName"
                                name="fullName"
                                className="mt-1 block w-full px-4 py-2 border-2 border-indigo-600 rounded-xl focus:outline-none"
                                value={formData.fullName}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="space-y-1">
                            <label htmlFor="username" className="block text-base font-medium text-gray-700">Display name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 block w-full px-4 py-2 border-2 border-indigo-600 rounded-xl focus:outline-none"
                                value={formData.username }
                                onChange={handleChange}
                            />
                            <span className="text-xs leading-4 line-clamp-2">
                                    This could be your first name, or a nickname — however you’d like people to refer to you in 3ird Space
                            </span>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="title" className="block text-base font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="mt-1 block w-full px-4 py-2 border-2 border-indigo-600 rounded-xl focus:outline-none"
                                value={formData?.title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-base font-medium text-gray-700">Profile photo</label>
                        <img
                            src={profilePhoto}
                            alt="user"
                            className="block w-full rounded-xl"
                        />
                        <input
                            type="file"
                            id="photoUpload"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => setProfilePhoto(URL.createObjectURL(e.target.files[0]))}
                        />
                        <button
                            type="button"
                            onClick={() => document.getElementById("photoUpload").click()}
                            className="block w-full py-1 border-2 border-indigo-600 rounded-xl cursor-pointer"
                        >
                            Upload Photo
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                removePictureModal(true)
                                closeProfileModal(false)
                            }}
                            className="text-indigo-600 hover:underline w-full flex justify-center"
                        >
                            Remove Photo
                        </button>
                    </div>
                </div>
                <div className="flex gap-3 justify-end mt-6">
                    <button
                        onClick={() => closeProfileModal(false)}
                        type="button" className="block w-fit px-3 font-semibold text-gray-600 py-1 border-2 border-indigo-600 rounded-xl cursor-pointer">Cancel</button>
                    <button type="button" className="block w-fit px-3 font-semibold text-gray-600 py-1 bg-green-300 hover:opacity-85 rounded-xl cursor-pointer">Save Changes</button>
                </div>
            </div>
        </section>
    )
}

export default ProfileModal;
