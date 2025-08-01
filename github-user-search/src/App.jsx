import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import { fetchUserData } from './services/githubService';

function App() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (username) => {
        setLoading(true);
        setError("");
        setUserData(data);
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError("User not found, try again.");
        } finally {
            setLoading(false);
        }
    };

      return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <p>Search for GitHub users by username and more.</p>

      <SearchBar onSearch={handleSearch} />

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
