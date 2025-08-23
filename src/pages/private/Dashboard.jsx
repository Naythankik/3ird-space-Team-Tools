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
    const [channels, setChannels] = useState([]);
    const [directMessages, setDirectMessages] = useState([]);
    const [channelDetails, setChannelDetails] = useState(null);
    const [activeChannel, setActiveChannel] = useState(null);

    const { workspace } = useParams()

    const fetchWorkspace = async () => {
        setIsLoading(true)

        try{
            const { data } = await workspaceApi.dashboard(workspace)
            setChannels(data.channels)
            setDirectMessages(data.DMs)
        }catch(err){
            console.log(err.message)
        }finally {
            setIsLoading(false)
        }
    }

    const fetchWorkspaceChannel = async (channel) => {
        setIsLoading(true)

        try{
            const { data } = await workspaceApi.readChannel(workspace, channel)
            setChannelDetails(data)
            setActiveChannel(channel)
        }catch(err){
            console.log(err)
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchWorkspace()
    }, []);

    if (isLoading) return <Loader title="Loading workspace..." />

    return (
        <div className="flex divide-x h-full">
            <DashboardAside channels={channels} directMessages={directMessages} readChannel={fetchWorkspaceChannel} activeChannel={activeChannel}/>

            {channelDetails ?
                <DashboardComponent channelDetails={channelDetails} />
                : <NoOpenComponent />
            }
        </div>
    );
};

export default Dashboard;
