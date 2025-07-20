export default function handleAxiosError(error) {
    if (error.response) {
        // Server responded with a status code outside 2xx
        return error.response.data?.message || "Something went wrong on the server.";
    } else if (error.request) {
        // Request was made but no response received
        return "No response from server. Check your internet connection.";
    } else {
        // Something happened setting up the request
        return error.message || "An unexpected error occurred.";
    }
}
