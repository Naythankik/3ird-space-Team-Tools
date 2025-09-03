import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import useCommonStore from "./commonStore.js";
import { WorkspaceApi } from "../features/user/workspaceApi.js";
import axios from "../services/axios.js";

const workspaceApi = new WorkspaceApi();

const useWorkspaceStore = create(
    persist(
        (set) => ({
            workspaces: [],

            fetchWorkspace: async () => {
                const commonStore = useCommonStore.getState();
                commonStore.setIsLoadingTrue();
                try {
                    const { data }  = await axios.get('/user/workspaces');
                    set({
                        workspaces: data.data.workspaces
                    })
                    commonStore.setSuccess(data.message)
                    return true;
                } catch (err) {
                    commonStore.setError(
                        err?.response?.data?.message || err?.message || err
                    );
                    return false;
                } finally {
                    commonStore.setIsLoadingFalse();
                }
            },
        }),
        {
            name: "workspace-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useWorkspaceStore;
