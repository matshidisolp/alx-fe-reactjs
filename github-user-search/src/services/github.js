import axios from "axios";

// use the value from the .env file
const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};
