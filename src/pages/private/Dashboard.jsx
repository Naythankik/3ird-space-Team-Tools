import DashboardAside from "../../components/PrivateComponent/InAside/DashboardAside.jsx";
import DashboardComponent from "../../components/PrivateComponent/DashboardComponent.jsx";
import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { WorkspaceApi } from "../../features/user/workspaceApi.js";
import Loader from "../../components/Loader.jsx";
import NoOpenComponent from "../../components/NoOpenComponent.jsx";

const workspaceApi = new WorkspaceApi();

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [workspaceDetails, setWorkspaceDetails] = useState(null);
    const [chats, setChats] = useState(null);
    const [activeChat, setActiveChat] = useState(null);
    const [title, setTitle] = useState(null);

    const { workspace } = useParams()

    const fetchWorkspace = async () => {
        setIsLoading(true)

        try{
            const { data } = await workspaceApi.dashboard(workspace)
            setWorkspaceDetails({...data});
        }catch(err){
            console.log(err.message)
        }finally {
            setIsLoading(false)
        }
    }

    const fetchChats = async (id, component, slug = null) => {
        try{
            const { data } = component === 'Channels'
                ? await workspaceApi.readChannelChats(workspace, slug)
                : await workspaceApi.readDMChats(workspace, id)
            console.log(data)
            setChats(data)
            setTitle(component === 'Channels' ? 'Channels' : 'Chats')
            setActiveChat(id)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchWorkspace()
    }, []);

    if (isLoading) return <Loader title="Loading workspace..." />

    return (
        <div className="flex divide-x h-full">
            <DashboardAside workspace={workspaceDetails} activeChat={activeChat} openChat={fetchChats} />

            {chats
                ? <DashboardComponent chats={chats} title={title} />
                : <NoOpenComponent />
            }
        </div>
    );
};

export default Dashboard;
