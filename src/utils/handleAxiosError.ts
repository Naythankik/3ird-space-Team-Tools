export default function handleAxiosError(error) {
    if (error.response) {
        if(Object.keys(error.response.data.errors).length){
            return error.response.data?.errors.map(err => err) || "Something went wrong on the server.";
        }else{
            return error.response.data?.message || "Something went wrong on the server.";
        }
    } else if (error.request) {
        // Request was made but no response received
        return "No response from server. Check your internet connection.";
    } else {
        // Something happened setting up the request
        return error.message || "An unexpected error occurred.";
    }
}
