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
    const [details, setDetails] = useState(null);
    const [activeChat, setActiveChat] = useState(null);

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

    const fetchChannelChats = async (name) => {
        try{
            const { data } = await workspaceApi.readChannelChats(workspace, name);
            setDetails({
                channelOrChat: data.channel,
                messages: data.chats
            })
        }catch(err){
            console.log(err)
        }
    }

    const fetchDMChats = async (id) => {
        try{
            const { data } = await workspaceApi.readDMChats(workspace, id);
            setDetails({
                messages: data.chats.conversation,
                channelOrChat: data.chats,
            })
        }catch(err){
            console.log(err)
        }
    }

    const fetchChats = async (id, component, slug = null) => {
        // console.log(slug)
        // component === 'channel' ? await fetchChannelChats(slug) : await fetchDMChats(id)
        setActiveChat(id)
    }

    useEffect(() => {
        fetchWorkspace()
    }, []);

    if (isLoading) return <Loader title="Loading workspace..." />

    return (
        <div className="flex divide-x h-full">
            <DashboardAside workspace={workspaceDetails} activeChat={activeChat} openChat={fetchChats} />

            {details
                ? <DashboardComponent channelOrChat={details.channelOrChat} messages={details.messages} />
                : <NoOpenComponent />
            }
        </div>
    );
};

export default Dashboard;
