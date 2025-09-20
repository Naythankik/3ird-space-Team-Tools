import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { PiHandWavingFill} from "react-icons/pi";
import {ChevronRight} from "lucide-react";
import DummyImage from "../../assets/dummy.png";
import useUserStore from "../../stores/userStore.ts";
import useCommonStore from "../../stores/commonStore.ts";
import useWorkspaceStore from "../../stores/workspaceStore.js";
import {toast, ToastContainer} from "react-toastify";

const WelcomePage = () => {
    const {user, isAuthenticated} = useUserStore();
    const { isLoading, error, success } = useCommonStore();
    const { workspaces, fetchWorkspace } = useWorkspaceStore();

    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);
    const [limit, setLimit] = useState(3);

    const fetchWorkspaces = async () => {
        const result = await fetchWorkspace()
        return result
            ? toast.success(success || "Workspaces fetched successfully!")
            : toast.error(error || "Failed to fetch workspaces.")
    }

    const handleShowMore = () => {
        if(showMore) {
            setShowMore(!showMore)
            setLimit(3)
        }else{
            setShowMore(!showMore)
            setLimit(workspaces.length)
        }
    }

    useEffect(() => {
        isAuthenticated ? fetchWorkspaces() : navigate('/login')
    }, []);

    return (
        <main className="flex justify-center items-center min-h-screen bg-indigo-100">
            <ToastContainer />
            <div className="max-w-[80%] space-y-12">
        <h2 className="text-4xl font-semibold text-indigo-500">
            <PiHandWavingFill className="inline-block mr-2 animate-pulse" />
            Welcome back
        </h2>
        <div className="border border-indigo-400 outline-2 pb-2 outline-indigo-500 rounded-sm">
            <p className="px-3 py-7 bg-indigo-300 font-medium">{`Workspace for ${user.email}`}</p>
            {isLoading ?
                // Preloader
                <div className="space-y-4 divide-y divide-zinc-200">
                    {
                        [...Array(3)].map((workspace, idx) =>
                            <article key={idx} className="flex justify-between items-center p-2 animate-pulse">
                                <div className="flex gap-3 items-center">
                                    <div className="w-15 h-15 rounded-sm bg-gray-300"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="bg-gray-300 w-36 h-6 rounded-md"></div>
                                        <div className="flex gap-[2px] items-center">
                                            {[...Array(5)].map((_,id) =>
                                                <div key={id} className="w-5 h-5 rounded-sm bg-gray-300"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    disabled
                                    className="bg-gray-300 text-gray-500 font-semibold p-3 rounded-sm cursor-not-allowed">LAUNCH SPACE</button>
                            </article>
                        )}
                </div>
                :
                <div>
                    <div className="space-y-4 divide-y divide-zinc-200">
                        {workspaces.filter((_, id) => id < limit).map((workspace, idx) =>
                            <article key={idx} className="flex justify-between items-center p-2">
                                <div className="flex gap-3 items-center">
                                    <img src={workspace?.coverImage} alt="avatar" className="w-15 h-15 rounded-sm object-cover" />
                                    <div className="flex flex-col">
                                        <p className="font-bold">{workspace?.name}</p>
                                        <div className="flex gap-[2px] items-center">
                                            {[...Array(5)].map((_,id) =>
                                                <img key={id} src={workspace?.members[id]?.avatar} alt="avatar" className="w-5 h-5 rounded-sm" />
                                            )}
                                            <span className="text-xs font-medium text-zinc-600 ml-3">{`${workspace.members.length} members`}</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={`/${workspace?.slug}/dashboard`}
                                    className="bg-indigo-500 hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 text-white font-semibold p-2 rounded-sm cursor-pointer">LAUNCH SPACE</a>
                            </article>)}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleShowMore}
                            className="cursor-pointer flex items-center w-fit rounded-lg px-2 py-1 focus:border-2 focus:border-dashed focus:border-indigo-500 focus:outline-none"
                        >
                            <span>{`See ${showMore ? 'less' : 'more'}`}</span>
                            <ChevronRight className={`transform transition-transform duration-300 ${showMore ? '-rotate-90' : 'rotate-90'} w-4 h-4`} />
                        </button>
                    </div>
                </div>
            }
        </div>

        <div className="border border-indigo-400 outline-2 outline-indigo-500 rounded-sm flex justify-between items-center py-2 md:py-0 px-2 md:px-0 space-x-4">
            <div className="flex items-center space-x-4 md:w-[60%]">
                <div className="hidden md:inline-flex bg-green-100 rounded-r-full w-3/5">
                    <div className="w-[70%] h-20 flex">
                        <img src={DummyImage} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
                <p className="font-semibold text-xs md:text-sm">Want to use 3irdSpace with a different team?</p>
            </div>
            <button disabled className="w-fit p-2 uppercase text-indigo-500 md:mr-2 font-medium text-xs md:text-sm border-2 rounded-lg">Create a new workspace</button>
        </div>
    </div>
        </main>
    )
}

export default WelcomePage;
