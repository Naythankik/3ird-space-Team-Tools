import {FaEllipsisVertical, FaX} from "react-icons/fa6";
import {FaClock, FaEnvelope, FaPhone, FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useUserStore from "../../../../stores/userStore.ts";

const ProfileArticle = ({closeProfileArticle, profileModal}) => {
    const { user } = useUserStore();
    const [localTime, setLocalTime] = useState(getFormattedTime());

    function getFormattedTime() {
        const now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setLocalTime(getFormattedTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="profile" className="w-full md:w-1/4 text-black/60 divide-y transform transition-transform duration-300 ease-in-out md:translate-x-0">
            <div className="p-4 space-y-6">
                <div className="flex justify-between items-center text-xl">
                    <h2 className="font-semibold">Profile</h2>
                    <button type="button" className="text-sm text-gray-500 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => closeProfileArticle(prev => !prev)}>
                        <FaX size={20} />
                    </button>
                </div>
                <div className="flex justify-center">
                    <img
                        src={user?.avatar}
                        alt="user"
                        className="h-44 w-44 rounded-md"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{user?.fullName}</h3>
                        <button
                            onClick={() => profileModal(true)}
                            className="hover:underline text-indigo-500 text-sm font-semibold cursor-pointer">Edit</button>
                    </div>
                    <button
                        onClick={() => profileModal(true)}
                        className="text-indigo-500 text-sm flex gap-1 items-center cursor-pointer">
                        <FaPlus />
                        <span>Add name pronunciation</span>
                    </button>
                    <div className="flex gap-2 items-center text-sm text-black/60 ml-1">
                        <p className="h-2 w-2 bg-green-300 rounded-full"></p>
                        <span>Active</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm text-black/60">
                        <FaClock />
                        <span>{localTime} local time</span>
                    </div>
                    <div className="grid grid-cols-[5fr_5fr_1fr] gap-2">
                        <button className="text-indigo-500 font-medium flex border border-gray-300 py-1 cursor-pointer rounded-md justify-center items-center">Set a status</button>
                        <button className="text-indigo-500 font-medium flex border border-gray-300 py-1 cursor-pointer rounded-md justify-center items-center">View as</button>
                        <button className="text-indigo-500 font-medium flex border border-gray-300 py-1 cursor-pointer rounded-md justify-center items-center"><FaEllipsisVertical /></button>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold">Contact Information</h3>
                        <button className="hover:underline text-indigo-500 text-sm font-semibold">Edit</button>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaEnvelope size={25} />
                        <div>
                            <p className="text-sm">Email Address</p>
                            <Link target="_blank"
                                  to={`mailto:${user?.email}`}
                                  className="text-indigo-500 hover:underline text-sm">
                                {user?.email}
                            </Link>
                        </div>
                    </div>
                    {user.telephone ?
                        <div className="flex gap-3 items-center">
                            <FaPhone size={25} />
                            <div>
                                <p className="text-sm">Telephone</p>
                                <Link target="_blank"
                                      to={`tel:${user.telephone}`}
                                      className="text-indigo-500 hover:underline text-sm">
                                    {user.telephone}
                                </Link>
                            </div>
                        </div> :
                        <button className="text-indigo-500 text-sm flex gap-1 items-center">
                            <FaPlus/>
                            <span>Add Phone</span>
                        </button>
                    }
                </div>
            </div>

            <div className="p-4 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold">About me</h3>
                        <button className="hover:underline text-indigo-500 text-sm font-semibold">Edit</button>
                    </div>
                    <button className="text-indigo-500 text-sm flex gap-1 items-center">
                        <FaPlus />
                        <span>Add Start Date</span>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default ProfileArticle;
