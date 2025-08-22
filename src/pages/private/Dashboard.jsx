import DashboardAside from "../../components/PrivateComponent/InAside/DashboardAside.jsx";
import DashboardComponent from "../../components/PrivateComponent/DashboardComponent.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import { WorkspaceApi } from "../../features/user/workspaceApi.js";

const workspaceApi = new WorkspaceApi();

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [channels, setChannels] = useState([]);
    const [directMessages, setDirectMessages] = useState([]);
    const [channelDetails, setChannelDetails] = useState([]);
    const [activeChannel, setActiveChannel] = useState(null);

    const { pathname } = useLocation();

    const fetchWorkspace = async () => {
        setIsLoading(true)
        const workspaceSlug = pathname.split('/')[1];

        try{
            const { data } = await workspaceApi.dashboard(workspaceSlug)
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
        const workspaceSlug = pathname.split('/')[1];

        try{
            const { data } = await workspaceApi.readChannel(workspaceSlug, channel)
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
    }, [])


    return (
        <div className="flex divide-x h-full">
            <DashboardAside channels={channels} directMessages={directMessages} readChannel={fetchWorkspaceChannel} activeChannel={activeChannel}/>
            <DashboardComponent props={channelDetails} />
        </div>
    );
};

export default Dashboard;
