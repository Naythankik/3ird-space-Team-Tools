import { create } from "zustand"

const useCommonStore = create((set, get) => ({
    isLoading: false,
    error: null,
    errors: null,
    success: null,

    setIsLoadingTrue: () => set({isLoading: true}),
    setIsLoadingFalse: () => set({isLoading: false}),

    setError: (err) => set({error: err}),
    setErrors: (errors) => set({errors: errors}),
    resetError: () => set({error: null}),
    hasError: () => get().error,

    setSuccess: (success) => set({success}),
    resetSuccess: () => set({success: null})
}))


export default useCommonStore;
