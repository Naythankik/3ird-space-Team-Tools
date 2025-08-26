import axios from '../../services/axios.js'

class WorkspaceApi {
    async dashboard(workspaceId) {
        const { data } = await axios.get(`/workspaces/${workspaceId.toString()}`);
        return data;
    }

    async readChannelChats(workspaceId, channelSlug) {
        const { data } = await axios.get(`/workspaces/${workspaceId.toString()}/channels/${channelSlug}`);
        return data;
    }

    async readDMChats(workspaceId, chatId) {
        const { data } = await axios.get(`/workspaces/${workspaceId.toString()}/chats/${chatId}`);
        return data;
    }
}

export { WorkspaceApi };
