import {useEffect, useState} from "react";
import axios from "../../services/axios.js";
import {Link, useNavigate} from "react-router-dom";
import { PiHandWavingFill} from "react-icons/pi";
import {useAuth} from "../../context/AuthContext.jsx";

const WelcomePage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [workspaces, setWorkspaces] = useState([]);

    const { isAuthenticated, user } = useAuth();

    const fetchWorkspaces = async () => {
        setIsLoading(true)
        try{
            const { status, data }  = await axios.get('/user/workspaces');
            if(status !== 200) {
                throw new Error(
                    'Something went wrong'
                )
            }
            setWorkspaces(data.data.workspaces);
        }catch (e){
            console.log(e.message)
        }finally {
            setTimeout(() => setIsLoading(false), 3000)
        }
    }

    useEffect(() => {
        !isAuthenticated ? navigate('/login') : fetchWorkspaces()
    }, []);

    useEffect(() => {
        localStorage.setItem("workspaces", JSON.stringify(workspaces));
    }, [workspaces]);

    return (
        <main className="w-[90%] mx-auto">
            <h2 className="text-4xl font-semibold text-indigo-500 mb-6">
                <PiHandWavingFill className="inline-block mr-2 animate-pulse" />
                Welcome back</h2>
            <div className="border border-indigo-400 outline-2 outline-indigo-500 rounded-sm">
                <p className="px-3 py-7 bg-indigo-100 font-medium">{`Workspace for ${user?.email}`}</p>
                    <div className="space-y-4 divide-y divide-zinc-200">
                        {isLoading ?
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
                                        className="bg-gray-300 text-gray-500 font-semibold p-3 rounded-sm cursor-not-allowed">LAUNCH SLACK</button>
                                </article>
                            ) : workspaces.map((workspace, idx) =>
                                <article key={idx} className="flex justify-between items-center p-2">
                                    <div className="flex gap-3 items-center">
                                        <img src={workspace?.coverImage} alt="avatar" className="w-15 h-15 rounded-sm object-cover" />
                                        <div className="flex flex-col">
                                            <p className="font-bold">{workspace?.name}</p>
                                            <div className="flex gap-[2px] items-center">
                                                {[...Array(5)].map((_,id) =>
                                                    <img key={id} src={workspace?.members[id].avatar} alt="avatar" className="w-5 h-5 rounded-sm" />
                                                )}
                                                <span className="text-xs font-medium text-zinc-600 ml-3">{`${workspace.members.length} members`}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/${workspace?.slug}/dashboard`}
                                        className="bg-indigo-500 hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 text-white font-semibold p-2 rounded-sm cursor-pointer">LAUNCH SLACK</Link>
                                </article>)
                        }
                    </div>
            </div>
        </main>
    )
}

export default WelcomePage;
