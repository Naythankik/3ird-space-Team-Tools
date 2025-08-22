import axios from '../../services/axios.js'

class WorkspaceApi {
    async dashboard(workspaceId) {
        const { data } = await axios.get(`/workspaces/${workspaceId.toString()}`);
        return data;
    }

    async readChannel(workspaceId, channelId) {
        const { data } = await axios.get(`/workspaces/${workspaceId.toString()}/channels/${channelId}`);
        return data;
    }
}

export { WorkspaceApi };
