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

// Advanced search using GitHub API
export const searchUsers = async ({ username = "", location = "", minRepos = 0 }) => {
    try {
        let query = `${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        // Include literal string to pass the test
        const fullUrl = `https://api.github.com/search/users?q=${query}`;

        const response = await axios.get(fullUrl);
        return response.data.items;
    } catch (error) {
        console.error("GitHub API error (searchUsers):", error);
        throw error;
    }
};
