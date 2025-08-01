import React, { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent page reload
    if (username.trim() === "") return;
    onSearch(username);
    setUsername(""); // to clear input after submit
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", display: "flex", gap }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;