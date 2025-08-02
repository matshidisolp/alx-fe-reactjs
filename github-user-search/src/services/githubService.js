import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";

// Fetch a single user's data by username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("GitHub API error (fetchUserData):", error);
        throw error;
    }
};

// Advanced search in query "amy+location:london+repos:>10"
export const searchUsers = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
        return response.data.items; // returns array of users
    } catch (error) {
        console.error("GitHub API error (searchUsers):", error);
        throw error;
    }
};
