import { createContext } from "react";
import axios from "axios";  // Only keep axios if needed for the frontend API calls.

const AppContext = createContext();

export const AppContextProvider = (props) => {

    // Example API function to download the resume
    const downloadResume = async () => {
        try {
            const response = await axios.get('/resume');  // Make sure to use the correct API URL
            console.log("Resume downloaded:", response.data);
            return response.data;  // Return the result (could be the resume data)
        } catch (error) {
            console.error("Error downloading resume:", error);
            return null;  // Handle the error gracefully
        }
    };

    const value = {
        downloadResume,  // Expose downloadResume to the rest of your app
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
