import { FaX } from "react-icons/fa6";
import {FaChevronLeft} from "react-icons/fa";

const RemovePictureModal = ({ user, showProfileModal, showPictureModal }) => {
    const goBack = () => {
        showProfileModal(true);
        showPictureModal(false);
    };

    const closeModal = () => {
        showProfileModal(false);
        showPictureModal(false);
    };

    return (
        <section
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            className="absolute top-0 right-0 w-full h-screen bg-black/60 flex items-center"
        >
            <div className="max-w-xl bg-indigo-200 mx-auto h-fit p-5 rounded-lg space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center text-xl">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={goBack}
                            type="button"
                            className="cursor-pointer hover:bg-gray-100 p-1 rounded-md"
                            aria-label="Go back"
                        >
                            <FaChevronLeft size={18} />
                        </button>

                        <h2 className="font-semibold">Remove profile photo</h2>
                    </div>
                    <button
                        onClick={closeModal}
                        type="button"
                        aria-label="Close modal"
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-md"
                    >
                        <FaX size={15} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={user?.avatar}
                        alt={user?.fullName ? `${user.fullName}'s profile` : "Default profile avatar"}
                        className="block w-2/5 rounded-xl"
                    />
                    <p className="w-2/3 text-center text-gray-500 text-sm leading-4">
                        Are you sure you want to remove your photo? We’ll replace it with a default 3ird Space avatar.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex gap-3 justify-end mt-6">
                    <button
                        onClick={goBack}
                        type="button"
                        className="px-3 py-1 font-semibold text-gray-600 border-2 border-indigo-600 rounded-md hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-3 py-1 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md"
                    >
                        Yes, Remove Photo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RemovePictureModal;
