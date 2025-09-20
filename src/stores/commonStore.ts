import { create } from "zustand";

type CommonState = {
    isLoading: boolean;
    error: string | null;
    errors: Record<string, string> | null;
    success: string | null;

    setIsLoadingTrue: () => void;
    setIsLoadingFalse: () => void;

    setError: (err: string) => void;
    setErrors: (errors: Record<string, string>) => void;
    resetError: () => void;
    hasError: () => string | null;

    setSuccess: (success: string) => void;
    resetSuccess: () => void;
};

const useCommonStore = create<CommonState>((set, get) => ({
    isLoading: false,
    error: null,
    errors: null,
    success: null,

    setIsLoadingTrue: () => set({ isLoading: true }),
    setIsLoadingFalse: () => set({ isLoading: false }),

    setError: (err) => set({ error: err }),
    setErrors: (errors) => set({ errors }),
    resetError: () => set({ error: null }),
    hasError: () => get().error,

    setSuccess: (success) => set({ success }),
    resetSuccess: () => set({ success: null }),
}));

export default useCommonStore;
